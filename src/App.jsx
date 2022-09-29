import { useEffect, useState } from 'react';
import './App.scss';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, todo } from './lib/firebase';
import { getDoc, doc } from 'firebase/firestore';

export default function App() {
    let [user, setUser] = useState(undefined);
    let [todoList, setTodoList] = useState(undefined);

    useEffect(() => {
        let unsub = onAuthStateChanged(auth, u => u ? loginUser(u) : logoutUser());
        return () => unsub();
    }, []);

    async function loginUser(u) {
        let tmp = await getDoc(doc(todo, u.uid));

        setTodoList(tmp.data());
        setUser(u);
    }

    function logoutUser() {
        setUser(undefined);
        setTodoList(undefined);
    }

    return (
        <div>

            <div class="outline">
                <h1 class="title">Reddit v2</h1>
                <form>
                    <input type="text" class="form" placeholder="Username" />
                    <input type="password" class="form" placeholder="Password" />
                    <input type="submit" class="form" id="submit" />
                </form>
            </div>

        </div>
    );
}
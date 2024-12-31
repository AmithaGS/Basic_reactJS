import React, { useState } from "react";
import Login from './Login';
export default function Index () {
    const user = {
        username : 'AK',
        balance : 2500
    }
    const [click, setClick] = useState(false);
    if (click) {
        return (
            <Login user = {user} />
        )
    }
    return (
        <div>
            <h1>Index component</h1>
            <button onClick={() => {setClick(true)}}>Login</button>
        </div>
    )
}
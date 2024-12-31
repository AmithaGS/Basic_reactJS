import React, { useState } from "react"
import Cart from './Cart';

export default function Shopping ({user}) {
    const [click, setClick] = useState(false);
    if (click) {
        return (
            <Cart user = {user} />
        )
    }
    return (
        <div>
            <h1>Shopping component</h1>
            <button onClick={() => {setClick(true)}}>
                Cart
            </button>
        </div>
    )
}
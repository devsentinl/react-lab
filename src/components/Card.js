import React, { useState } from 'react'
export default function Card() {
    const [cuenta, setCuenta] = useState(0);
    return (
        <div>
            la cuenta es: {cuenta}
            <button onClick={() => { setCuenta(cuenta + 1) }} className="button">
                INCREMENTAR
            </button>
        </div>
    )
}
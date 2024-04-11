'use client';
import {useEffect, useState} from "react";

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsSignedIn(true)
        }, 1001)
    }, []);

    return (
        <div>
            {
                isSignedIn ? <div>
                        <div>You are signed in</div>
                        <button className='px-2 py-1 bg-gray-600 text-white'
                                onClick={() => setIsSignedIn(false)}>SignOut
                        </button>
                    </div> :
                    <div>
                        <div>You are signed out</div>
                        <button className='px-2 py-1 bg-gray-600 text-white'
                                onClick={() => setIsSignedIn(true)}>SignIn
                        </button>
                    </div>
            }
        </div>
    )
}
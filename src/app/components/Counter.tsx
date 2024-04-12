'use client';
import React from "react";
import useCounter from "@/app/hooks/useCounter";

export default function Counter() {
    const {count, increment, decrement} = useCounter(0);

    return (
        <div className = "w-full h-screen flex justify-center items-center">
            <div className = "text-center">
                <h1 className = "text-2xl font-bold">React Counter</h1>
                <span className = "block text-2xl my-4">{count}</span>
                <div className = "my-4">
                    <button className = "px-4 py-1 mx-2 border-2 border-b-blue-50 rounded-lg font-bold"
                            onClick = {increment}>Increase
                    </button>
                    <button className = "px-4 py-1 mx-2 border-2 border-b-blue-50 rounded-lg font-bold"
                            onClick = {decrement}>Decrease
                    </button>
                </div>
            </div>
        </div>
    );
}
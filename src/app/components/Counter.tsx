import React from "react";

export default function Counter({ count, increase, decrease }: CounterPropsType) {
    return (
        <div className = "w-full h-screen flex justify-center items-center">
            <div className = "text-center">
                <h1 className = "text-2xl font-bold">React Counter</h1>
                <span className = "block text-2xl my-4">{count}</span>
                <div className = "my-4">
                    {
                        increase &&
                        <button className = "px-4 py-1 mx-2 border-2 border-b-blue-50 rounded-lg font-bold"
                                onClick = {increase}>Increase</button>
                    }
                    {
                        decrease &&
                        <button className = "px-4 py-1 mx-2 border-2 border-b-blue-50 rounded-lg font-bold"
                                onClick = {decrease}>Decrease</button>
                    }
                </div>
            </div>
        </div>
    );
}
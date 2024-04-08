'use client';
import React, {ChangeEvent} from "react";

export default function Counter() {
    const [counter, setCounter] = React.useState(0);
    const [payload, setPayload] = React.useState(1);

    const payloadChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        const evaluatedPayload = Number.isNaN(e.target.valueAsNumber) ? 1 : e.target.valueAsNumber
        setPayload(evaluatedPayload)
    }

    //increase counter
    const increase = () => {
        setCounter(count => count + payload);
    };

    //decrease counter
    const decrease = () => {
        setCounter(count => count - payload);
    };

    //reset counter
    const reset = () => {
        setCounter(0)
    }


    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>React Counter</h1>
                <span className='block text-2xl my-4'>{counter}</span>
                <div className='my-4'>
                    <div>
                        <label htmlFor='payload-input' className='block'>Custom payload</label>
                        <input
                            id='payload-input'
                            type='number'
                            className='w-64 py-1 border-2 border-b-blue-50 rounded-lg outline-none text-center my-2'
                            defaultValue={1}
                            onChange={payloadChangeHandle}
                        />
                    </div>
                    <button className='px-4 py-1 mx-2 border-2 border-b-blue-50 rounded-lg font-bold'
                            onClick={increase}>Increase
                    </button>
                    <button className='px-4 py-1 mx-2 border-2 border-b-blue-50 rounded-lg font-bold'
                            onClick={reset}>Reset
                    </button>
                    <button className='px-4 py-1 mx-2 border-2 border-b-blue-50 rounded-lg font-bold'
                            onClick={decrease}>Decrease
                    </button>
                </div>
            </div>
        </div>
    )
}
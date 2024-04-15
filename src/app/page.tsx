'use client';
import Counter from "@/app/components/Counter";
import {useState} from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    return (
        <main>
            <Counter count = {count} increase = {increase} decrease = {decrease}/>
        </main>
    );
}

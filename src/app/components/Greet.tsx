type GreetPropsType = {
    name?: string
}

export default function Greet({name}: GreetPropsType) {
    return (
        <h1>Hello, {name ? name : 'World'}!</h1>
    )
}
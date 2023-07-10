export type DummyProps = {
    name: string;
}

export function Dummy(props: DummyProps){
    const {name} = props; 
    return(<h1>{`Hello ${name}.`}</h1>)
}
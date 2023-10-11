import {useState, useEffect} from "react";


export default function App() {
    
    const [heading, setHeading] = useState("my-test-app");

    const handleClick = () => {
        setHeading((prevHeading) => "a test-app project")
    }

    return(
        <div>
        <h1> {heading} </h1>
        <button role="button" onClick={handleClick}> Update Heading </button>
        </div>
    )
}
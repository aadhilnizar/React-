import React,{useEffect, useState} from 'react'

function LocalStorage() {

    const [name, setName] = useState("") ;

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) {
            setName(storedName);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("name", name);
    }, [name]);

    return (
        <div className="p-4">
            <h1>Local Storage Example</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2"
            />
            {name && <p>Hello, {name}!</p>}
        </div>
    );
}

export default LocalStorage   ;
import { useState } from "react";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState<string[]>([]);

    return (
        <>
            <section
                id="main"
                className="flex flex-col items-center min-h-screen bg-gray-100"
            >
                <h1 className="gaegu-regular text-6xl text-gray-800 my-8">
                    jot.
                </h1>
            </section>
        </>
    );
}

export default App;

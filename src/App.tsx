import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import NewTodoItem from "./components/NewTodoItem";
import type { Task } from "./types";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const onToggleTask = (taskId: string) => {
        setTasks(
            tasks.map((t) =>
                t.id === taskId ? { ...t, completed: !t.completed } : t,
            ),
        );
    };

    return (
        <>
            <section
                id="main"
                className="flex flex-col items-center min-h-screen bg-white"
            >
                <h1 className="gaegu-regular text-6xl text-gray-800 my-8">
                    jot.
                </h1>
                <ul className="w-full max-w-lg">
                    {tasks.map((task) => (
                        <TodoItem
                            key={task.id}
                            text={task.text}
                            completed={task.completed}
                            onToggle={() => onToggleTask(task.id)}
                        />
                    ))}
                    <NewTodoItem tasks={tasks} setTasks={setTasks} />
                </ul>
                <div className="w-full max-w-lg items-center px-8">
                    <button
                        onClick={() => {
                            setTasks(tasks.filter((task) => !task.completed));
                        }}
                        className="gaegu-regular text-left transition-colors mr-auto text-gray-600 cursor-pointer hover:text-gray-400"
                    >
                        clear completed tasks
                    </button>
                </div>
            </section>
        </>
    );
}

export default App;

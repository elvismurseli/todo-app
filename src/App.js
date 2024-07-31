import { useState, useEffect, useRef } from "react";
import Search from "./Components/Search";
import TodoList from "./Components/TodoList";

const App = () => {
    const reff = useRef(null);

    const initialState = JSON.parse(localStorage.getItem("todos")) || [];

    const [todoArr, setTodoArr] = useState(initialState);
    const [inp_val, set_inp_val] = useState("");
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoArr));
    }, [todoArr]);

    return (
        <div className="App">
            <Search
                setTodoArr={setTodoArr}
                todoArr={todoArr}
                inp_val={inp_val}
                set_inp_val={set_inp_val}
                edit={edit}
                setEdit={setEdit}
                reff={reff}
            />
            <TodoList
                todoArr={todoArr}
                setTodoArr={setTodoArr}
                setEdit={setEdit}
                reff={reff}
            />
        </div>
    );
};

export default App;

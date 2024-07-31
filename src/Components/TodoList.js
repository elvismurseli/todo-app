import Todo from "./Todo";

const TodoList = ({ todoArr, setTodoArr, setEdit, reff }) => {

    return (
        <div className="todo-list">
            {
                todoArr.map((todo, index) => (
                    <Todo 
                        todo={todo}
                        key={index}
                        todoArr={todoArr}
                        index={index}
                        setTodoArr={setTodoArr}
                        setEdit={setEdit}
                        reff={reff}
                    />
                ))
            }
        </div>
    );
}

export default TodoList;
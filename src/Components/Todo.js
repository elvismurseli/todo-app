
const Todo = ({ todo, todoArr, index, setTodoArr, setEdit, reff }) => {

    const handleDelete = () => {
        const newArr = todoArr.filter(e => e.id !== todoArr[index].id)
        setTodoArr(newArr)
    }

    const handleDone = () => {
        setTodoArr(
            todoArr.map(e => {
                if (e.id === todo.id) {
                    return {...e, completed: !e.completed}
                }
                return e
            })
        )
    }

    const handleEdit = (todoId) => {
        const findTodo = todoArr.find(todo => todo.id == todoId.id)
        setEdit(findTodo)
        reff.current.focus()
    }

    return (
        <div className={todoArr[index].completed === true ? 'single done' : 'single'}>
            <p>{todo.value}</p>
            <div className="set">
                <button onClick={() => handleEdit(todo)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={handleDone}>
                    <i className="fa-solid fa-circle-check"></i>
                </button>
                <button onClick={handleDelete}>
                    <i className="fa-solid fa-circle-xmark"></i>
                </button>
            </div>
        </div>
    );
}

export default Todo;
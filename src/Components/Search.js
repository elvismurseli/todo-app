import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Search = ({ setTodoArr, todoArr, set_inp_val, inp_val, edit, setEdit, reff  }) => {

    const updateTodo = (value, id, completed) => {
        const newTodo = todoArr.map((e) => e.id === id ? {value, id, completed} : e)
        setTodoArr(newTodo)
        setEdit('')
    }

    useEffect(() => {
        if (edit) {
            set_inp_val(edit.value)
        } else {
            set_inp_val('')
        }
    }, [edit, set_inp_val])

    const handleClick = () => {
        if (!edit) {
            if (!inp_val == '') {
                setTodoArr([...todoArr, {
                    value: inp_val,
                    completed: false,
                    id: uuidv4()
                }])
                set_inp_val('')
            }
            reff.current.focus()

        } else {
            updateTodo(inp_val, edit.id, edit.completed)
        }
    }

    return (
        <div className="form-group">
            <input type="text" placeholder="Add Todo..." value={inp_val} onChange={e => set_inp_val(e.target.value)} ref={reff} />
            <button onClick={handleClick}>{edit ? 'Update' : 'Add Todo'}</button>
        </div>
    );
}

export default Search;
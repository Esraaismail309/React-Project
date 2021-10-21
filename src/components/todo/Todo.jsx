import { useDispatch, useSelector } from "react-redux";
import { addToDoAction, deleteToDoAction } from "./../redux/todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function ToDo() {
    const toDoState = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const addTodo = (task) => {
        dispatch(addToDoAction(task))
    };

    const deleteTodo = (item) => {
        dispatch(deleteToDoAction(item))
    }

    return (
        <div className="text-center py-2 todo-wrapper container">
            <TodoForm addTodo={addTodo} />
            <TodoList todos={toDoState} deleteTodo={deleteTodo} />
        </div>
    );
}
export default ToDo
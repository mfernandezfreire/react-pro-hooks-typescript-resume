import { TodoContext } from "./TodoContext";


import { TodoState } from '../interfaces/interfaces';
import { TodoReducer } from "./TodoReducer";
import { useReducer } from "react";

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false,
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false,
        }
    ],
    completed: 0,
    pending: 0,
}

interface TodoProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: TodoProviderProps) => {

    const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

    const toggleTodo = (id: string) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }

    return (
        <TodoContext.Provider
            value={{ 
                todoState,
                toggleTodo 
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
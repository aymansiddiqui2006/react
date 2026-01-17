import { createContext,useContext } from "react";

export const To_doContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        },
       ],
       addTodo:(todo)=>{},
       updateTodo:(id,todo)=>{},
       deleteTodo:(id)=>{},
       tooglecomplete:(id)=>{},
})

export const useTodo =()=>{
    return useContext(To_doContext)
}

export const TodoProvider=To_doContext.Provider
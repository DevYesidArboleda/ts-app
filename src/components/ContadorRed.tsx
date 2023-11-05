import { useReducer } from "react";

const initiaState = {
    contador:0
}

type ActionType = |{type : "Incrementar"}|{type : "Decrementar"}|{type : "custom", payload:number}

const contadorReducer = ( state: typeof initiaState, action: ActionType ) => {
    switch (action.type) {
        case "Incrementar" :
            return {
                ...state,
                contador: state.contador + 1 
            }
            case "Decrementar" :
            return {
                ...state,
                contador: state.contador - 1 
            }
            case "custom" :
                return {
                    ...state,
                    contador: action.payload
                }
        default:
            return state;
    }

}

export const ContadorRed = () => {

    const [ { contador }, dispatch] = useReducer(contadorReducer, initiaState)

  return (
    <div className="flex gap-2">
        <h2>contador: { contador } </h2>
        <button onClick={() =>{
            dispatch({ type:"Incrementar" })
        } } className="bg-slate-300 rounded-xlborder-x-2 border-y-2 border-white rounded-sm p-3 "> + 1 </button>
        <button onClick={() =>{
            dispatch({ type:"Decrementar" })
        } } className="bg-red-500 rounded-xlborder-x-2 border-y-2 border-white rounded-sm p-3 "> - 1 </button>
        <button onClick={() =>{
            dispatch({ type:"custom", payload: 100 })
        } } className="bg-green-400 rounded-xlborder-x-2 border-y-2 border-white rounded-sm p-3 "> 100</button>
    </div>
  )
}

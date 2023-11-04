import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000)


  return (
    <div>
        Milisegundos { milisegundos }        
        <Timer milisegundos= { milisegundos }/>
        <button onClick={ () => setMilisegundos(1000) }>
          1000
        </button>
        <button onClick={ () => setMilisegundos(2000)}> 
          2000
        </button>
    </div>
  )
}

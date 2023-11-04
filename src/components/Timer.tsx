import { useEffect, useRef, useState } from "react"

type TimerArg = {
  milisegundos: number
}

export const Timer = ( { milisegundos }: TimerArg ) => {

  console.log()

  const [segundos, setSegundos] = useState(0)
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval(ref.current)
    ref.current =  setInterval( () => setSegundos( s => s + 1 ), milisegundos )
  }, [ milisegundos ])
  

  return (
    <div>
        Timer hijo <h1>
            contador { segundos }
        </h1>
    </div>
  )
}

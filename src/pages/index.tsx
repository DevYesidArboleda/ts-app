import { ContadorRed } from "@/components/ContadorRed";
import Counter from "@/components/Counter";
import { Formulario } from "@/components/Formulario";
import { TimerPadre } from "@/components/TimerPadre";
import { Usuario } from "@/components/Usuario";

export default function Home() {
  return (
    <div>
      <h1>UseState</h1>
      <br />
      <Counter/>
      <Usuario/>
      -----------
      <h2>UseRef-useEffect</h2>
      <TimerPadre/>      
      ------------
      <h2>UseReducer</h2>
      <ContadorRed/>
      ------------
      <h2>customHooks</h2>
      <Formulario/>
    </div>
  )
}

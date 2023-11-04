import Counter from "@/components/Counter";
import { TimerPadre } from "@/components/TimerPadre";
import { Usuario } from "@/components/Usuario";

export default function Home() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <br />
      <Counter/>
      <Usuario/>
      -----------
      <TimerPadre/>      
    </div>
  )
}

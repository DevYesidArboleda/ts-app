import { useForm } from "@/hooks/useForm"
import { ChangeEvent, useState } from "react"

interface FormData {
    emai:string;
    nombre:string;
    edad:number;
}

export const Formulario = () => {

    const { nombre, edad, email, formulario, handleChange } = useForm<FormData>({
        email:"",
        nombre:"",
        edad:35
    })

   //const { email, nombre, edad} = formulario

    /*const [formulario, setFormulario] = useState({
        nombre:"",
        email:""
    })

    const handleChange = ( { target }: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }*/

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label htmlFor="">Emai:</label>
            <input type="email" className="form" name="email" onChange={ handleChange } value={email}/>
        </div>
        <div className="mb-3">
            <label htmlFor="">Nombre:</label>
            <input type="text" className="form" name="nombre" onChange={ handleChange } value={nombre}/>
        </div>
        <div className="mb-3">
            <label htmlFor="">Edad:</label>
            <input type="number" className="form" name="edad" onChange={ handleChange } value={edad}/>
        </div>
        <span>{JSON.stringify( formulario )}</span>
    </form>
  )
}

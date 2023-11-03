import { useState } from "react"

interface User{
    uid:string,
    name:string
}

export const Usuario = () => {  
  
    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid:"1212121asas",
            name:"yesid"
        })
    }

  return (
    <div>
        <h1>usuario ingresa es</h1>
        <button onClick={ login } className="bg-slate-500 rounded-md ">Click</button>
        <button onClick={() => setUser({uid:"",name:""}) } className="bg-slate-500 rounded-md ">Reset</button>
        <div>
            { !user ? "No hay usuarios" : <pre> { JSON.stringify(user) } </pre>}
        </div>
    </div>
  )
}

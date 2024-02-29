import { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate, Outlet} from 'react-router-dom'

const PrivateRoute = () => {
    const navigate = useNavigate()
    const [contraseña, setContraseña] = useState('')
    const [mostrarAlerta, setMostrarAlerta] = useState(false)

    useEffect(()=>{
    if(contraseña !=123){
        setMostrarAlerta(true)
    }
}, [contraseña])

const handleSubmit = (e) => {
    e.preventDefault()
    if(contraseña === '123'){
        navigate('/enter_products')
    } else {
        setMostrarAlerta(true)
    }
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)} />
            <button type="submit">Ingresar</button>
        </form>
        {mostrarAlerta && <div>Contraseña incorrecta, por favor intente de nuevo.</div>}
        <Outlet/>
    </div>
    )
}

export default PrivateRoute


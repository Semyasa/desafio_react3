import { useState } from "react"
import { BaseColaboradores } from "../BaseColaboradores"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button"


const Colaboradores = () => {

    const [contador, setContador] = useState(4)
    const [buscarColaboradores, setBuscarColaboradores] = useState('')
    const [nombreColaborador, setNombreColaborador] = useState('')
    const [correoColaborador, setCorreoColaborador] = useState('')
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
    const [listaFiltrada, setListaFiltrada] = useState([])
    

    //Función enviar el formulario
    const enviarFormulario = (e) => {

        if (nombreColaborador === '' || correoColaborador === ''){
            e.preventDefault()
            alert("Debe llenar todos los campos del formulario")
        } else{
            e.preventDefault()
            setListaColaboradores([...listaColaboradores, { id: contador,nombre: nombreColaborador, correo: correoColaborador }])
            setContador( contador + 1 )
            setNombreColaborador('')
            setCorreoColaborador('')

        }
    }

    //Función para Buscar Colaboradores
    const buscar = (e) => {

        setBuscarColaboradores(e.target.value)
        const nuevoListado = listaColaboradores
        const buscado = nuevoListado.filter(colaborador => colaborador.nombre === buscarColaboradores)
        setListaFiltrada(buscado)
        console.log(listaFiltrada)

    }

    return (
        <div className="contenedor">
            <div className="cabecera">
                <h4>Buscador de Colaboradores</h4>
                <input type="text" placeholder="Busca un colaborador" onChange={buscar} value={buscarColaboradores} />
            </div>
            <div className="ingresoInformacion">
                <form onSubmit={enviarFormulario}>
                    <p>Nombre del colaborador</p>
                    <input name="nombreColaborador" type="text" placeholder="Ingresa el nombre del colaborador" onChange={(e) => setNombreColaborador(e.target.value)} value={nombreColaborador}/>
                    <p>Correo del colaborador</p>
                    <input name="correoColaborador" type="text" placeholder="Ingresa correo del colaborador" onChange={(e) => setCorreoColaborador(e.target.value)} value={correoColaborador}/>
                    <div className="boton">
                        <button className="btn btn-primary">Agregar colaborador</button>
                    </div>
                </form>
            </div>
            <div className="listado">
                <hr></hr>
                <h2>Listado de Colaboradores</h2>

                    {listaFiltrada.length === 0 ? listaColaboradores.map(colaborador => <p key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</p>) : listaFiltrada.map(colaborador => <p key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</p>)}
                
            </div>
        </div>

    )
}

export default Colaboradores
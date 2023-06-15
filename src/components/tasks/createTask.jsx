import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import cerrarModal from "./img/cerrar.svg"
import MessageError from "./messageError"

const createTask = ({ setModal, name, setName }) => {

  const [status, setStatus] = useState('');
  const [error, setError] = useState(false)
  const [data, setData] = useState({ name: name, status: false })

  const crearTarea = async () => {
    console.log(data)
    const valoresVacios = Object.values(data).find((name) => name === 0)

    if (valoresVacios === '') {
      console.log(valoresVacios)
      return;
    }

    console.log(data)
    await fetch('http://localhost:3000/crear', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(data)

  }

  const handleSubmit = e => {
    if (data.name != '' && data.status != '') {
      setError(false)
      crearTarea()
    } else {
      e.preventDefault()
      setError(true)
    }

  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="cerrar-modal">
        <img
          className="icon-cerrar-modal"
          src={cerrarModal}
          onClick={() => setModal(false)}
        ></img>
      </div>
      <form onSubmit={handleSubmit} className="form-task" >
        <div>
          <h2 className="title-nueva-tarea">Nueva Tarea</h2>
        </div>
        <div className="campo">
          <label>Tarea</label>
          <input
            className="input-crear-tarea"
            id="name"
            type="text"
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="campo">
          <label>Estado</label>
          <select
            className="select-crear-tarea"
            id="status"
            value={data.status}
            onChange={e => setData({ ...data, status: e.target.value })}
          >
            <option>--Seleccione--</option>
            <option value="true">Activa</option>
            <option value="false">Desactivo</option>
          </select>
        </div>

        <div>
          <input
            type="submit"
            className="btn-crear-tarea"
            value="Agregar"
          />
        </div>
        <div>
          {<MessageError error={error} />}
        </div>
      </form>
    </div>, document.getElementById("modal")
  )
}

export default createTask
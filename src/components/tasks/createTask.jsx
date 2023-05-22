import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import cerrarModal from "./img/cerrar.svg"

const createTask = ({ setModal, tarea, setTarea }) => {

  const [estado, setEstado] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if ([tarea, estado].includes('')) {
      alert('Todos los campos son obligatorios')
    }

    console.log(tarea, estado)
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={cerrarModal}
        ></img>
      </div>
      <form onSubmit={handleSubmit} className="form-task" >
        <h2>Nueva Tarea</h2>
        <div className="campo">
          <label>Tarea</label>
          <input
            className="input-crear-tarea"
            id="name"
            type="text"
            value={tarea}
            onChange={e => setTarea(e.target.value)}
          />
        </div>
        <div className="campo">
          <label>Estado</label>
          <select
            className="select-crear-tarea"
            id="status"
            value={estado}
            onChange={e => setEstado(e.target.value)}
          >
            <option>--Seleccione--</option>
            <option value="true">Activa</option>
            <option value="false">Desactivo</option>
          </select>
        </div>

        <input
          type="submit"
          value="Enviar"
        />
      </form>
    </div>, document.getElementById("modal")
  )
}

export default createTask
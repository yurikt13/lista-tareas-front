import { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import cerrarModal from "./img/cerrar.svg"
import MessageError from "./messageError"

const createTask = ({ setModal, tarea, setTarea }) => {

  const [estado, setEstado] = useState('');
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
    if (estado.includes != '') {
      setError(true)
    } else {
      setError(false)
    }

  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={cerrarModal}
          onClick={() => setModal(false)}
        ></img>
      </div>
      <form onSubmit={handleSubmit} className="form-task" >
        <div>
          <h2>Nueva Tarea</h2>
        </div>
        <div>
          {error && <MessageError
            setError={setError}
          />}
        </div>
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
          className="btn-crear-tarea"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>, document.getElementById("modal")
  )
}

export default createTask
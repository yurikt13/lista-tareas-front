import { useState, useEffect } from "react";
import CreateTask from "../components/tasks/createTask";
import { AiOutlinePlus } from "react-icons/ai";
import { GrStatusGoodSmall } from "react-icons/gr"


const Home = () => {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState()
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/")
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData)
            })
    }, []);


    const handleCrearTarea = () => {
        setModal(true)
    }


    return (
        <div className="container-home">
            <div>
                <h1>Today</h1>
            </div>
            <div className="container-task">
                <div className="container-create-task">
                    <input className="input-create-task" placeholder="Escribe una tarea" value={name} onChange={e => setName(e.target.value)} />
                    <div className="container-icon-create-task">
                        <AiOutlinePlus className="icon-create-task" onClick={() => handleCrearTarea()} />
                    </div>

                </div>
                <div className="container-create-task-list">
                    {data.tasks && data.tasks.map((task) =>
                        <div className="container-create-task">
                            <p className="title-task">{task.name}</p>
                            <div className="container-icon-task">
                                <GrStatusGoodSmall className={`icon-task-${task.status}`} />
                            </div>
                        </div>
                    )}

                    {modal && <CreateTask
                        setModal={setModal}
                        name={name}
                        setName={setName}

                    />}
                </div>
            </div>
        </div>
    )
}

export default Home
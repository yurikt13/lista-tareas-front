import { useEffect, useState } from "react";
import { GrStatusGoodSmall } from "react-icons/gr"
import { AiOutlinePlus } from 'react-icons/ai'

const Tasks = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/")
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                setData(responseData)
            })
    }, []);


    return (

        <div className="container-task">
            <div className="container-create-task">
                <input className="input-create-task" placeholder="Escribe una tarea" />
                <div className="container-icon-create-task">
                    <AiOutlinePlus className="icon-create-task"/>
                </div>
                <div>

                </div>
            </div>
            {data.tasks && data.tasks.map((task) =>
                <div className="task">
                    <p className="title-task">{task.name}</p>
                    <div className="container-icon-task">
                        <GrStatusGoodSmall className="icon-task" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Tasks
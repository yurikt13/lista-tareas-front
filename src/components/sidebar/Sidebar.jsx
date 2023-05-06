import { AiOutlineMenu } from "react-icons/ai"
import { BiTask } from "react-icons/bi"

const Sidebar = () => {
    return (
        <>
            <div className="container-menu">
                <div className="container-title-menu">
                    <h1 className="title-menu">Menu</h1>
                    <div className="container-icon-menu">
                        <AiOutlineMenu className="icon-menu" />
                    </div>
                </div>
                <div className="container-task-menu">
                    <div className="container-icon-task-menu">
                        <BiTask className="icon-task-menu" />
                    </div>
                    <p className="title-item-menu">Tareas</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar
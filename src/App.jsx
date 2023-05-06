import './styles/App.css'
import Sidebar from './components/sidebar/Sidebar'
import Body from './view/Home'

function App() {

  return (
    <div className="container-app">
      <Sidebar />
      <Body />
    </div>

  )
}

export default App

import { Rotas } from './router/router'
// import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/Footer'

function App() {


  return (
    <div className='allPages'>
    <Header/>
      <Rotas/>
    <Footer/>
    </div>
  )
}

export default App

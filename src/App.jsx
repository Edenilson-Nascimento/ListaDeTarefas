import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Home from './pages/home/Home.jsx'
import Sobre from './pages/sobre/Sobre.jsx'
import './global.scss'
import ErroDePagina from './pages/notFound/NotFound.jsx'
import Usuario from './components/usuario/Usuario.jsx'
import Footer from './components/footer/Footer.jsx'
import Main from './components/main/Main.jsx'
import ListaDeConvidados from './pages/laboratorio/ListaDeConvidados.jsx'
function App() {
  

  return (
    <>
        <Header />

        <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/usuario/:id' element={<Usuario />} />
          <Route path='*' element={<ErroDePagina />} />
          <Route path='/laboratorio/convidados' element={<ListaDeConvidados />} />
        </Routes>

        </Main>

        <Footer/>
    </>
  )
}

export default App

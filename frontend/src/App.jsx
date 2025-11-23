import NavBar from './components/NavBar'
import NavRoutes from './components/NavRoutes'
import Footer from './components/Footer';
import { Toolbar } from "@mui/material";
function App() {

  return (
    <>
      <NavBar />
      <Toolbar /> 
      <NavRoutes  />
      <Footer />
    </>
  )
}

export default App

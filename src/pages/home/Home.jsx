import "./home.css";
import { ListCard } from "../../components/listCard/ListCard";
import {Button} from "../../components/button/Button";
import { useNavigate } from "react-router-dom"; 
import {CirclePlus, NotebookPen} from 'lucide-react'

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="home-header">
        <h2 className="titulo">Mis Notas <NotebookPen/> </h2>

        <div>
          <Button onClick={() => navigate('/note/nueva')}>
            Crear Nota
            <CirclePlus />
          </Button>
        </div>
      </div>
      <ListCard/>
    </div>
  )
}

export default Home;

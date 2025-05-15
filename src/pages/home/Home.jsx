import "./home.css";
import { ListCard } from "../../components/listCard/ListCard";
import {Button} from "../../components/button/Button";
import { useNavigate } from "react-router-dom"; 

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="home-header">
        <h2 className="titulo">Notas</h2>
        <div>
          <Button onClick={() => navigate('/note/nueva')}>
            Nueva Nota
          </Button>
        </div>
      </div>
      <ListCard/>
    </div>
  )
}

export default Home;

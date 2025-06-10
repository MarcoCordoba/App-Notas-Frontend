import './Navbar.css'
import { LogOut } from 'lucide-react';
import {Button} from "../button/Button"
import { useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../api/AuthApi";

export function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();//esto me guarda la ruta en la que estoy parado
    
    const handleLogout = () => {
        logoutUser();
        navigate("/login");
    }

    const hideLogout = location.pathname === "/login" || location.pathname === "/register";
    //si el hidelogout es true es que estoy en /login o /registro
    
    return (
        <div className='navbar'>
            <h2>NotasWeb</h2>
            <div className='boton-navbar'>
                {!hideLogout && (// si es true no lo muestro en caso contrario muestro el boton, por eso !hidelogout
                    <Button className='boton-nav' onClick={handleLogout} > <LogOut /> </Button>
                )}    
            </div>
        </div>
    );
}

export default Navbar;

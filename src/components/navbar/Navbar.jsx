import './Navbar.css'
import { LogOut } from 'lucide-react';
import {Button} from "../button/Button"
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/AuthApi";

export function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        logoutUser();
        navigate("/login");
    }

    return (
        <div className='navbar'>
            <h2>NotasWeb</h2>
            <div className='boton-navbar'>
                <Button className='boton-nav' onClick={handleLogout} > <LogOut /> </Button>
            </div>
        </div>
    );
}

export default Navbar;

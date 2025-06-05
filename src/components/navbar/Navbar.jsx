import './Navbar.css'
import { LogOut } from 'lucide-react';
import {Button} from "../button/Button"

export function Navbar() {
    return (
        <div className='navbar'>
            <h2>NotasWeb</h2>
            <div className='boton-navbar'>
                <Button className='boton-nav' > <LogOut /> </Button>
            </div>
        </div>
    );
}

export default Navbar;

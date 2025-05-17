import './Navbar.css'
import {Pencil} from 'lucide-react';

export function Navbar() {
    return (
        <div className='navbar'>
            <h2>Notas App <Pencil/> </h2>
        </div>
    );
}

export default Navbar;

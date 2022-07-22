import { Children, cloneElement, useState } from "react";
import Dots from '../icon/icon';


function DropdownMenu({ children }) {
    const [open , toggle] = useState(false);

    return (
        <div className="dropdown">
            {Children.map(children , child => cloneElement(child , { open , toggle}))}
        </div>
    )
}

function Toggle({ open , toggle }) {
    return (
        <div className="dropdown-btn" onClick={() => toggle(!open)}>
            <Dots />
        </div>
    )
}

function List({ children , open }) {
    return open && (
        <ul className="dropdown-list">
            {children}
        </ul>
    )
}

function Item({ children }) {
    return <li className="dropdown-item">{children}</li>
}

DropdownMenu.Toggle = Toggle;
DropdownMenu.List = List;
DropdownMenu.Item = Item;


export default DropdownMenu;
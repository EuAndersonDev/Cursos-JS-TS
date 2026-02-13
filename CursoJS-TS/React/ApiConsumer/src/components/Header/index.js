import {Nav} from "./styled";
import {FaHome, FaSignInAlt, FaUserAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const teste = useSelector(state => state.example.botaoClicado);
    return (
        <Nav>
            <Link to="/"><FaHome size={24}/></Link>
            <Link to="/"><FaUserAlt size={24}/></Link>
            <Link to="/"><FaSignInAlt size={24}/></Link>
            {teste ? "clicado" : "não clicado"}
        </Nav>
    );
}

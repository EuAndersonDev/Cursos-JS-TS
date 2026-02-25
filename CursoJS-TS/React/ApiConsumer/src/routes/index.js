import { Switch} from "react-router-dom";
import MyRoute from "./MyRoute";
import { toast } from "react-toastify";

import Aluno from "../pages/Aluno";
import Alunos from "../pages/Alunos";
import Fotos from "../pages/Fotos";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";
export default function Routes() {
    toast.success("Bem-vindo ao sistema!");
    return (
        <Switch>
            <MyRoute exact path="/" component={Alunos} isClosed={false}/>
            <MyRoute path="/Register" component={Register} />
            <MyRoute path="/Login" component={Login} />
            <MyRoute path="/Alunos" component={Alunos} isClosed />
            <MyRoute path="/Aluno/:id/edit" component={Aluno} isClosed />
            <MyRoute path="/Aluno/" component={Aluno} isClosed />
            <MyRoute path="/Fotos/:id" component={Fotos} isClosed />
            <MyRoute path="*" component={Page404} />

        </Switch>
    );
}

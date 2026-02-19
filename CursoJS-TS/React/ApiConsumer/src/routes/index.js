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
            <MyRoute path="*" component={Page404} />
            <MyRoute path="/register" component={Register} />
            <MyRoute path="/login" component={Login} />
            <MyRoute path="/alunos" component={Alunos} isClosed />
            <MyRoute path="/aluno/:id/edit" component={Aluno} isClosed />
            <MyRoute path="/aluno/" component={Aluno} isClosed />
            <MyRoute path="/fotos/:id" component={Fotos} isClose />
        </Switch>
    );
}

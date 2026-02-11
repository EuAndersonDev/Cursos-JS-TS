import { Switch} from "react-router-dom";
import MyRoute from "./MyRoute";
import { toast } from "react-toastify";

import Login from "../pages/Login";
import Page404 from "../pages/Page404";
export default function Routes() {
    toast.success("Bem-vindo ao sistema!");
    return (
        <Switch>
            <MyRoute exact path="/" component={Login} />
            <MyRoute path="*" component={Page404} />
        </Switch>
    );
}

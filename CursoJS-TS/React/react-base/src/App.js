import Routes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import {Router} from "react-router-dom";
import history from "./services/history";

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <GlobalStyles />
                <ToastContainer autoClose={3000} className="toast-container"/>
            </Router>
        </Provider>
    );
}

export default App;

import React, {Component} from "react";
import "./Main.css"

//Form
import { FaPlus } from 'react-icons/fa';

export default class Main extends Component {
    state = {
        novaTarefa: ''
    };

    handleChange = (event) => {
        this.setState({ novaTarefa: event.target.value });
    }

    render() {
        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form action="#" className="form">
                    <input onChange={this.handleChange} type="text" placeholder="Digite uma tarefa"/>
                    <button type="submit">
                        <FaPlus/>
                    </button>
                </form>
            </div>
        );
    }
}

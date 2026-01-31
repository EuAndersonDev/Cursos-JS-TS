import React, {Component} from "react";
import "./Main.css"
import Form from "./Form";

import {FaEdit, FaWindowClose} from 'react-icons/fa';

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
    };

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));
        if(!tarefas) return;
        this.setState({tarefas});
    }

    componentDidUpdate(prevProps, prevState) {
        const {tarefas} = this.state;
        if(tarefas === prevState.tarefas) return;
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {tarefas} = this.state;
        const novaTarefa = this.state.novaTarefa;

        if (tarefas.indexOf(novaTarefa) !== -1) return;

        const novasTarefas = [...tarefas];

        if(this.state.index === -1){
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: ''
            });
        }else{
            novasTarefas[this.state.index] = novaTarefa;
            this.setState({
                tarefas: [...novasTarefas],
                novaTarefa: '',
                index: -1
            });
        }
    }

    handleChange = (event) => {
        this.setState({ novaTarefa: event.target.value });
    }

    handleEdit = (event, index) => {
        const {tarefas} = this.state;
        this.setState({index, novaTarefa: tarefas[index]});

    }

    handleDelete = (event, index) => {
        const {tarefas} = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);
        this.setState({tarefas: [...novasTarefas]});
    }


    render() {
        const { novaTarefa } = this.state;
        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>
                <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} novaTarefa={novaTarefa}/>
                

                <ul className="tarefas">
                    {this.state.tarefas.map((tarefas, index) => (
                        <li key={index}>{tarefas}
                            <div className="acoes">
                                <FaEdit onClick={(event) => this.handleEdit(event, index)} className="edit"/>
                                <FaWindowClose onClick={(event) => this.handleDelete(event, index)} className="delete"/>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

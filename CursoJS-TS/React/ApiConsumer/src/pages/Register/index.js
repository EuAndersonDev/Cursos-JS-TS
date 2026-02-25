import React, { useState } from "react";
import { Form } from "./styled";
import { Container } from "../../styles/GlobalStyles";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import axios from "../../services/axios";
import history from "../../services/history";
import { get } from "lodash";


export default function Register() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        let formErros = false;

        if (nome.length < 3 || nome.length > 255) {
            formErros = true;
            toast.error("O nome deve conter entre 3 e 255 caracteres.");
        }

        if (!isEmail(email)) {
            formErros = true;
            toast.error("E-mail inválido.");
        }

        if (password.length < 6 || password.length > 50) {
            formErros = true;
            toast.error("A senha deve conter entre 6 e 50 caracteres.");
        }

        if (formErros) return;

        try {
            await axios.post("/users/", {
                nome,
                email,
                password
            });
            toast.success("Usuário cadastrado com sucesso!");
            history.push("/login");
        } catch (err) {
            toast.error("Erro ao cadastrar usuário. Tente novamente.");
            const errors = get(err, "response.data.errors", []);

            errors.map(error => toast.error(error));

        }
    };

    return (
        <Container>
            <h1>Crie sua conta</h1>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" />
                </label>
                <label htmlFor="email">
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu email" />
                </label>
                <label htmlFor="password">
                    Senha:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Sua senha" />
                </label>

                <button type="submit">Registrar</button>
            </Form>
        </Container>
    );
}

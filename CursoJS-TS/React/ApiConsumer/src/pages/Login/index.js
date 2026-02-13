import React from "react";
import { Title } from "./styled";
import { Container } from "../../styles/GlobalStyles";
import { useDispatch } from "react-redux";
import * as exempleActions from "../../store/modules/example/actions";

export default function Login() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        dispatch(exempleActions.clicarBotaoRequest());
    }

    return (
        <Container>
            <Title>Login</Title>
            <button type="button" onClick={handleClick}>Clique aqui</button>
        </Container>
    );
}

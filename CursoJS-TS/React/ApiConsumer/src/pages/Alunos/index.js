import React, { useState } from "react";
import { Container } from "../../styles/GlobalStyles";
import axios from "../../services/axios";
import { AlunoContainer } from "./styled";

export default function Alunos() {
    const [alunos, setAlunos] = useState([]);


    React.useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get("/alunos");
                setAlunos(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <Container>
            <h1>Alunos</h1>

            <AlunoContainer>
                {alunos.map((aluno) => (
                    <div key={aluno.id}>
                        {aluno.nome}
                        
                        {aluno.Fotos && aluno.Fotos[0] && (
                            <img src={aluno.Fotos[0].url} alt={aluno.nome} />
                        )}
                    </div>
                ))}
            </AlunoContainer>
        </Container>
    );
}

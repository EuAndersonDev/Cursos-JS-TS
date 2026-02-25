import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    label{
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    input{
        padding: 0 10px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-top: 5px;
        transition: border 0.3s ease;

        &:focus{
            border: #007BFF 2px solid;
            transition: border 0.3s ease;
        }

        
    }
`;

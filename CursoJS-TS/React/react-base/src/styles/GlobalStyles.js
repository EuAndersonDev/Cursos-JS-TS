import styled, { createGlobalStyle } from "styled-components";
import {primaryColor, primaryDarkColor} from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        font-family: 'Arial', sans-serif;
        background-color: ${primaryDarkColor};
        color: ${primaryDarkColor};
    };
    html, body, #root {
        height: 100%;
    }

    button{
        cursor: pointer;
        background-color: ${primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;
        font-weight: 700;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--default {
        background: ${primaryColor};
        color: #fff;
    }
`;

export const Container = styled.section`
    max-width: 360px;
    margin: 30px auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

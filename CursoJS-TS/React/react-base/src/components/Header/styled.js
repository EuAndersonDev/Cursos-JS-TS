import styled from "styled-components";
import {primaryColor} from "../../config/colors";

export const Nav = styled.nav`
    background-color: ${primaryColor};
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;

    a{
        color: #fff;
        margin: 0 10px 0 0;
        font-weight: bold;
    }
`;



import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const PopExitBox = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
`

export const PopExitContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`

export const PopExitBlock = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    @media (max-width: ${breakpoints.sm}px) {
        padding: 50px 20px;
    }
`
export const PopExitTTL = styled.div``
export const PopExitForm = styled.form``
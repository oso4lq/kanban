import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const MainBox = styled.main`
    width: 100%;
    background-color: #EAEEF6;
`
export const MainBlock = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
    @media (max-width: ${breakpoints.xl}px) {
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`

export const MainContent = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: ${breakpoints.xl}px) {
        display: block;
    }
`

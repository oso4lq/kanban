import styled from "styled-components";
//import { breakpoints } from "../../lib/breakpoints";

export const HeaderBox = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
`

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`

//reuse style with dark
export const HeaderLogo = styled.div`
`

export const HeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

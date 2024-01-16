import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    @media (max-width: ${breakpoints.md}px) {
        width: 100%;
        padding: 0 16px;
    }
`;

export const Button = styled.button`
    height: 30px;
    //width: 178px;

    background-color: ${props => props.$transparent ? 'transparent' : '#565EEF'};
    color: ${props => props.$transparent ? '#565EEF' : '#FFFFFF'};

    border-radius: 4px;

    border: ${props => props.$transparent ? '0.7px solid var(--palette-navy-60, #565EEF)' : 'none'};;

    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin: 0px 20px;
    padding: 0px 10px;


    &:hover {
        background-color: ${props => props.$transparent ? '#33399b' : '#33399b'};
        color: #FFFFFF;
    }`

export default Button;

export const LogInRegisterDIV = styled.div`
    display: flex;
    width: 1440px;
    padding: 285px 0px 286px 0px;
    justify-content: center;
    align-items: center;
    background: #EAEEF6;
`
export const LogInRegisterBox = styled.div`
    display: flex;
    padding: 50px 60px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    background: #FFF;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`
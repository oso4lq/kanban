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
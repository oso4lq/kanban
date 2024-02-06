import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";
import { themeStyles } from "../../lib/theme";

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
//width: 1440px;
padding: 10% 0px 10% 0px;
justify-content: center;
align-items: center;
background: #EAEEF6;
`
export const LogInRegisterBox = styled.div`
border: 0.7px solid #D4DBE5;
background: #FFF;
box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`
export const Modal = styled.div`
display: flex;
padding: 50px 60px;
align-items: flex-start;
gap: 10px;
`
export const ModalBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
export const ModalForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
export const ModalInput = styled.input`
display: flex;
width: 248px;
height: 30px;
padding: 8px 10px;
align-items: center;
gap: 10px;
border-radius: 8px;
border: 0.7px solid rgba(148, 166, 190, 0.40);
color: #94A6BE;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 21px */
letter-spacing: -0.28px;
`
export const ModalFormGroup = styled.div`
color: rgba(148, 166, 190, 0.40);
text-align: center;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 21px */
letter-spacing: -0.14px;
`
export const CategoryTheme = styled.div`
display: inline-block;
  width: auto;
  height: auto;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${({ $themeColor }) =>
    themeStyles[$themeColor]?.themeBack || "#b4fdd1"};
  p {
    color: ${({ $themeColor }) =>
      themeStyles[$themeColor]?.themeCol || "#06b16e"};
  }
  label {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
  input[type="radio"] {
    display: none;
  }
  label {
    display: inline-block;
    cursor: pointer;
  }
  &:hover {
    opacity: 1 !important;
  }
  .theme-top {
    display: block;
  }
`
import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";
import { hover01 } from "../../Global/Global.styled";

export const PopNewCardDiv = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  &:target {
    display: block;
  }

  @media screen and (max-width: ${breakpoints.lg}px) {
    top: 70px;
  }
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.exitBack};

  @media screen and (max-width: ${breakpoints.lg}px) {
    padding: 0;
    justify-content: flex-start;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backColor};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: ${(props) => props.theme.border};
  position: relative;

  @media screen and (max-width: ${breakpoints.lg}px) {
    border-radius: 0;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    padding: 20px 16px 32px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTtl = styled.h3`
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  /* background: transparent; */
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  margin: 20px 0;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  /* background: transparent; */
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
    /* height: 34px; */
  }
`;

export const CategoriesContainer = styled.div`
  margin-bottom: 0px;
`;
export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6px;
`;
export const CategoriesP = styled.p`
  margin-bottom: 14px;
  margin-top: 14px;
`;
export const CategoriesButton = styled.button`
  display: inline-block;
  width: auto;
  height: auto;
  padding: 8px 18px;
  border-radius: 24px;
  opacity: 0.4;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 1 !important;
  }
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: auto;
  /* padding: 8px 18px; */
  /* border-radius: 24px;
  margin-right: 7px; */
  /* opacity: 0.4; */
 
  label {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label:checked {
    opacity: 1 !important;
   
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
`;

export const CalendarBlock = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 0px;
    padding: 0 7px;
    flex-direction: column;
`;

export const CalendarBlockP = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
    padding: 0 7px;
    margin-left: 16px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`



export const PopNewCardClose = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  :hover {
    color: #000000;
  }
`;

export const FormNewCreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  ${hover01}

  @media screen and (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
  }
`;
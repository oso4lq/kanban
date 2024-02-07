import styled from "styled-components";
import { hover01, hover03 } from "../../Global/Global.styled";
import { breakpoints } from "../../lib/breakpoints";

export const PopBrowseDiv = styled.div`
  /* display: none; */
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  &:target {
    display: block;
  }

  @media screen and (max-width: ${breakpoints.lg}px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
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
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backColor};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
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

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;

  @media screen and (max-width: ${breakpoints.md}px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const PopBrowseTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;



export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusParagraph = styled.p`
  margin-bottom: 14px;
  color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const StTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    color: #fff;
  }
`;

export const StatusTheme = styled.div`
  display: inline-block;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  transition: background-color 0.3s;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    opacity: 1 !important;
    color: #fff ;
    background-color: #94a6be;
  }
  
  &:hover {
    background-color: #94a6be;
    color: ${(props) => props.theme.label};
  }

  label {
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    user-select: none;
    letter-spacing: -0.14px;
  }
`;






export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.lg}px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const CalendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
`;





export const PopBrowseButtons = styled.div`
  /*.pop-browse__btn-browse, .pop-browse__btn-edit*/
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;

    @media screen and (max-width: ${breakpoints.md}px) {
      width: 100%;
      height: 40px;
    }
  }
`;
export const BrowseButtonGroup = styled.div`
  button {
    margin-right: 8px;
  }

  @media screen and (max-width: ${breakpoints.md}px) {
    margin-right: 0px;
  }
`;



export const ButtonBordered = styled.button`
  border-radius: 4px;
  border: 0.7px solid ${(props) => props.theme.paletteNavy60 || "#565EEF"};
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.btn};

  a {
    color: ${(props) => props.theme.btn};
  }
  ${hover03}
`;
export const ButtonBackground = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  a {
    color: #ffffff;
  }
  ${hover01}
`;
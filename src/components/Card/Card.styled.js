import styled from "styled-components";
import { themesCardColor } from "../../lib/theme";
import { breakpoints } from "../../lib/breakpoints";

export const CardItem = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
    @media (max-width: ${breakpoints.md}px) {
        background: red;
    }
`;

export const CardContainer = styled.div`
    width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
    @media (max-width: ${breakpoints.xl}px) {
        width: 220px;
        height: 130px;
        background-color: #FFFFFF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        padding: 15px 13px 19px;
    }
`;

export const CardThemeP = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`;
export const CardTheme = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({ $themeColor }) => themesCardColor[$themeColor]?.backgroundColor || "#94a6be"};

    ${CardThemeP} {
        color: ${({ $themeColor }) => themesCardColor[$themeColor]?.color || "#ffffff"};
    }
`;

export const CardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const CardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`
export const CardDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const CardDateSVG = styled.div`
    width: 13px;
`
export const CardDateP = styled.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
`
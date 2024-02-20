import styled from "styled-components";

export const HeaderBox = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${(props) => props.theme.backColor};
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
    gap: 20px;
`

export const LogoLink = styled.div`
  img {
    width: 85px;
  }
`;

import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    @media (max-width: ${breakpoints.md}px) {
        .container {
        width: 100%;
        padding: 0 16px;
        }
    }
`;
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: all 0.25s linear;

  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`;


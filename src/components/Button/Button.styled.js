import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.$highlighted ? 'yellow' : '#4caf50'};
    color: ${props => props.$highlighted ? 'red' : 'white'};
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;

    &:hover {
        background-color: ${props => props.$highlighted ? 'orange' : '#33399b'};
    }`

export default Button;
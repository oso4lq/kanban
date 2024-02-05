import { createGlobalStyle, ThemeProvider } from 'styled-components';

const browseTheme = {
    BTNBrowse: '#94A6BE',
};

const editTheme = {
    BTNEdit: '#565EEF',
};

const GlobalStyleButtons = createGlobalStyle`
  .pop-browse__btn-browse {
    box-shadow: ${props => props.theme.BTNBrowse};
    transition: all 0.25s linear;
  }
  .pop-browse__btn-edit  {
    color: ${props => props.theme.BTNEdit};
    transition: all 0.25s linear;
  }
`;

export { browseTheme, editTheme, GlobalStyleButtons, ThemeProvider }
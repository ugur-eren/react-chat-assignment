import {ThemeProvider as StyledThemeProvider} from 'styled-components';

export const LightTheme = {
  accent: '#FF7130',
  onAccent: '#FAFAFA',

  background: '#F0F0F0',
  surface: '#FAFAFA',

  text: '#242424',
};

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  return <StyledThemeProvider theme={LightTheme}>{children}</StyledThemeProvider>;
};

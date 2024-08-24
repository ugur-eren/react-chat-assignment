import {Router} from './routes/Router';
import {GlobalStyles, ThemeProvider} from './styles';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />

      <Router />
    </ThemeProvider>
  );
};

import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import StatsCard from './components/StatsCard';

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: 'hsl(233, 47%, 7%)',
      },
      primary: {
        main: 'hsl(0, 0%, 100%)',
      },
      common: {
        softViolet: 'hsl(277, 64%, 61%)',
        overlayViolet: 'rgba(83, 0, 138, 0.58)',
        darkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        slightlyTransparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        slightlyTransparentWhite2: 'hsla(0, 0%, 100%, 0.6)',
      },
    },
  });

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <StatsCard />
      </ThemeProvider>
  );
};

export default App;

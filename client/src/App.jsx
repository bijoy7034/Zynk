import './App.css'
import Home from './pages/Home/Home'
import { Box, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: `'Quicksand', sans-serif`,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Home />
      </Box>
    </ThemeProvider>
  )
}

export default App

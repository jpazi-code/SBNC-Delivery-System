import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, Routes } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import AdminView from './pages/adminView.jsx'
import BranchView from './pages/branchView.jsx'
import WarehouseView from './pages/warehouseView.jsx'

const theme = extendTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0d47a1', // deep blue (neutral default)
      contrastText: '#fff',
    },
    secondary: {
      main: '#f50057', // vibrant pink
      contrastText: '#fff',
    },
    // Custom color schemes for different user roles
    neutral: {
      main: '#0d47a1',  // blue for neutral users
      paper: '#e3f2fd', // light blue paper color
      contrastText: '#fff',
    },
    admin: {
      main: '#f44336',  // red for admin users
      paper: '#ffebee', // light red paper color
      contrastText: '#fff',
    },
    branch: {
      main: '#ffeb3b',  // yellow for branch users
      paper: '#fffde7', // light yellow paper color
      contrastText: '#000',
    },
    warehouse: {
      main: '#4caf50',  // green for warehouse users
      paper: '#e8f5e9', // light green paper color
      contrastText: '#fff',
    },
    background: {
      default: '#fafafa', // light grey background
      paper: '#fff',
    },
  },
  typography: {
    // Using a minimal font stack
    h1: {
      fontWeight: 1000,
      fontSize: '2.5rem',
      marginBottom: 0, // removed bottom margin
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
      marginBottom: 0, // removed bottom margin
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none', // Prevents uppercase transformation
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          // Remove bottom margin if desired. Here we set margin with no bottom margin:
          margin: '16px 16px 0 16px',
        },
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/adminView' element={<AdminView />}/>
          <Route path='/branchView' element={<BranchView />} />
          <Route path='/warehouseView' element={<WarehouseView />} />
        </Routes>
      </HashRouter>
    </CssVarsProvider>
  </StrictMode>,
);

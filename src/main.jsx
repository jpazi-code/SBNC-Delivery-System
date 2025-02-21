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
import AdminOngoingDeliveries from './pages/AdminOngoingDeliveries.jsx'
import BranchOngoingDeliveries from './pages/BranchOngoingDeliveries.jsx'
import WarehouseApprovedDeliveries from './pages/WarehouseApprovedDeliveries.jsx'


const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // A deep blue inspired by Pantone 294 C
          main: '#0033A0',
          contrastText: '#fff',
        },
        secondary: {
          // A vibrant pink, similar to a Pantone-inspired hue
          main: '#D81B60',
          contrastText: '#fff',
        },
        neutral: {
          main: '#0033A0',
          paper: '#e3f2fd',
          contrastText: '#fff',
        },
        admin: {
          // Admin (red) - using a Pantone-inspired red (e.g. Pantone 186 C)
          solidBg: '#C8102E',      // Base fill
          solidColor: '#fff',       // Text color
          solidHoverBg: '#AD0F27',  // Slightly darker on hover
          solidActiveBg: '#9C0C22', // Active state
          softBg: '#FAD1D1',        // Light red for soft variant
          softColor: '#C8102E',
          softHoverBg: '#F4B8B8',
          outlinedBorder: '#C8102E',
          outlinedColor: '#C8102E',
          outlinedHoverBg: 'rgba(200,16,46,0.08)',
          plainBg: '#FFEBEE',
          plainColor: '#C8102E',
          plainHoverBg: 'rgba(200,16,46,0.08)',
        },
        branch: {
          // Branch (yellow/amber) - toned down to a Pantone-like amber
          solidBg: '#FFB300',       // Warm amber fill
          solidColor: '#000',        // Black text for contrast
          solidHoverBg: '#E0A800',
          solidActiveBg: '#CCA000',
          softBg: '#FFF4CC',         // Light amber for soft variant
          softColor: '#FFB300',
          softHoverBg: '#FFF0B3',
          outlinedBorder: '#FFB300',
          outlinedColor: '#FFB300',
          outlinedHoverBg: 'rgba(255,179,0,0.08)',
          plainBg: '#FFFDE7',
          plainColor: '#FFB300',
          plainHoverBg: 'rgba(255,179,0,0.08)',
        },
        warehouse: {
          // Warehouse (green) - using a muted green similar to Pantone 347 C
          solidBg: '#388E3C',
          solidColor: '#fff',
          solidHoverBg: '#2E7D32',
          solidActiveBg: '#1B5E20',
          softBg: '#C8E6C9',
          softColor: '#388E3C',
          softHoverBg: '#B9E1B9',
          outlinedBorder: '#388E3C',
          outlinedColor: '#388E3C',
          outlinedHoverBg: 'rgba(56,142,60,0.08)',
          plainBg: '#E8F5E9',
          plainColor: '#388E3C',
          plainHoverBg: 'rgba(56,142,60,0.08)',
        },
        background: {
          default: '#fafafa',
          paper: '#fff',
        },
      },
    },
  },
  typography: {
    h1: {
      fontWeight: 1000,
      fontSize: '2rem',
      marginBottom: 0,
    },
    h2: {
      fontWeight: 500,
      fontSize: '1.5rem',
      marginBottom: 0,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    JoyCheckbox: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === 'xs' && {
            '--Checkbox-size': '1rem',
            fontSize: theme.vars.fontSize.xs,
            padding: '0.25rem',
          }),
          ...(ownerState.size === 'xl' && {
            '--Checkbox-size': '2rem',
            fontSize: theme.vars.fontSize.xl,
            padding: '0.5rem',
          }),
        }),
      },
    },
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
          margin: '16px 16px 0 16px',
        },
      },
    },
  },
});

export default theme;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/adminView' element={<AdminView />}/>
          <Route path='/branchView' element={<BranchView />} />
          <Route path='/warehouseView' element={<WarehouseView />} />
          <Route path='/admin/ongoing-deliveries' element={<AdminOngoingDeliveries />} />
          <Route path='/branch/ongoing-deliveries' element={<BranchOngoingDeliveries />} />
          <Route path='/warehouse/approved-deliveries' element={<WarehouseApprovedDeliveries />} />
        </Routes>
      </HashRouter>
    </CssVarsProvider>
  </StrictMode>,
);

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import { Input, Stack, Button, Divider } from '@mui/joy'
import { useTheme } from '@mui/joy/styles'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Checkbox from '@mui/joy/Checkbox'
import Link from '@mui/joy/Link'


function App() {
  const theme = useTheme()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')
    // Hardcoded credentials check:
    // admin, branchUser, and warehouseUser all use password "123"
    if (username === 'admin' && password === '123') {
      navigate('/adminView')
    } else if (username === 'branchUser' && password === '123') {
      navigate('/branchView')
    } else if (username === 'warehouseUser' && password === '123') {
      navigate('/warehouseView')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <Box
      className="flex items-center justify-center min-h-screen min-w-screen"
      sx={{ bgcolor: 'primary.main' }}
    >
      <Box
        sx={{
          height: 800,
          width: 800,
          display: 'flex',
          p: 10,
          boxShadow: 3,
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'primary.main',
          borderRadius: 5,
        }}
      >
        <Stack sx={{ gap: 4, mb: 2, width: '100%' }}>
          <Box>
            <Typography level="h1" className="text-center">
              STRONGHOLD BOLTS AND NUTS
            </Typography>
            <Typography level="h2" className="text-center">
              Delivery Application
            </Typography>
          </Box>
          <Stack sx={{ gap: 4, my:'auto', width: '75%', mx:'auto'}}>
            <form onSubmit={handleSubmit}>
              <FormControl required>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl required sx={{ mt: 2 }}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack sx={{ gap: 2, mt: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Checkbox size="sm" label="Remember me" name="persistent" />
                  <Link level="title-sm" href="#replace-with-a-link">
                    Forgot your password?
                  </Link>
                </Box>
                <Button type="submit" fullWidth>
                  Sign in
                </Button>
                <Stack direction='row' sx={{
                  justifyContent:'space-around',
                  alignItems:'center',
                  mt: '20%',
                }}>
                  <Typography level='h2'>Logo</Typography>
                  <Typography level='h2'>Logo</Typography>
                  <Typography level='h2'>Logo</Typography>
                  <Typography level='h2'>Logo</Typography>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default App

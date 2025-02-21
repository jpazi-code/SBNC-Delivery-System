import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/joy'
import { useTheme } from '@mui/joy/styles'
import { useNavigate } from 'react-router-dom'

export default function WarehouseView() {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <Box
      className="flex items-center justify-center min-h-screen min-w-screen"
      sx={{ bgcolor: 'warehouse.solidBg' }} // Warehouse background
    >
      <Box
        sx={{
          mx: 'auto',
          my: 'auto',
          height: 500,
          width: 600,
          display: 'flex',
          p: 5,
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
          justifyContent: 'center',
          bgcolor: 'background.paper', // White paper background
          borderRadius: 10,
          color: 'warehouse.main',
        }}
      >
        <Stack
          sx={{
            gap: 4,
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Typography level="h1" color="warehouse.main" textAlign="center">
            Welcome, Warehouse User
          </Typography>
          <Stack sx={{ gap: 2, p: 2, width: '66%', mx: 'auto' }}>
            <Button variant="solid" color="warehouse" onClick={() => navigate('/warehouse/approved-deliveries')}>
              Approved Requests
            </Button>
            <Button variant="solid" color="warehouse">
              Approved Transfers
            </Button>
            <Button variant="outlined" color="warehouse">
              History
            </Button>
            <Button variant="soft" color="warehouse">
              Summary Report
            </Button>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="solid" color="warehouse">
              Log off
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

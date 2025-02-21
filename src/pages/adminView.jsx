import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/joy';
import { useTheme } from '@mui/joy/styles';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

export default function AdminView() {
  const theme = useTheme();
  const navigate = useNavigate(); // 2. Call useNavigate

  return (
    <Box
      className="flex items-center justify-center min-h-screen min-w-screen"
      sx={{ bgcolor: 'admin.solidBg' }}
    >
      {/* Main Content Box */}
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
          bgcolor: 'background.paper',
          borderRadius: 10,
          color: 'admin.main',
        }}
      >
        <Stack sx={{ gap: 4, width: '100%', justifyContent: 'space-around' }}>
          <Typography level="h1" color="admin.main" textAlign="center">
            Welcome, Admin
          </Typography>
          <Stack sx={{ gap: 2, p: 2, width: '66%', mx: 'auto' }}>
            <Button
              variant="solid"
              color="admin"
              onClick={() => navigate('/admin/ongoing-deliveries')} // 3. Navigate on click
            >
              Ongoing Deliveries
            </Button>
            <Button variant="solid" color="admin">
              Current Requests
            </Button>
            <Button variant="outlined" color="admin">
              View History
            </Button>
            <Button variant="soft" color="admin">
              Summary Report
            </Button>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="solid" color="admin">
              Log off
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/joy';

export default function Navbar() {
  return (
    <Box
      sx={{
        width: '100%',
        px: 3,
        py: 2,
        bgcolor: 'admin.solidBg',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography level="h5" color="neutral.contrastText">
          Admin Dashboard
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="plain" color="neutral">
            Home
          </Button>
          <Button variant="plain" color="neutral">
            Reports
          </Button>
          <Button variant="plain" color="neutral">
            Settings
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

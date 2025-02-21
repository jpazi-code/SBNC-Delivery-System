import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  Sheet,
  Table,
} from '@mui/joy';

// Example row data
const rows = [
  {
    branch: 'Proxy',
    orderRefNo: 'ORD0001',
    deliveryRefNo: 'DEL000001',
    status: 'Preparing',
  },
  {
    branch: 'Proxy',
    orderRefNo: 'ORD0002',
    deliveryRefNo: 'DEL000002',
    status: 'Dispatched',
  },
];

export default function AdminOngoingDeliveries() {
  return (
    <Box sx={{ bgcolor: 'admin.solidBg', minHeight: '100vh', py: 4 }}>
      {/* Centered White Box */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: 800,
          mx: 'auto',
          p: 3,
          borderRadius: 4,
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Page Title */}
        <Typography level="h2" textAlign="center" sx={{ mb: 2 }}>
          Ongoing Deliveries
        </Typography>

        {/* Table in a Sheet */}
        <Sheet variant="outlined" sx={{ overflow: 'auto', maxHeight: 400 }}>
          <Table
            borderAxis="xBetween"
            color="neutral"
            size="md"
            stickyFooter
            stickyHeader
            stripe="odd"
            variant="plain"
            aria-label="Admin Ongoing Deliveries"
          >
            {/* <TableHead>
              <TableRow>
                <TableCell>Branch</TableCell>
                <TableCell>Order Reference No.</TableCell>
                <TableCell>Delivery Reference No.</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.branch}</TableCell>
                  <TableCell>{item.orderRefNo}</TableCell>
                  <TableCell>{item.deliveryRefNo}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </Sheet>

        {/* Bottom Bar (Logos + Back Button) */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          {/* Logos (replace with actual images or brand icons) */}
          <Stack direction="row" spacing={2}>
            <Box sx={{ width: 40, height: 40, bgcolor: 'neutral.outlinedBorder' }} />
            <Box sx={{ width: 40, height: 40, bgcolor: 'neutral.outlinedBorder' }} />
            <Box sx={{ width: 40, height: 40, bgcolor: 'neutral.outlinedBorder' }} />
          </Stack>

          <Button variant="solid" color="admin">
            Back
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

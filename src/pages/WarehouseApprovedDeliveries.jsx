import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  Table,
  Sheet,
} from '@mui/joy';

export default function WarehouseApprovedDeliveries() {
//     return (
//         <p>Warehouse</p>
//     )
// }
  const rows = [
    { driver: 'Charlie Green', plate: 'WRH123', ref: 'DEL-100', po: 'PO-3001', date: '03/01/2025' },
    { driver: 'Diane Blue', plate: 'WRH789', ref: 'DEL-101', po: 'PO-3002', date: '03/02/2025' },
  ];

  return (
    <Box sx={{ bgcolor: 'warehouse.solidBg', minHeight: '100vh', py: 4 }}>
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
          Approved Deliveries
        </Typography>

        {/* Table */}
        <Sheet variant="outlined" sx={{ overflow: 'auto' }}>
          <Table aria-label="Warehouse Approved Deliveries" stickyHeader>
            {/* <TableHead>
              <TableRow>
                <TableCell>Driver</TableCell>
                <TableCell>Plate No.</TableCell>
                <TableCell>Delivery Ref.</TableCell>
                <TableCell>PO No.</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.driver}</TableCell>
                  <TableCell>{row.plate}</TableCell>
                  <TableCell>{row.ref}</TableCell>
                  <TableCell>{row.po}</TableCell>
                  <TableCell>{row.date}</TableCell>
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

          <Button variant="solid" color="warehouse">
            Back
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

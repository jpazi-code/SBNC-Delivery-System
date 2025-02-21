import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  Table,
  Sheet,
} from '@mui/joy';
import { useNavigate } from 'react-router-dom';

export default function WarehouseApprovedDeliveries() {
//     return (
//         <p>Warehouse</p>
//     )
// }
const navigate = useNavigate()
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
    {
      branch: 'Proxy',
      orderRefNo: 'ORD0002',
      deliveryRefNo: 'DEL000002',
      status: 'Dispatched',
    },
    {
      branch: 'Proxy',
      orderRefNo: 'ORD0002',
      deliveryRefNo: 'DEL000002',
      status: 'Dispatched',
    },
    {
      branch: 'Proxy',
      orderRefNo: 'ORD0002',
      deliveryRefNo: 'DEL000002',
      status: 'Dispatched',
    },
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
          borderRadius: 10,
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
                <thead>
                    <tr>
                        <th>Branch</th>
                        <th>Order Reference No.</th>
                        <th>Delivery Reference No.</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {rows.map((item, index) => (
                    <tr key={index}>
                        <th>{item.branch}</th>
                        <th>{item.orderRefNo}</th>
                        <th>{item.deliveryRefNo}</th>
                        <th>{item.status}</th>
                    </tr>
                ))}
                </tbody>
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
                <Box sx={{ width: 40, height: 40, bgcolor: 'neutral.outlinedBorder' }} />
            </Stack>

          <Button variant="solid" color="warehouse" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

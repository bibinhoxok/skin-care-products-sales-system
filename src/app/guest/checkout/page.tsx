"use client";

import { useState } from "react";
import { 
  Container, Paper, Typography, TextField, FormControl, InputLabel, 
  Select, MenuItem, RadioGroup, FormControlLabel, Radio, Button, Grid, 
  Checkbox, Box, Divider, Card, CardContent
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useEffect } from "react";


export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [shippingCost, setShippingCost] = useState(12.00);
  const subtotal = 1096.00;
  const discount = 10.00;
  const taxRate = 0.18;
  const total = subtotal + shippingCost - discount + subtotal * taxRate;



  return (
    <Container maxWidth="lg" sx={{ mt: 5, bgcolor: "white", color: "black", p: 3, borderRadius: 2 }}>
      <Grid container spacing={3}>
        {/* Thông tin cá nhân và địa chỉ giao hàng */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 2, bgcolor: "#f5f5f5" }}>
            <Typography variant="h5" gutterBottom>
            Thông tin cá nhân của bạn
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={6}><TextField fullWidth label="Họ" variant="outlined" /></Grid>
              <Grid item xs={6}><TextField fullWidth label="Tên" variant="outlined" /></Grid>
              <Grid item xs={6}><TextField fullWidth label="Số điện thoại" variant="outlined" /></Grid>
              <Grid item xs={6}><TextField fullWidth label="Địa chỉ email" variant="outlined" /></Grid>
              <Grid item xs={12}><TextField fullWidth label="Địa chỉ nhận hàng" variant="outlined" /></Grid>
              <Grid item xs={12}><TextField fullWidth label="Địa chỉ giao hàng" variant="outlined" /></Grid>
              <Grid item xs={6}><TextField fullWidth label="Thành phố" variant="outlined" /></Grid>
              <Grid item xs={6}><TextField fullWidth label="Mã giảm giá" variant="outlined" /></Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select>
                    <MenuItem value="Hoa Kỳ">United States</MenuItem>
                    <MenuItem value="Việt NamN">Vietnam</MenuItem>
                    <MenuItem value="Nhật Bản">Japan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
              SAVE
            </Button>
          </Paper>

          {/* Tùy chọn vận chuyển */}
          <Typography variant="h6" sx={{ mt: 3 }}>Chọn phương thức giao hàng</Typography>
          <Grid container spacing={2}>
            {[{ name: "dpd", price: 12.00 }, { name: "dpd", price: 10.00 }, { name: "DHL", price: 11.00 }, { name: "Xe tải", price: 18.00 }].map((option, index) => (
              <Grid item xs={3} key={index}>
                <Card sx={{ bgcolor: "#e0e0e0", p: 2, textAlign: "center", cursor: "pointer" }} onClick={() => setShippingCost(option.price)}>
                  <CardContent>
                    <Typography>{option.name}</Typography>
                    <Typography variant="subtitle2">Standard Shipping</Typography>
                    <Typography variant="h6">${option.price.toFixed(2)}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Cột thanh toán */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2, bgcolor: "#f5f5f5" }}>
            <Typography variant="h6">Pricing</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Typography>Tổng giá trị đơn hàng:</Typography>
              <Typography>${subtotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", color: "red" }}>
              <Typography>Phí vận chuyển:</Typography>
              <Typography>${shippingCost.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", color: "green" }}>
              <Typography>Giảm giá:</Typography>
              <Typography>-${discount.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Thuế (18%):</Typography>
              <Typography>${(subtotal * taxRate).toFixed(2)}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
              <Typography>Tổng thanh toán:</Typography>
              <Typography>${(subtotal + shippingCost - discount + (subtotal * taxRate)).toFixed(2)}</Typography>
            </Box>
          </Paper>

          {/* Phương thức thanh toán */}
          <Paper sx={{ p: 3, mt: 3, borderRadius: 2, bgcolor: "#f5f5f5" }}>
            <Typography variant="h6">Payment Method</Typography>
            <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <FormControlLabel value="credit" control={<Radio />} label={<><CreditCardIcon /> Thẻ tín dụng/Ghi nợ</>} />
              <FormControlLabel value="banking" control={<Radio />} label={<><AccountBalanceWalletIcon /> Chuyển khoản ngân hàng</>} />
            </RadioGroup>
            {paymentMethod === "credit" ? (
              <>
                <TextField fullWidth label="Enter Card Number" sx={{ mt: 2 }} />
                <TextField fullWidth label="Valid Date" type="date" sx={{ mt: 2 }} />
                <TextField fullWidth label="CVV" sx={{ mt: 2 }} />
              </>
            ) : (
              <>
                <TextField fullWidth label="Enter Your Name" sx={{ mt: 2 }} />
                <TextField fullWidth label="Account Number" sx={{ mt: 2 }} />
                <Grid container spacing={2}>
                  <Grid item xs={6}><TextField fullWidth label="Bank Name" /></Grid>
                  <Grid item xs={6}><TextField fullWidth label="IFC Code" /></Grid>
                </Grid>
              </>
            )}
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>PAY NOW</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
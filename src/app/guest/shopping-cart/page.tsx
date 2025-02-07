"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Divider,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { Edit, Delete, FirstPage, LastPage, NavigateBefore, NavigateNext } from "@mui/icons-material";

interface CartItem {
  id: number;
  image: string;
  name: string;
  preOrder: string;
  quantity: number;
  price: number;
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, image: "/placeholder.svg", name: "Oculus VR", preOrder: "Pr-1204", quantity: 1, price: 149.0 },
    { id: 2, image: "/placeholder.svg", name: "Wall Clock", preOrder: "Pr-1004", quantity: 1, price: 399.0 },
    { id: 3, image: "/placeholder.svg", name: "Note Diaries", preOrder: "Pr-1224", quantity: 1, price: 149.0 },
    { id: 4, image: "/placeholder.svg", name: "Flower Pot", preOrder: "Pr-1414", quantity: 1, price: 399.0 },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 12.0;
  const discount = 10.0;
  const tax = subtotal * 0.18;
  const total = subtotal + shippingCost - discount + tax;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "white", color: "black", p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cart Detail
      </Typography>

      <Card sx={{ bgcolor: "white", border: "2px solid #9E9E9E" }}>
        <CardContent>
          <Typography variant="h6">Order Summary</Typography>
          <Divider sx={{ my: 2, bgcolor: "#757575" }} />
<Divider sx={{ bgcolor: "#757575" }} />


          <TableContainer component={Paper} sx={{ bgcolor: "white" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell >PRODUCT IMAGE</TableCell>
                  <TableCell >PRODUCT NAME</TableCell>
                  <TableCell >PRE-ORDER</TableCell>
                  <TableCell >QUANTITY</TableCell>
                  <TableCell >PRICE</TableCell>
                  <TableCell >ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img src={item.image} alt={item.name} width={50} height={50} style={{ borderRadius: 8 }} />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.preOrder}</TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = Number.parseInt(e.target.value);
                          if (newQuantity > 0) {
                            setCartItems(cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem)));
                          }
                        }}
                        size="small"
                       
                      />
                    </TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box display="flex" justifyContent="space-between" alignItems="center" my={2}>
            <Typography>Rows per page:</Typography>
            <Select defaultValue="10" sx={{ bgcolor: "white", color: "black" }}>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>

            <Box>
              <IconButton>
                <FirstPage sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <NavigateBefore sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <NavigateNext sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <LastPage sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 2, bgcolor: "white" }} />

          <Box display="flex" justifyContent="space-between">
          <Box>
  <Typography>Apply Coupon to get discount!</Typography>
  <Box display="flex" alignItems="center">
    <TextField placeholder="Coupon Code" sx={{ bgcolor: "white", color: "black" }} />
    <Button variant="contained" color="primary" sx={{ ml: 1, height: "100%" }}>
      Apply
    </Button>
  </Box>
</Box>
            <Box>
              <Typography>Subtotal: ${subtotal.toFixed(2)}</Typography>
              <Typography>Shipping: ${shippingCost.toFixed(2)}</Typography>
              <Typography>Discount: -${discount.toFixed(2)}</Typography>
              <Typography>Tax (18%): ${tax.toFixed(2)}</Typography>
              <Typography variant="h6" fontWeight="bold">
                Total: ${total.toFixed(2)}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button variant="contained" color="primary">
              Continue Shopping
            </Button>
            <Button
  variant="contained"
  color="primary"
  onClick={() => (window.location.href = "http://localhost:3000/guest/checkout")}
>
  Proceed to Checkout
</Button>

          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

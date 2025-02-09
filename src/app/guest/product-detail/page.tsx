"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Favorite, ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardContent, Tabs, Tab, Box, Typography, IconButton, TextField } from "@mui/material";
import Header from "@/app/components/header";

export default function ProductDetail() {
  const [selectedModel, setSelectedModel] = useState("oculus-go");
  const [selectedColor, setSelectedColor] = useState("gray");
  const [quantity, setQuantity] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(0); // Thêm state cho rating

  const models = [
    { id: "oculus-go", name: "Oculus Go", image: "/placeholder.svg?height=150&width=150" },
    { id: "oculus-quest", name: "Oculus Quest", image: "/placeholder.svg?height=150&width=150" },
    { id: "oculus-rift-s", name: "Oculus Rift S", image: "/placeholder.svg?height=150&width=150" },
  ];

  const colors = [
    { id: "gold", class: "bg-yellow-400" },
    { id: "red", class: "bg-red-500" },
    { id: "gray", class: "bg-gray-400" },
  ];

  return (
   

    <Box sx={{ minHeight: "100vh", bgcolor: "white", color: "black", p: 4 }}>
     <>
    <Header />
    <Box sx={{ minHeight: "10vh", bgcolor: "black", color: "white", p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Products Detail
      </Typography>
    </Box>
  </>
      <Box display="grid" gridTemplateColumns={{ lg: "1fr 1fr" }} gap={4}>
        {/* Left Column - Images */}
        <Box 
  sx={{ 
    width: 850,  
    height: 850, 
    overflow: "hidden", 
    borderRadius: 2, 
    bgcolor: "white", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    border: "1px solid #ccc" // Viền màu xám nhẹ
  }}
>
<Image 
  src="https://via.placeholder.com/750" 
  alt="Product Image" 
  width={750} 
  height={750} 
  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
/>

</Box>

          
        

        {/* Right Column - Product Details */}
        <Box>
          <Typography variant="h5" fontWeight="bold">Oculus VR</Typography>
          <Box display="flex" alignItems="center" gap={1}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} sx={{ color: i < 4 ? "yellow" : "gray" }} />
            ))}
            <Typography variant="body2" color="gray">(449 customer reviews)</Typography>
          </Box>

          {/* Model Selection */}
          <Typography variant="h6" fontWeight="bold" mt={2}>Select Your Oculus</Typography>
          <Box display="flex" gap={2}>
            {models.map((model) => (
              <Card
                key={model.id}
                sx={{ cursor: "pointer", border: selectedModel === model.id ? "2px solid blue" : "1px solid gray" }}
                onClick={() => setSelectedModel(model.id)}
              >
                <CardContent>
                  <Image src={model.image} alt={model.name} width={75} height={75} />
                  <Typography align="center">{model.name}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Color Selection */}
          <Typography variant="h6" fontWeight="bold" mt={2}>Select Color</Typography>
          <Box display="flex" gap={2}>
            {colors.map((color) => (
              <IconButton
                key={color.id}
                sx={{ bgcolor: color.class, width: 32, height: 32, borderRadius: "50%", border: selectedColor === color.id ? "2px solid white" : "none" }}
                onClick={() => setSelectedColor(color.id)}
              />
            ))}
          </Box>

          {/* Price */}
          <Typography variant="h6" fontWeight="bold" mt={2}>Price</Typography>
          <Typography variant="h4" fontWeight="bold">
            $149 USD <Typography variant="body1" component="span" sx={{ textDecoration: "line-through", ml: 1 }}>$179 USD</Typography>
          </Typography>

          {/* Quantity & Actions */}
          <Box display="flex" alignItems="center" gap={2} mt={2}>
            <Button variant="outlined" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
            <Typography>{quantity}</Typography>
            <Button variant="outlined" onClick={() => setQuantity(quantity + 1)}>+</Button>
          </Box>
          <Box display="flex" gap={2} mt={2}>
            <Button variant="contained" color="secondary" startIcon={<Favorite />}>Add to Wishlist</Button>
            <Button variant="contained" startIcon={<ShoppingCart />}>Add to Cart</Button>
          </Box>
        </Box>
      </Box>

      {/* Tabs Section */}
      <Box mt={4}>
        <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)} textColor="primary" indicatorColor="primary">
          <Tab label="Reviews" />
          <Tab label="Description" />
          <Tab label="About" />
        </Tabs>

        {tabIndex === 0 && (
          <Box mt={2}>
            <Typography variant="h6" fontWeight="bold">Customer Reviews</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} sx={{ color: "yellow" }} />
              ))}
              <Typography variant="body2">4.5/5 (Based on 1000 reviews)</Typography>
            </Box>

            {/* Rating Section */}
            <Box mt={2} display="flex" alignItems="center">
              {[...Array(5)].map((_, i) => (
                <IconButton key={i} onClick={() => setRating(i + 1)}>
                  <Star sx={{ color: i < rating ? "yellow" : "gray" }} />
                </IconButton>
              ))}
              <Typography ml={1}>{rating} / 5</Typography>
            </Box>

            <TextField
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              placeholder="Write a review..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              sx={{ bgcolor: "white", borderRadius: 1, mt: 2 }}
            />
            <Button variant="contained" sx={{ mt: 2 }}>Submit Review</Button>
          </Box>
        )}

        {tabIndex === 1 && <Typography mt={2}>A good fit for many households...</Typography>}
        {tabIndex === 2 && <Typography mt={2}>The build quality feels really premium...</Typography>}
      </Box>
    </Box>
  );
}

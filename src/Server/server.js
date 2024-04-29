// import fetch from 'node-fetch';

// const express = require('express');
// const app = express();

// // Enable CORS middleware
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// // Define a route to proxy requests to the backend API
// app.get('/all-products', async (req, res) => {
//   try {
//     const response = await fetch('http://localhost:5000/all-products');
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ error: 'An error occurred while fetching products' });
//   }
// });

// // Start the server
// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`Proxy server is running on port ${PORT}`);
// });


// node mon
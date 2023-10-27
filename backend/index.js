const express = require('express');
const fs = require('fs');

const app = express();

// Allow cross-origin requests (CORS)
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json()); 
const PORT = 3001;

let products = [];

try {
  const data = fs.readFileSync('products.json', 'utf8');
  products = JSON.parse(data);
  console.log('Products loaded from products.json:', products);
} catch (error) {
  console.error('Error reading products.json:', error);
}

app.use('/images', express.static('images'));

app.get('/products', (req, res) => {
  try {
    const rawProducts = fs.readFileSync('./products.json', 'utf8');
    const products = JSON.parse(rawProducts);
    res.json(products);
  } catch (error) {
    console.error('Error reading products.json:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/purchase', (req, res) => {
  try {
    req.body.forEach(item => {
      console.log(item);
      const productIndex = products.findIndex(p => p.id === item.id);
      if (productIndex !== -1) {
        products[productIndex].stock -= item.quantity;
      }
    });

    fs.writeFileSync('products.json', JSON.stringify(products), 'utf8');

    res.json({ message: 'Purchase successful!' });
  } catch (error) {
    console.error('Error updating product stock:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

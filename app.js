const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());
// const port = process.env.PORT || 3000;

const dataFilePath = 'datas.json';

let items = [];

// Load data from the JSON file at startup, if it exists
try {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  items = JSON.parse(data);
} catch (err) {
  // If the file doesn't exist or is empty, start with an empty array
  items = [];
}

// List all items
app.get('/items', (req, res) => {
  res.json(items);
  console.log(items);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
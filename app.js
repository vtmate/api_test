const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;
const dataFilePath = 'datas.json';
const path = require('path');

app.use(cors());
app.use(express.static('public'));

let items = [];

//loading the data from the JSON file
try {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  items = JSON.parse(data);
} catch (err) {
  items = [];
}

//hosting index.html
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});
// app.get('/', (req, res) => {
//   console.log('serving index.html...')
//   res.sendFile('index.html');
// });

//getting items
app.get('/items', (req, res) => {
  res.json(items);
  console.log(items);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
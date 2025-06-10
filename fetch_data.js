const fs = require('fs');
const https = require('https');

const url = 'https://arz-market.moon.wh1teend.dev/api/getAllMarkets';
const filePath = './data.json';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File has been saved!');
      }
    });
  });
}).on('error', (err) => {
  console.error('Error fetching data:', err);
});
const fs = require('fs');

function countWordsInFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      const wordCount = data.split(/\s+/).filter(word => word !== '').length;
      console.log(`Total word count: ${wordCount}`);
    }
  });
}

const fileName = 'data.txt';
countWordsInFile(fileName);

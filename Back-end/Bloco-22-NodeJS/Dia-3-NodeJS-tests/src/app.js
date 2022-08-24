const express = require('express');
const { join } = require('path');
const fs = require('fs').promises;

const app = express();

app.use(express.json());

// read Json file func:
const readJsonFile = async (file) => {
  try {
    const filePath = 'files';
    const contentFile = await fs.readFile(join(__dirname, filePath, file), 'utf-8');
    return JSON.parse(contentFile);
  } catch (err) {
    return null;
  }
};

const getJsonFile = async (file) => {
  const fileInfo = await readJsonFile(file);
  return fileInfo;
};

const chocolates = getJsonFile('chocolates.json')

app.get('/chocolates/total', async (_req, res) => res.status(200).json({ chocolates: await chocolates }));

app.get('/chocolates/search', async ({ query: { name: n } }, res) => {
  const chocolatesResponse = await chocolates;
  if (n) {
    let newChocolates;
    const filteredChoc = await chocolatesResponse.chocolates.filter(({ name }) => JSON.stringify(name).toLowerCase().includes((n).toLowerCase()));
    newChocolates = filteredChoc;
    res.status(200).json({ chocolates: filteredChoc });
    return;
  }
  res.status(500).json({ isWorking: false });
});

module.exports = {
  getJsonFile,
  app,
};
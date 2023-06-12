import { readFileSync, writeFile as _writeFile } from 'fs';

export const readFile = (filePath) => {
  try {
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
};
export const writeFile = (data, filePath) => {
  const jsonData = JSON.stringify(data, null, 2);
  _writeFile(filePath, jsonData, { flag: 'w' }, (err) => {
    if (err) {
      console.error('An error occurred while writing to the file:', err);
      return;
    }
    console.log(`JSON object has been written to ${filePath}`);
  });
};

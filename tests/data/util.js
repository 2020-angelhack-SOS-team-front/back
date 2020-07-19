import fs from 'fs';
import path from 'path';

export const importCsv = (filename) => {
  const data = fs.readFileSync(path.join(__dirname, '..', 'fixtures', filename), 'utf-8')
  return data.split('\r\n').map((line) => line.split(','));
}
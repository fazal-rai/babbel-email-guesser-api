import chai from 'chai';
import path from 'path';

import ReadDataService from '../../services/readData.service.js';

const { expect } = chai;
const currentDir = process.cwd();
const relativeFilePath = 'src/data/emails.json';
const filePath = path.resolve(currentDir, relativeFilePath);

describe('ReadDataService', () => {
  describe('perform', () => {
    it('should read and process data successfully', () => {
      const processedData = {
        'amazon.com': 'last_name_first_name_initial',
        'babbel.com': 'first_name_initial_last_name',
        'google.com': 'last_name_first_name',
        'linkedin.com': 'first_name_last_name',
      };

      const service = new ReadDataService(filePath);
      const result = service.perform();

      expect(result).to.deep.equal(processedData);
    });
  });
  it('should throw an error while reading or processing data', () => {
    const filePath = '/path/to/invalidfile.txt';

    const service = new ReadDataService(filePath);

    expect(() => service.perform()).to.throw(Error);
  });
});

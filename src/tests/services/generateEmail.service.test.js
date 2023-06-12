import chai from 'chai';

import GenerateEmailService from '../../services/generateEmail.service';

const { expect } = chai;

describe('GenerateEmailService', () => {
  describe('perform', () => {
    it('should generate email using first_name_last_name format', () => {
      const data = {
        'example.com': 'first_name_last_name',
      };
      const service = new GenerateEmailService(data);
      const email = service.perform('John', 'Doe', 'example.com');
      expect(email).to.equal('JohnDoe@example.com');
    });

    it('should generate email using first_name_initial_last_name format', () => {
      const data = {
        'example.com': 'first_name_initial_last_name',
      };
      const service = new GenerateEmailService(data);
      const email = service.perform('John', 'Doe', 'example.com');
      expect(email).to.equal('JDoe@example.com');
    });

    it('should generate email using last_name_first_name format', () => {
      const data = {
        'example.com': 'last_name_first_name',
      };
      const service = new GenerateEmailService(data);
      const email = service.perform('John', 'Doe', 'example.com');
      expect(email).to.equal('DoeJohn@example.com');
    });

    it('should generate email using last_name_first_name_initial format', () => {
      const data = {
        'example.com': 'last_name_first_name_initial',
      };
      const service = new GenerateEmailService(data);
      const email = service.perform('John', 'Doe', 'example.com');
      expect(email).to.equal('DoeJ@example.com');
    });

    it('should throw an error if the domain is invalid', () => {
      const data = {};
      const service = new GenerateEmailService(data);
      expect(() => service.perform('John', 'Doe', 'example.com')).to.throw(
          'Unable to derive email, Please provide a valid domain',
      );
    });
  });
});

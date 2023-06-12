/**
 * Class representing a GenerateEmailService for email generation.
 */
class GenerateEmailService {
  /**
   * Constructs a new GenerateEmailService object.
   * @param {Object} data - The data used for email generation.
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Performs email generation based on the provided params
   * @param {string} firstName - The first name.
   * @param {string} lastName - The last name.
   * @param {string} domain - The domain name.
   * @return {string} The generated email address.
   * @throws {Error} If the domain is invalid or not provided in the data.
   */
  perform(firstName, lastName, domain) {
    const format = this.getFormat(domain);
    return this.generateEmail(format, firstName, lastName, domain);
  }

  /**
   * Retrieves the email format for the given domain from the data.
   * @param {string} domain - The domain name.
   * @return {string} The email format for the domain.
   * @throws {Error} If the domain is invalid or not provided in the data.
   */
  getFormat(domain) {
    const format = this.data[domain];
    if (format) {
      return format;
    }
    const error = new Error(
        'Unable to derive email, Please provide a valid domain',
    );
    error.code = 422;
    throw error;
  }

  /**
   * Generates an email address based on the provided params.
   * @param {string} format - The email format.
   * @param {string} firstName - The first name.
   * @param {string} lastName - The last name.
   * @param {string} domain - The domain name.
   * @return {string} The generated email address.
   */
  generateEmail(format, firstName, lastName, domain) {
    switch (format) {
      case 'first_name_last_name':
        return `${firstName}${lastName}@${domain}`;
      case 'first_name_initial_last_name':
        return `${firstName.charAt(0)}${lastName}@${domain}`;
      case 'last_name_first_name':
        return `${lastName}${firstName}@${domain}`;
      case 'last_name_first_name_initial':
        return `${lastName}${firstName.charAt(0)}@${domain}`;
      default:
        return '';
    }
  }
}

export default GenerateEmailService;

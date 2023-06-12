import { readFile } from '../utils/file.util.js';

/**
 * Class representing a ReadDataService for reading and processing data.
 */
class ReadDataService {
  /**
   * Constructs a new ReadDataService object.
   * @param {string} filePath - The file path of the data file.
   */
  constructor(filePath) {
    /**
     * The file path of the data file.
     * @type {string}
     */
    this.filePath = filePath;
  }

  /**
   * Performs reading and processing of data.
   * @return {Object} The processed data.
   * @throws {Error} If an error occurs while reading or processing the data.
   */
  perform() {
    try {
      const data = readFile(this.filePath);
      const result = this.processEmails(data);
      return result;
    } catch (error) {
      throw new Error();
    }
  }

  /**
   * Processes the email data.
   * @param {Object} data - The email data to be processed.
   * @return {Object} The processed email data.
   * @throws {Error} If the email data is invalid.
   */
  processEmails(data) {
    /**
     * The result of the email processing.
     * @type {Object}
     */
    const result = {};

    for (const [key, value] of Object.entries(data)) {
      const [firstName, lastName] = key.split(' ');
      const [namePart, domain] = value.split('@');

      if (firstName && lastName && namePart && domain) {
        const fullName = namePart;
        const emailType = this.getEmailType(
            fullName,
            namePart,
            lastName,
            firstName,
        );

        result[domain] = emailType;
      } else {
        throw new Error();
      }
    }

    return result;
  }

  /**
   * Determines the email type based on the provided names and full name.
   * @param {string} fullName - The full name.
   * @param {string} namePart - The name part of the email.
   * @param {string} lastName - The last name.
   * @param {string} firstName - The first name.
   * @return {string} The email type.
   */
  getEmailType(fullName, namePart, lastName, firstName) {
    if (
      fullName.includes(lastName.toLowerCase()) &&
      fullName.includes(firstName.toLowerCase())
    ) {
      if (
        fullName.indexOf(firstName.toLowerCase()) <
        fullName.indexOf(lastName.toLowerCase())
      ) {
        return 'first_name_last_name';
      }
      if (
        fullName.indexOf(firstName.toLowerCase()) >
        fullName.indexOf(lastName.toLowerCase())
      ) {
        return 'last_name_first_name';
      }
    } else if (fullName.includes(lastName.toLowerCase())) {
      if (namePart.endsWith(lastName.toLowerCase())) {
        return 'first_name_initial_last_name';
      }
      if (namePart.startsWith(lastName.toLowerCase())) {
        return 'last_name_first_name_initial';
      }
    }

    return '';
  }
}

export default ReadDataService;

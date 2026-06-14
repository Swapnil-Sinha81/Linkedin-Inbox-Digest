const CryptoJS = require('crypto-js');

// Assuming you have the encrypted password stored in a variable called encryptedPassword
const decryptedBytes = CryptoJS.AES.decrypt(encryptedPassword, 'your-encryption-key');
const decryptedPassword = decryptedBytes.toString(CryptoJS.enc.Utf8);

console.log(decryptedPassword);

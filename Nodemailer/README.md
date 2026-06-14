## Methodology:
- The module that exports two functions, signup and getBill, related to sending emails using the 
<a href="https://nodemailer.com/about/">Nodemailer</a> library in a Node.js application.
- The SingUp function is an asynchronous function that handles sending test emails. 

- Calling the function:
```javascript
nodemailer.createTestAccount()
```

- This create a test account with Ethereal, a fake SMTP service for testing purposes. 
- It then creates a transporter object using the SMTP transport configuration, including the host, port, and authentication details from the test account.

### How does the user receive the mail after every successive three hours:
- The function defines a message object that contains the details of the email to be sent, such as the sender address, BCC receivers, subject, plain text body, and HTML body. It sets an interval using setInterval to send the email every 30 seconds.

- Inside the interval, the transporter.sendMail() function is called to send the email. If the email is sent successfully, it logs the message ID to the console. If there is an error, it logs the error message to the console.

- After setting up the interval, the function sends a JSON response with a success status (201) and includes a message indicating that the recipient will receive an email every 30 seconds. It also includes the message ID and a preview URL of the sent email. If there is an error, it sends a JSON response with an error status (500) and includes the error message.

## G-mail Services: Mail Generator
- The getBill function handles sending an email with personalized LinkedIn statistics to a user. It expects the user's email address (userEmail) in the request body. 
- It defines the email configuration using the Gmail service and the EMAIL and PASSWORD variables.

- It creates a MailGenerator object with a default theme and product details. It then defines a response object that contains the content of the email, including the name, intro, table data, and outro.

- The function generates the HTML for the email using the MailGenerator.generate() method. It creates a message object with the sender address, BCC receiver (user's email), subject, and the generated HTML.

### HTTP Request: To send the mail
- transporter.sendMail() function is called to send the email. 
- If the email is sent successfully, it sends a JSON response with a success status (201) and a message indicating that the user should receive an email. 
- If there is an error, it sends a JSON response with an error status (500) and includes the error message.

### Testing the HTTP Request:
- Using <a href="https://www.postman.com/">Postman</a> we can test the api by using the POST request and adding the mail ID of the users to the JSON response object:
```json
{
  "userEmail": [
    "mail1@gmail.com",
    "mail2@gmail.com",
    "mail3@gmail.com",
    "mail4@gmail.com"
  ]
}
```
- Once the HTTP Request is passed we can see that the output received will be :
```json
{
    "msg": "You should receive an e-mail"
}
``` 
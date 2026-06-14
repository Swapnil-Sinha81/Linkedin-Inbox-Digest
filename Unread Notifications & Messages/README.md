## Approach and Implementation:
- Setting up the environment
1. Install Python and necessary libraries such as Selenium, openpyxl, smtplib, etc.
2. Set up a Gmail account to send email notifications.
3. Create an Excel file to store historical data.
4. Building a framework in order to maintain reusable functions for addressing readability issues and maintainability.

## Technologies Used and their application functions:
1. Selenium & Python
- Helps to automate the login process to LinkedIn.
- Moreover it  helps in navigating to the LinkedIn profile page.
- Also, fetches the number of unread messages and notifications from the profile. Store this data in the Excel file along with the timestamp.

2. SMTP
- It is an library that helps to connect with gmail account and then the backend application can send the mail to the specific email address.

3. HTML & Excel Interaction
- For building an mail body that will organize the content of the mail in order for the user to able to read and understand the message.


## Work-flow:
1. It imports the webdriver module from the selenium library. This module provides the necessary methods to automate browser actions.

2. It defines a function called get_linkedin_notifications that opens a Chrome browser using the webdriver.Chrome() method and navigates to the LinkedIn website.

3. The function enters the provided username and password in the respective input fields on the LinkedIn login page.

4. It finds the login button element and clicks on it to log in. After logging in, the function locates the "Notifications" icon on the page and clicks on it.

5. It then finds the element that displays the count of notifications and retrieves its text value.

6. The browser is closed using driver.quit().

7. The function converts the retrieved notification count from text to an integer and returns it.

8. Another function called get_linkedin_messages is defined with a similar process to retrieve the number of messages.

9. The main function is defined, which serves as the entry point for the script.

10. In the main function, it calls the get_linkedin_notifications and get_linkedin_messages functions to retrieve the counts.
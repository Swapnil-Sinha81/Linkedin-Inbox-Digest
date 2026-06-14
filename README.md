## Overview

This project monitors a LinkedIn account and sends periodic email summaries containing unread message and notification counts.

Every **3 hours**, the system collects unread notification and message statistics from a LinkedIn profile and sends an email report to a configured Gmail recipient.

The email includes:

* Total unread messages
* Total unread notifications
* Comparison with the previous execution
* Increase/decrease indicators for both metrics

---

## Project Structure

```text
.
├── info-collection/
│   ├── node_modules/
│   ├── public/
│   ├── server/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── nodemailer/
│   ├── controller/
│   ├── routes/
│   ├── node_modules/
│   ├── env.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── unread/
│   ├── functionality.ipynb
│   └── README.md
│
└── README.md
```

---

## Components

### 1. info-collection

Responsible for collecting LinkedIn account information.

#### Responsibilities

* Authenticate and access LinkedIn data
* Retrieve unread message count
* Retrieve unread notification count
* Store current statistics for comparison
* Expose collected data to downstream services

---

### 2. nodemailer

Responsible for email generation and delivery.

#### Responsibilities

* Fetch latest unread counts
* Compare current counts with previous execution
* Generate email content
* Send notification emails using Gmail SMTP
* Schedule email delivery every 3 hours

#### Email Example

```text
Subject: LinkedIn Activity Summary

Unread Messages: 12
Unread Notifications: 18

Comparison with Previous Run:

Messages:
Current: 12
Previous: 8
Change: +4

Notifications:
Current: 18
Previous: 15
Change: +3
```

---

### 3. unread

Contains research, experimentation, and proof-of-concept implementations.

#### Contents

* Jupyter notebooks
* Data extraction experiments
* Feature validation
* Automation testing

---

## Functional Requirements

### Notification Schedule

* Trigger execution every 3 hours.
* Collect latest LinkedIn unread counts.
* Compare against the previous execution.
* Generate summary report.
* Send report to recipient Gmail account.

### Email Content

The email must contain:

| Field                   | Description                               |
| ----------------------- | ----------------------------------------- |
| Unread Messages         | Current unread LinkedIn messages          |
| Unread Notifications    | Current unread LinkedIn notifications     |
| Previous Messages       | Previous execution message count          |
| Previous Notifications  | Previous execution notification count     |
| Message Difference      | Increase/decrease from previous execution |
| Notification Difference | Increase/decrease from previous execution |
| Timestamp               | Execution time                            |

---

## Workflow

```text
LinkedIn Profile
        │
        ▼
Info Collection Service
        │
        ▼
Store Current Metrics
        │
        ▼
Compare with Previous Metrics
        │
        ▼
Generate Email Report
        │
        ▼
Send Email via Gmail
        │
        ▼
Recipient Inbox
```

---

## Installation

### Prerequisites

* Node.js (v18+ recommended)
* npm
* Gmail account with SMTP/App Password enabled

### Install Dependencies

```bash
# Info Collection Service
cd info-collection
npm install

# Email Service
cd ../nodemailer
npm install
```

---

## Running the Application

### Start Data Collection Service

```bash
cd info-collection
npm start
```

### Start Email Notification Service

```bash
cd nodemailer
npm start
```

---

## Future Enhancements

* Slack notifications
* Microsoft Teams integration
* Dashboard for historical trends
* Daily/Weekly summary reports
* Multiple LinkedIn account support
* Email templates with charts and analytics

---

## Author

LinkedIn Unread Notifications & Messages Monitoring System

Version: 1.0

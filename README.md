# Google Sheets Due Date Email Reminder Script

This project allows you to send **automatic email reminders** from Google Sheets when a due date is approaching.

## ✅ What It Does

- Checks each row in your Google Sheet for an upcoming due date
- Sends an email reminder if the due date is within a specified number of days

---

## 📋 Sheet Setup

Make sure your sheet looks like this:

| Task         | Due Date     |
|--------------|--------------|
| Project A    | 2025-08-10   |
| Submit Report| 2025-08-15   |

- Column A: Task name
- Column B: Due date
- Row 1 should be the header
- Sheet name: `Sheet1` (or change in the script)

---

## 🛠️ How to Use

### 1. Open the Script Editor
- In your Google Sheet: go to **Extensions > Apps Script**

### 2. Paste the Script

```javascript
function sendDueDateReminders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Update if your sheet has a different name
  const data = sheet.getDataRange().getValues();
  const today = new Date();
  const daysBefore = 3; // Days in advance to send reminder
  const email = "your-email@example.com"; // <-- Replace this with your email address

  for (let i = 1; i < data.length; i++) {
    const task = data[i][0];
    const dueDate = new Date(data[i][1]);
    const timeDiff = (dueDate - today) / (1000 * 3600 * 24);
    
    if (timeDiff <= daysBefore && timeDiff >= 0) {
      MailApp.sendEmail(email, `Reminder: "${task}" due soon`, `Your task "${task}" is due on ${dueDate.toDateString()}.`);
    }
  }
}

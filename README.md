# 📆 Google Sheets Due Date Email Reminder

A lightweight script that sends automatic email reminders when a due date is approaching in your Google Sheet.

---

## ✅ Features

- Sends email alerts when a task is due within a specified number of days
- Customizable number of days before the due date
- Runs daily using a time-driven trigger
- Works directly inside Google Sheets with no add-ons required

---

## 📋 Sheet Setup

Your sheet should look like this:

| Task Name     | Due Date     |
|---------------|--------------|
| Project A     | 2025-08-10   |
| Submit Report | 2025-08-15   |

- Column A: Task name
- Column B: Due date
- Row 1 should be the header
- Sheet name: `Sheet1` (update the script if different)

---

## 🛠️ How to Use

### 1. Open the Script Editor
- Open your Google Sheet
- Go to **Extensions > Apps Script**

### 2. Paste the Script

Copy the contents of [`due-date-reminder.gs`](./due-date-reminder.gs) into the editor.

### 3. Save & Authorize
- Click the floppy disk icon to save the project (e.g., name it `DueDateReminder`)
- Click the play ▶️ button to run `sendDueDateReminders` once
- Grant permission when prompted

### 4. Set Up the Trigger
- Go to the ⏰ **Triggers** panel (left sidebar)
- Click **"Add Trigger"**
  - Choose function: `sendDueDateReminders`
  - Select event source: **Time-driven**
  - Choose type: **Day timer**
  - Pick a time (e.g. 8:00 AM)

That's it! The script will now email you when a task is due within the specified number of days.

---

## ⚙️ Customization

You can modify these in the script:

- `daysBefore`: Number of days before the due date to send a reminder
- `email`: Your email address
- Add more task columns or customize the email body

---

## 📌 Notes

- You must be the owner or editor of the Google Sheet to install the script
- Emails are sent via your Google account using `MailApp.sendEmail`

---

## 📬 License

MIT License — free for personal or commercial use. Attribution appreciated!

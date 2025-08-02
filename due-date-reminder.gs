function sendDueDateReminders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Change if your sheet has a different name
  const data = sheet.getDataRange().getValues();
  const today = new Date();
  const daysBefore = 3; // Days before due date to trigger reminder
  const email = "your-email@example.com"; // <-- Replace this with your email address

  for (let i = 1; i < data.length; i++) {
    const task = data[i][0];
    const dueDate = new Date(data[i][1]);

    if (!dueDate || isNaN(dueDate)) continue;

    const timeDiff = (dueDate - today) / (1000 * 3600 * 24);

    if (timeDiff <= daysBefore && timeDiff >= 0) {
      MailApp.sendEmail({
        to: email,
        subject: `Reminder: "${task}" is due soon`,
        body: `Hi,\n\nThis is a reminder that your task "${task}" is due on ${dueDate.toDateString()}.\n\nBest,\nGoogle Sheets Reminder`
      });
    }
  }
}

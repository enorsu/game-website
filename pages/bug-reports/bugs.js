// Function to add a bug report to the list
function addBugReport(bugTitle, bugDescription, bugDate, bugReportedBy) {
    // Create a new list item for the bug report
    const li = document.createElement('li');
    li.className = 'w3-padding w3-round w3-card w3-margin-bottom';
    li.innerHTML = `<strong>${bugTitle}:</strong> ${bugDescription}<br> Reported by: ${bugReportedBy}  <br> ${bugDate} `;

    // Add the list item to the bug list
    document.getElementById('bugList').appendChild(li);
}

// Example usage:
// addBugReport('Bug title', 'Bug description', "bug date", "bug reported by");

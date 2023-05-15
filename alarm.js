// Function to display the current time on the clock
function displayTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('clock').textContent = time;
    setTimeout(displayTime, 1000); // Update every second
  }

  // Function to set an alarm
  function setAlarm() {
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const second = document.getElementById('second').value;
    const period = document.getElementById('period').value;
    const alarmTime = `${hour}:${minute}:${second} ${period}`;

    // Create alarm list item
    const listItem = document.createElement('li');
    listItem.textContent = alarmTime;
    listItem.classList.add('alarm-list-item');

    // Create delete button for the alarm
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      listItem.remove();
    };

    // Append delete button to alarm list item
    listItem.appendChild(deleteButton);

    // Append alarm list item to the alarm list
    document.getElementById('alarmList').appendChild(listItem);

    // Set the alarm time
    const alarm = new Date();
    alarm.setHours(period === 'am' ? parseInt(hour) : parseInt(hour) + 12);
    alarm.setMinutes(parseInt(minute));
    alarm.setSeconds(parseInt(second));

    // Calculate the time remaining until the alarm goes off
    const timeUntilAlarm = alarm - Date.now();

    // Schedule the alarm to go off
    setTimeout(function () {
      alert(`Alarm at ${alarmTime}`);
    }, timeUntilAlarm);

    // Clear the input fields
    document.getElementById('hour').value = '';
    document.getElementById('minute').value = '';
    document.getElementById('second').value = '';
  }

  // Start displaying the time
  displayTime();
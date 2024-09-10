document.addEventListener('DOMContentLoaded', function() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentIndex = new Date().getDay();
  
    const routine = {
      Monday: [
        { time: '09:30 - 10:20 AM', course: 'Soft Skills-III', venue: 'Block-D2-314' },
        { time: '10:20 - 11:10 AM', course: 'Soft Skills-III', venue: 'Block-D2-314' },
        { time: '11:10 - 12:00 PM', course: 'Dockers and Kubernetes Lab', venue: 'Block-D2-508-A' },
        { time: '12:00 - 12:50 PM', course: 'Dockers and Kubernetes Lab', venue: 'Block-D2-508-A' },
        { time: '01:50 - 02:40 PM', course: 'Computer Networks', venue: 'Block-D2-405' },
        { time: '03:30 - 04:20 PM', course: 'Artificial Intelligence', venue: 'Block-D2-403' },
      ],
      Tuesday: [
        { time: '09:30 - 10:20 AM', course: 'Predictive Analytics', venue: 'Block-D2-508-A' },
        { time: '10:20 - 11:10 AM', course: 'Predictive Analytics', venue: 'Block-D2-508-A' },
        { time: '11:10 - 12:00 PM', course: 'Computer Networks', venue: 'Block-D2-401' },
        { time: '12:00 - 12:50 PM', course: 'Predictive Analytics', venue: 'Block-D2-401' },
      ],
      Wednesday: [
        { time: '09:30 - 10:20 AM', course: 'Predictive Analytics', venue: 'Block-D2-406' },
        { time: '10:20 - 11:10 AM', course: 'SOFT COMPUTING', venue: 'Block-D2-406' },
        { time: '11:10 - 12:00 PM', course: 'Computer Networks', venue: 'Block-D2-508-A' },
        { time: '12:00 - 12:50 PM', course: 'Computer Networks', venue: 'Block-D2-508-A' },
        { time: '01:50 - 02:40 PM', course: 'Artificial Intelligence', venue: 'Block-D2-405' },  // New subject added
        { time: '02:40 - 03:30 PM', course: 'Aptitude-III', venue: 'Block-D2-405' },
        { time: '03:30 - 04:20 PM', course: 'Aptitude-III', venue: 'Block-D2-405' },
      ],
      Thursday: [
        { time: '09:30 - 10:20 AM', course: 'Computer Networks', venue: 'Block-D2-407' },
        { time: '10:20 - 11:10 AM', course: 'SOFT COMPUTING', venue: 'Block-D2-401' },
        { time: '11:10 - 12:00 PM', course: 'Predictive Analytics', venue: 'Block-D2-405' },
        { time: '12:00 - 12:50 PM', course: 'Artificial Intelligence', venue: 'Block-D2-405' },
        { time: '02:40 - 03:30 PM', course: 'Soft Skills-III', venue: 'Block-D3-302' },
        { time: '03:30 - 04:20 PM', course: 'Soft Skills-III', venue: 'Block-D3-302' },
      ],
      Friday: [
        { time: '09:30 - 10:20 AM', course: 'SOFT COMPUTING', venue: 'Block-D2-513' },
        { time: '10:20 - 11:10 AM', course: 'SOFT COMPUTING', venue: 'Block-D2-513' },
        { time: '12:00 - 12:50 PM', course: 'SOFT COMPUTING', venue: 'Block-D2-407' },
        { time: '02:40 - 03:30 PM', course: 'Aptitude-III', venue: 'Block-D2-407' },
        { time: '03:30 - 04:20 PM', course: 'Aptitude-III', venue: 'Block-D2-407' },
      ],
      Saturday: [],
      Sunday: [],
    };
  
    function displaySchedule(dayIndex) {
      const day = days[dayIndex];
      const scheduleContainer = document.getElementById('schedule');
      const dayTitle = document.getElementById('day-title');
  
      dayTitle.textContent = `${day}'s Timetable`;
      scheduleContainer.innerHTML = '';
  
      if (routine[day].length === 0) {
        scheduleContainer.innerHTML = '<p>No classes today.</p>';
      } else {
        routine[day].forEach((session) => {
          const scheduleItem = document.createElement('div');
          scheduleItem.classList.add('schedule-item');
  
          scheduleItem.innerHTML = `
            <div class="course-name">${session.course}</div>
            <div class="time">${session.time}</div>
            <div class="venue">${session.venue}</div>
          `;
  
          scheduleContainer.appendChild(scheduleItem);
        });
      }

    }
  
    displaySchedule(currentIndex);
  
    document.getElementById('next-day-button').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % 7; // Loop back to Sunday after Saturday
      displaySchedule(currentIndex);
    });
});

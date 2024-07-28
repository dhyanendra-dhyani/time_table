document.addEventListener('DOMContentLoaded', () => {
    const schedule = document.getElementById('schedule');
    const scheduleTitle = document.getElementById('schedule-title');
    const nextDayButton = document.getElementById('next-day-button');
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let todayIndex = new Date().getDay();
    let currentIndex = todayIndex;
  
    // Hardcoded timetable data
    const routine = {
      Monday: [
        { time: '09:30 - 10:20 AM', course: 'Soft Skills-III:P', venue: 'Block-D2-314', },
        { time: '10:20 - 11:10 AM', course: 'Soft Skills-III:P', venue: 'Block-D2-314', instructor: 'Neha Mahawar (E15687)' },
        { time: '11:10 - 12:00 PM', course: 'Dockers and Kubernetes Lab:P', venue: 'Block-D2-508-A', instructor: 'Tanvi (E15506)' },
        { time: '12:00 - 12:50 PM', course: 'Dockers and Kubernetes Lab:P', venue: 'Block-D2-508-A', instructor: 'Tanvi (E15506)' },
        { time: '01:50 - 02:40 PM', course: 'Computer Networks:L', venue: 'Block-D2-405', instructor: 'Ratish Kumar (E14394)' },
        { time: '03:30 - 04:20 PM', course: 'Artificial Intelligence:L', venue: 'Block-D2-403', instructor: 'Tanvi (E15506)' },
      ],
      Tuesday: [
        { time: '09:30 - 10:20 AM', course: 'Predictive Analytics:P', venue: 'Block-D2-508-A', instructor: 'Rohit Singh (E17419)' },
        { time: '10:20 - 11:10 AM', course: 'Predictive Analytics:P', venue: 'Block-D2-508-A', instructor: 'Rohit Singh (E17419)' },
        { time: '11:10 - 12:00 PM', course: 'Computer Networks:L', venue: 'Block-D2-401', instructor: 'Ratish Kumar (E14394)' },
        { time: '12:00 - 12:50 PM', course: 'Predictive Analytics:L', venue: 'Block-D2-401', instructor: 'Rohit Singh (E17419)' },
      ],
      Wednesday: [
        { time: '09:30 - 10:20 AM', course: 'Predictive Analytics:L', venue: 'Block-D2-406', instructor: 'Rohit Singh (E17419)' },
        { time: '10:20 - 11:10 AM', course: 'SOFT COMPUTING:L', venue: 'Block-D2-406', instructor: 'Prabjot Singh Bali (E16592)' },
        { time: '11:10 - 12:00 PM', course: 'Computer Networks:P', venue: 'Block-D2-508-A', instructor: 'Ratish Kumar (E14394)' },
        { time: '12:00 - 12:50 PM', course: 'Computer Networks:P', venue: 'Block-D2-508-A', instructor: 'Ratish Kumar (E14394)' },
        { time: '02:40 - 03:30 PM', course: 'Aptitude-III:T', venue: 'Block-D2-405', instructor: 'Shailendra Kumar (E16771)' },
        { time: '03:30 - 04:20 PM', course: 'Aptitude-III:T', venue: 'Block-D2-405', instructor: 'Shailendra Kumar (E16771)' },
      ],
      Thursday: [
        { time: '09:30 - 10:20 AM', course: 'Computer Networks:L', venue: 'Block-D2-407', instructor: 'Ratish Kumar (E14394)' },
        { time: '10:20 - 11:10 AM', course: 'SOFT COMPUTING:L', venue: 'Block-D2-401', instructor: 'Prabjot Singh Bali (E16592)' },
        { time: '11:10 - 12:00 PM', course: 'Predictive Analytics:L', venue: 'Block-D2-405', instructor: 'Rohit Singh (E17419)' },
        { time: '12:00 - 12:50 PM', course: 'Artificial Intelligence:L', venue: 'Block-D2-405', instructor: 'Tanvi (E15506)' },
        { time: '02:40 - 03:30 PM', course: 'Soft Skills-III:P', venue: 'Block-D3-302', instructor: 'Neha Mahawar (E15687)' },
        { time: '03:30 - 04:20 PM', course: 'Soft Skills-III:P', venue: 'Block-D3-302', instructor: 'Neha Mahawar (E15687)' },
      ],
      Friday: [
        { time: '09:30 - 10:20 AM', course: 'SOFT COMPUTING:P', venue: 'Block-D2-513', instructor: 'Prabjot Singh Bali (E16592)' },
        { time: '10:20 - 11:10 AM', course: 'SOFT COMPUTING:P', venue: 'Block-D2-513', instructor: 'Prabjot Singh Bali (E16592)' },
        { time: '12:00 - 12:50 PM', course: 'SOFT COMPUTING:L', venue: 'Block-D2-407', instructor: 'Prabjot Singh Bali (E16592)' },
        { time: '02:40 - 03:30 PM', course: 'Aptitude-III:T', venue: 'Block-D2-407', instructor: 'Shailendra Kumar (E16771)' },
        { time: '03:30 - 04:20 PM', course: 'Aptitude-III:T', venue: 'Block-D2-407', instructor: 'Shailendra Kumar (E16771)' },
      ],
      Saturday: [],
      Sunday: [],
    };
  
    function displaySchedule(dayIndex) {
      const dayName = days[dayIndex];
      const scheduleData = routine[dayName] || [];
      schedule.innerHTML = '';
  
      scheduleTitle.textContent = `${dayName}'s Schedule`;
  
      if (scheduleData.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No classes today!';
        schedule.appendChild(li);
      } else {
        scheduleData.forEach(classInfo => {
          const li = document.createElement('li');
          li.textContent = `${classInfo.time}: ${classInfo.course} by ${classInfo.instructor} at ${classInfo.venue}`;
          schedule.appendChild(li);
        });
      }
    }
  
    displaySchedule(currentIndex);
  
    nextDayButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % 7; // Loop back to Sunday after Saturday
      displaySchedule(currentIndex);
    });
  });
  

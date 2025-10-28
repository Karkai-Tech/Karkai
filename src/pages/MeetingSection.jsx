import React, { useState, useEffect } from 'react';

const MeetingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);

  const generateTimeSlots = (date) => {
    const slots = [];
    const startHour = 9;
    const endHour = 17;
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = new Date();
        time.setHours(hour, minute, 0, 0);
        const timeString = time.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        });
        slots.push(timeString);
      }
    }
    return slots;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const isDateAvailable = (day) => {
    if (!day) return false;
    const today = new Date();
    const checkDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return checkDate >= today;
  };

  const handleDateSelect = (day) => {
    if (isDateAvailable(day)) {
      setSelectedDate(day);
      setSelectedTime(null);
      setTimeSlots(generateTimeSlots());
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      const meetingDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate);
      const meetingDateTime = `${meetingDate.toDateString()} at ${selectedTime}`;
      
      // Create email body
      const emailBody = `Hi Karkai Team,

I would like to schedule a 25-minute strategy call.

Preferred Date & Time: ${meetingDateTime}

Please confirm this time slot works for you.

Best regards`;

      // Open email client
      const emailLink = `mailto:karkaisolution@gmail.com?subject=Meeting Request - 25-Minute Strategy Call&body=${encodeURIComponent(emailBody)}`;
      window.open(emailLink);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.meeting-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const days = getDaysInMonth(currentMonth);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="meeting-section">
      <div className="meeting-container">
        <div className="meeting-content">
          <div className="meeting-text">
            <h2 className="meeting-title">Ready to Bring Your Vision to Life?</h2>
            <div className="meeting-description">
              <p>Every great project starts with a clear conversation.</p>
              <p>We work with founders and teams who are serious about building something impactful. Schedule a short call to discuss your project goals, challenges, and roadmap.</p>
              <p>Let's discuss your ideas, goals, and how we can help make them happen.</p>
              <p>Calls are 25 minutes long — focused, practical, and completely commitment-free.</p>
            </div>
          </div>
          
          <div className="meeting-scheduler">
            <div className="scheduler-header">
              <div className="meeting-icon">●</div>
              <div className="meeting-info">
                <div className="company-name">Karkai</div>
                <div className="meeting-title-scheduler">25-Minute Strategy Call</div>
                <div className="meeting-description-scheduler">
                  A short call to understand your goals and see how our team can help you move forward with a clear plan of action.
                </div>
              </div>
            </div>
            
            <div className="meeting-details">
              <div className="detail-item">
                <span className="detail-icon">✓</span>
                <span>Requires confirmation</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🕐</span>
                <span>25m</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📹</span>
                <span>Google Meet</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🌍</span>
                <span>Asia/Kolkata</span>
              </div>
            </div>
            
            <div className="calendar-section">
              <div className="calendar-header">
                <button 
                  className="nav-btn"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                >
                  ‹
                </button>
                <h3 className="month-year">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <button 
                  className="nav-btn"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                >
                  ›
                </button>
              </div>
              
              <div className="calendar-grid">
                <div className="day-header">MON</div>
                <div className="day-header">TUE</div>
                <div className="day-header">WED</div>
                <div className="day-header">THU</div>
                <div className="day-header">FRI</div>
                <div className="day-header">SAT</div>
                <div className="day-header">SUN</div>
                
                {days.map((day, index) => (
                  <button
                    key={index}
                    className={`calendar-day ${day === selectedDate ? 'selected' : ''} ${isDateAvailable(day) ? 'available' : 'unavailable'}`}
                    onClick={() => handleDateSelect(day)}
                    disabled={!isDateAvailable(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
            
            {selectedDate && (
              <div className="time-section">
                <div className="time-label">TIME</div>
                <div className="time-slots">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      className={`time-slot ${time === selectedTime ? 'selected' : ''}`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {selectedDate && selectedTime && (
              <button className="schedule-btn" onClick={handleSchedule}>
                Schedule Meeting
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .meeting-section {
          background-color: #FFF9EA;
          padding: 120px 32px;
          min-height: 100vh;
        }

        .meeting-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .meeting-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          align-items: stretch;
          min-height: 600px;
        }

        .meeting-text {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .meeting-section.visible .meeting-text {
          opacity: 1;
          transform: translateY(0);
        }
        
        .meeting-section.visible {
          opacity: 1;
        }

        .meeting-title {
          font-size: 56px;
          font-weight: 700;
          color: #222;
          margin-bottom: 32px;
          line-height: 1.1;
          font-family: 'Georgia', serif;
        }

        .meeting-description p {
          font-size: 20px;
          line-height: 1.6;
          color: #333;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .meeting-scheduler {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.2s;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .meeting-section.visible .meeting-scheduler {
          opacity: 1;
          transform: translateY(0);
        }

        .scheduler-header {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }

        .meeting-icon {
          width: 12px;
          height: 12px;
          background: #222;
          border-radius: 50%;
          margin-top: 8px;
        }

        .company-name {
          font-size: 16px;
          color: #666;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .meeting-title-scheduler {
          font-size: 28px;
          font-weight: 700;
          color: #222;
          margin-bottom: 12px;
        }

        .meeting-description-scheduler {
          font-size: 16px;
          color: #666;
          line-height: 1.5;
          font-weight: 400;
        }

        .meeting-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          color: #333;
          font-weight: 500;
        }

        .detail-icon {
          width: 16px;
          text-align: center;
        }

        .calendar-section {
          margin-bottom: 32px;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .nav-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: #f5f5f5;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #333;
        }

        .nav-btn:hover {
          background: #e5e5e5;
        }

        .month-year {
          font-size: 22px;
          font-weight: 700;
          color: #222;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }

        .day-header {
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: #666;
          padding: 8px 0;
        }

        .calendar-day {
          width: 40px;
          height: 40px;
          border: 1px solid #e5e5e5;
          background: #f5f5f5;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          color: #333;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .calendar-day.available:hover {
          background: #e5e5e5;
        }

        .calendar-day.selected {
          background: #222;
          color: white;
        }

        .calendar-day.unavailable {
          background: #f9f9f9;
          color: #ccc;
          cursor: not-allowed;
        }

        .time-section {
          margin-bottom: 24px;
        }

        .time-label {
          font-size: 16px;
          font-weight: 700;
          color: #333;
          margin-bottom: 16px;
        }

        .time-slots {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 8px;
        }

        .time-slot {
          padding: 8px 12px;
          border: 1px solid #e5e5e5;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          color: #333;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .time-slot:hover {
          border-color: #222;
        }

        .time-slot.selected {
          background: #222;
          color: white;
          border-color: #222;
        }

        .schedule-btn {
          width: 100%;
          padding: 16px;
          background: #222;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .schedule-btn:hover {
          background: #333;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .meeting-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .meeting-title {
            font-size: 36px;
          }

          .meeting-scheduler {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default MeetingSection;

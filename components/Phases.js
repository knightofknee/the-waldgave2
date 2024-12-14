import React, { useEffect, useState } from 'react';

const phases = [
  { name: 'Ideation', isActive: true },
  { name: 'Refinement', isActive: false },
  { name: 'Secret Invasion', isActive: false },
  { name: 'Shock and Awe Campaign', isActive: false },
];

const targetDate = new Date('2026-08-29T00:00:00Z');

function calculateCountdown() {
  const now = new Date();
  if (now >= targetDate) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  // Start from now and increment step-by-step to find Y, M, D
  let current = new Date(now.getTime());

  let years = 0;
  while (true) {
    const nextYear = new Date(current.getTime());
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    if (nextYear > targetDate) break;
    current = nextYear;
    years++;
  }

  let months = 0;
  while (true) {
    const nextMonth = new Date(current.getTime());
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    if (nextMonth > targetDate) break;
    current = nextMonth;
    months++;
  }

  let days = 0;
  while (true) {
    const nextDay = new Date(current.getTime());
    nextDay.setDate(nextDay.getDate() + 1);
    if (nextDay > targetDate) break;
    current = nextDay;
    days++;
  }

  // Now the difference should be less than a day
  const diff = targetDate - current;
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const remainderAfterHours = totalSeconds % 3600;
  const minutes = Math.floor(remainderAfterHours / 60);
  const seconds = remainderAfterHours % 60;

  return { years, months, days, hours, minutes, seconds };
}

export default function Phases() {
  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: 'flex',
      padding: '10px',
      gap: '10px',
      backgroundColor: 'rgb(220, 170, 210)'
    }}>
      {phases.map((phase, index) => {
        const activeStyle = phase.isActive
          ? {
              backgroundColor: 'rgb(235, 215, 235)',
              border: '2px solid rgb(150, 80, 150)',
              color: 'rgb(40, 40, 40)',
              fontWeight: 'bold'
            }
          : {
              backgroundColor: 'rgb(245, 235, 245)',
              border: '1px solid rgb(200, 200, 200)',
              color: 'rgb(120, 120, 120)'
            };

        const isShockAndAwe = phase.name === 'Shock and Awe Campaign';

        return (
          <div
            key={index}
            style={{
              padding: '5px 10px',
              borderRadius: '5px',
              ...activeStyle,
              cursor: phase.isActive ? 'default' : 'pointer',
              position: isShockAndAwe ? 'relative' : 'static'
            }}
          >
            {phase.name}

            {isShockAndAwe && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',       // place directly below the box
                  left: '50%',       // center horizontally below the box
                  transform: 'translate(-50%, 5px)',
                  color: 'rgb(40, 40, 40)',
                  fontSize: '0.85em',
                  whiteSpace: 'nowrap',
                  fontWeight: 'normal'
                }}
              >
                {countdown.years}:{countdown.months}:{countdown.days}:{countdown.hours}:{countdown.minutes}:{countdown.seconds}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

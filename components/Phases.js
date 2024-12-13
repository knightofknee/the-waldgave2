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
  let diffTime = targetDate - now;
  if (diffTime < 0) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  // Calculate years, months, days
  let years = targetDate.getFullYear() - now.getFullYear();
  let months = targetDate.getMonth() - now.getMonth();
  let days = targetDate.getDate() - now.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = (targetDate.getMonth() === 0) ? 11 : targetDate.getMonth() - 1;
    const prevMonthYear = (prevMonth === 11) ? targetDate.getFullYear() - 1 : targetDate.getFullYear();
    const daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate();
    days = daysInPrevMonth - now.getDate() + targetDate.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Create a "intermediate" date by adding the Y, M, D difference to now
  const intermediateDate = new Date(now);
  intermediateDate.setFullYear(intermediateDate.getFullYear() + years);
  intermediateDate.setMonth(intermediateDate.getMonth() + months);
  intermediateDate.setDate(intermediateDate.getDate() + days);

  // Now find the leftover time for hours, minutes, seconds
  let leftoverDiff = targetDate - intermediateDate;
  if (leftoverDiff < 0) leftoverDiff = 0; // just in case

  let totalSeconds = Math.floor(leftoverDiff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

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

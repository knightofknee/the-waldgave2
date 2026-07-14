import React, { useEffect, useState } from 'react';

const phases = [
  { name: 'Ideation', isActive: false },
  { name: 'Refinement', isActive: true },
  { name: 'Secret Invasion', isActive: false },
  { name: 'Shock and Awe Campaign', isActive: false },
];

const CST_OFFSET_HOURS = 6;
function toCST(date) {
  return new Date(date.getTime() - CST_OFFSET_HOURS * 3600 * 1000);
}

// Target date: midnight CST on 2026-08-29 corresponds to 2026-08-29T06:00:00Z
// You changed it to 05:00:00Z for your small adjustment, so we'll keep that:
const originalTargetDate = new Date('2026-08-29T05:00:00Z');
const targetDate = toCST(originalTargetDate);

function calculateCountdown() {
  const nowUTC = new Date();
  const nowCST = toCST(nowUTC);

  if (nowCST >= targetDate) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let current = new Date(nowCST.getTime());

  let years = 0;
  while (true) {
    const testYear = new Date(current);
    testYear.setFullYear(testYear.getFullYear() + 1);
    if (testYear > targetDate) break;
    current = testYear;
    years++;
  }

  let months = 0;
  while (true) {
    const testMonth = new Date(current);
    testMonth.setMonth(testMonth.getMonth() + 1);
    if (testMonth > targetDate) break;
    current = testMonth;
    months++;
  }

  let days = 0;
  while (true) {
    const testDay = new Date(current);
    testDay.setDate(testDay.getDate() + 1);
    if (testDay > targetDate) break;
    current = testDay;
    days++;
  }

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

  const y = String(countdown.years);
  const M = String(countdown.months);
  const d = String(countdown.days);
  // Pad hours, minutes, and seconds to always be two digits
  const H = String(countdown.hours).padStart(2, '0');
  const m = String(countdown.minutes).padStart(2, '0');
  const s = String(countdown.seconds).padStart(2, '0');

  const uiFont = "'Instrument Sans', 'Avenir', Helvetica, Arial, sans-serif";

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      padding: '10px'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '8px'
      }}>
        {phases.map(phase => {
          const activeStyle = phase.isActive
            ? {
                backgroundColor: 'rgb(235, 215, 235)',
                border: '2px solid rgb(150, 80, 150)',
                color: 'rgb(40, 40, 40)',
                fontWeight: 600
              }
            : {
                backgroundColor: 'rgb(245, 235, 245)',
                border: '1px solid rgb(200, 200, 200)',
                color: 'rgb(120, 120, 120)'
              };

          return (
            <div
              key={phase.name}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontFamily: uiFont,
                fontSize: '0.85rem',
                letterSpacing: '0.02em',
                ...activeStyle,
                cursor: 'default'
              }}
            >
              {phase.name}
            </div>
          );
        })}
      </div>
      <div
        style={{
          color: 'rgb(40, 40, 40)',
          fontSize: '0.85em',
          fontFamily: uiFont,
          fontVariantNumeric: 'tabular-nums', // steady digits, no per-second jitter
          whiteSpace: 'nowrap'
        }}
      >
        {y}:{M}:{d}:{H}:{m}:{s}
      </div>
    </div>
  );
}

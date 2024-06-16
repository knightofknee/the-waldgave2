export default function formatTimeUntilNextPost(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const hour = date.getHours();
  let timeOfDay;
  if (hour < 6) {
    timeOfDay = 'night';
  } else if (hour < 12) {
    timeOfDay = 'morning';
  } else if (hour < 18) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }

  return `${dayOfWeek} ${timeOfDay}`;
}

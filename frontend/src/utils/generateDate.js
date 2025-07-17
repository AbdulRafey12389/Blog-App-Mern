function formatCreatedAt(isoString) {
  const date = new Date(isoString);
  const day = date.getDate(); // day of month
  const month = date.toLocaleString('default', { month: 'long' }); // full month name
  const year = date.getFullYear(); // year

  return `${day}, ${month}, ${year}`;
}
export default formatCreatedAt;

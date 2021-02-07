export const dateToIso8601String = (dateString) => dateString
  .split('/')
  .reverse()
  .join('-');

export const timestampToDateString = (timestamp) => new Date(timestamp)
  .toISOString()
  .split('T')[0]
  .split('-')
  .reverse()
  .join('/');

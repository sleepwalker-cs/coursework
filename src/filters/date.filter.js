export default function dateFilter(value, format = 'date') {
  const options = {}
  if (format.includes('date')) {
    options.day = 'numeric'
    options.month = 'numeric'
    options.year = 'numeric'
  }
  if (format.includes('time')) {
    options.hour = 'numeric'
    options.minute = 'numeric'
    options.second = 'numeric'
  }
  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}

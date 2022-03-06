const moment = require('moment');
let date = moment().startOf('day').fromNow();
let date2 = moment().startOf('hour').fromNow();

// default messages shown in index
const messages = [
  {
    title: 'new message',
    description: 'message 1',
    username: 'Haresh',
    date: date2,
  },
  {
    title: 'older message',
    description:
      'older message',
    username: 'aditya',
    date: date,
  },
];

module.exports = messages;
const mongoose = require('mongoose');

const User = require('./User.js')
const Ticket = require('./Ticket.js');
const Event = require('./Event.js');

module.exports = {User, Ticket, Event}

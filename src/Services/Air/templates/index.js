const createReservation = require('./AIR_CREATE_RESERVATION_REQUEST.handlebars');
const exchange = require('./AIR_EXCHANGE.handlebars');
const exchangeQuote = require('./AIR_EXCHANGE_QUOTE.handlebars');
const fareRules = require('./AIR_FARE_RULES_REQUEST.handlebars');
const flightTimeTable = require('./FLIGHT_TIME_TABLE_REQUEST.handlebars');
const flightInformation = require('./AIR_FLIGHT_INFORMATION_REQUEST.handlebars');
const lowFareSearch = require('./AIR_LOW_FARE_SEARCH_REQUEST.handlebars');
const retrieveLowFareSearch = require('./AIR_RETRIEVE_LOW_FARE_SEARCH_REQUEST.handlebars');
const price = require('./AIR_PRICE_REQ.handlebars');
const ticket = require('./AIR_TICKET_REQUEST.handlebars');
const cancel = require('./AirCancel.handlebars');
const retrieveDocument = require('./AirRetrieveDocument.handlebars');
const voidDocument = require('./AirVoidDocument.handlebars');
const gdsQueuePlace = require('./GDS_QUEUE_PLACE.handlebars');
const universalRecordCancelUr = require('./UNIVERSAL_RECORD_CANCEL_UR.handlebars');
const universalRecordFoid = require('./UNIVERSAL_RECORD_FOID.handlebars');
const universalRecordImport = require('./UNIVERSAL_RECORD_IMPORT_REQUEST.handlebars');
const universalRecordRetrieve = require('./UNIVERSAL_RECORD_RETRIEVE_REQUEST.handlebars');
const availability = require('./AIR_AVAILABILTIY_REQUEST.handlebars');
const airFareDisplay = require('./AIR_FARE_DISPLAY_REQUEST.handlebar');

module.exports = {
  createReservation,
  exchange,
  exchangeQuote,
  fareRules,
  flightTimeTable,
  flightInformation,
  lowFareSearch,
  retrieveLowFareSearch,
  price,
  ticket,
  cancel,
  retrieveDocument,
  voidDocument,
  gdsQueuePlace,
  universalRecordCancelUr,
  universalRecordFoid,
  universalRecordImport,
  universalRecordRetrieve,
  availability,
  airFareDisplay,
};

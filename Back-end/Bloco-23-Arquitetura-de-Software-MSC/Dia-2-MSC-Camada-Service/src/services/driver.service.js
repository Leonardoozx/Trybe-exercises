const { travelModel } = require('../models');

const WAITING_DRIVER = 1;
// const DRIVER_ON_THE_WAY = 2;
// const TRAVEL_IN_PROGRESS = 3;
// const TRAVEL_FINISHED = 4;

const getWaitingDriverTravels = async () => {
  const [result] = await travelDB.findAllByStatus(WAITING_DRIVER);
  return { type: null, message: result }; 
};

module.exports = {
  getWaitingDriverTravels,
};
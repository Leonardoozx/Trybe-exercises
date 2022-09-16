const { addRequestTravelSchema } = require('./schemas');

const validateRequestTravelSchema = (passengerId, startingAddress, endingAddress, waypoints) => {
  const { error } = addRequestTravelSchema
    .validate({ passengerId, startingAddress, endingAddress, waypoints });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateRequestTravelSchema,
};
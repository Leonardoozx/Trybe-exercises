const express = require('express');
const { travelModel, passengerModel, waypointModel } = require('./models');
const { passengerService, driverService } = require('./services');

const app = express();

app.use(express.json());

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const isPassengerExists = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  if (passenger) return true;
  return false;
};

const saveWaypoints = (waypoints, travelId) => {
  if (waypoints && waypoints.length > 0) {
    return waypoints.map(async (value) => {
      await waypointModel.insert({
        address: value.address,
        stopOrder: value.stopOrder,
        travelId,
      });
    });
  }

  return [];
};

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const travel = await passengerService.requestTravel(
    passengerId, 
    startingAddress, 
    endingAddress, 
    waypoints,
  );
  
  res.status(201).json(travel);
});

app.get('/drivers/open/travels', async (_req, res) => {
  const result = await driverService.getWaitingDriverTravels();
  res.status(200).json(result);
});

app.put('/drivers/:driverId/travels/:travelId/assign', async (req, res) => {
  const { travelId, driverId } = req.params;

  await travelModel.updateById(travelId, { driverId, travelStatusId: DRIVER_ON_THE_WAY });
  const travel = await travelModel.findById(travelId);

  res.status(200).json(travel);
});

app.put('/drivers/:driverId/travels/:travelId/start', async (req, res) => {
  const { travelId, driverId } = req.params;
  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_IN_PROGRESS });
  const result = await travelModel.findById(travelId);
  res.status(200).json(result);
});

app.put('/drivers/:driverId/travels/:travelId/end', async (req, res) => {
  const { travelId, driverId } = req.params;
  await travelModel.updateById(travelId, { driverId, travelStatusId: TRAVEL_FINISHED });
  const result = await travelModel.findById(travelId);
  res.status(200).json(result);
});

module.exports = app;

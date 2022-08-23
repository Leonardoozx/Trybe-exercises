const express = require('express');

const app = express();

app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities', (_req, res) => res.status(200).json({ activities }));

app.get('/myActivities/:id', ({ params }, res) => {
  const newActivity = { ...activities[ Number(params.id) - 1 ] };
  res.status(200).json({ newActivity });
});

app.get('/filter/myActivities', ({ query }, res) => {
  const { status } = query;
  let filteredArr;

  if (status) filteredArr = activities.filter((x) => x.status.toLowerCase().includes(status.toLowerCase()));
  res.status(200).json({ filteredActivities: filteredArr })
});

app.get('/search/myActivities', ({ query: { q } }, res) => {
  let searchedInfo;
  if (q) {
    searchedInfo = activities.filter(({ description }) => description.toLowerCase().includes(q.toLowerCase()));
  }
  res.status(200).json({ searchedInfo });
});

module.exports = app;
const { Meal } = require('../models');

const getAll = () => Meal.getAll();

const getById = (id) => Meal.getById(id);

module.exports = {
  getAll,
  getById,
};

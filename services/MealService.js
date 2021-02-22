const { Meal } = require('../models');

const getAll = () => Meal.getAll();

const getById = (id) => Meal.getById(id);

const postMeal = (meal) => {
  return Meal.postMeal(meal);
}

module.exports = {
  getAll,
  getById,
  postMeal,
};

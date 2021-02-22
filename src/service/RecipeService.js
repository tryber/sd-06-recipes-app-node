const Recipe = require('../model/Recipe');

const getAll = () => Recipe.getAll();
const findById = (id) => Recipe.findById(id);

module.exports = { getAll, findById };
const validateRecipe = (req, res, next) => {
  const { strMeal, strCategory, strArea, strInstructions, strTags } = req.body;

  console.log(strMeal);

  if (!strMeal) {
    return res.status(400).json({ message: 'O campo "strMeal" é obrigatório' });
  }

  if (strMeal.length < 3) {
    return res
      .status(400)
      .json({ message: 'O campo "strMeal" deve ter pelo menos 3 caracteres' });
  }

  if (!strCategory) {
    return res
      .status(400)
      .json({ message: 'O campo "strCategory" é obrigatório' });
  }
  if (strCategory.length < 3) {
    return res.status(400).json({
      message: 'O campo "strCategory" deve ter pelo menos 3 caracteres',
    });
  }

  if (!strArea) {
    return res.status(400).json({ message: 'O campo "strArea" é obrigatório' });
  }

  if (strArea.length < 3) {
    return res.status(400).json({
      message: 'O campo "strArea" deve ter pelo menos 3 caracteres',
    });
  }

  if (!strInstructions) {
    return res
      .status(400)
      .json({ message: 'O campo "strInstructions" é obrigatório' });
  }

  if (strInstructions.split(' ').length < 10) {
    return res.status(400).json({
      message: 'O "strInstruction" deve ter pelo menos 10 palavras',
    });
  }

  if (!strTags) {
    return res.status(400).json({ message: 'O campo "strTags" é obrigatório' });
  }

  if (strTags.split(',').length < 1) {
    return res.status(400).json({
      message: 'O campo "strTags" deve ter pelo menos 1 valor',
    });
  }

  console.log('chegou no next');
  next();
};

module.exports = validateRecipe;

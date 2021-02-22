module.exports = (req, res, next) => {
    const { strMeal, strCategory, strArea, strInstructions, strTags } = req.body;

    if (!strMeal || strMeal.length === 0) return res.status(400).send({ message: 'O campo "strMeal" é obrigatório' });
    if (strMeal.length < 3) return res.status(400).send({ message: 'O campo "strMeal" deve ter pelo menos 3 caracteres' });

    if (!strCategory || strCategory.length === 0) {
      return res.status(400).send({ message: 'O campo "strCategory" é obrigatório' });
    }
    if (strCategory < 3) return res.status(400).send({
      message: 'O campo "strCategory" deve ter pelo menos 3 caracteres'
    });

    if (!strArea || strArea.length === 0) return res.status(400).send({ message: 'O campo "strArea" é obrigatório' });
    if (strArea.length < 3) return res.status(400).send({
      message: 'O campo "strArea" deve ter pelo menos 3 caracteres'
    });

    if (!strInstructions || strInstructions.length === 0) {
      return res.status(400).send({ message: 'O campo "strInstructions" é obrigatório' });
    }
    if (strInstructions) {
      const instArray = strInstructions.split(' ');
      if (instArray.length < 10) return res.status(400).send({
        message: 'O campo "strInstructions" deve ter pelo menos 10 palavras'
      });
    }

    if (!strTags && strTags !== '') {
      return res.status(400).send({ message: 'O campo "strTags" é obrigatório' });
    }
    if (strTags === '') {
      return res.status(400).send({
        message: 'O campo "strTags" deve ter pelo menos 1 valor'
      });
    }

    next();
  };
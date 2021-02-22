module.exports = (req, res, next) => {
    const { body } = req;

    if (!body.strMeal || body.strMeal.length === 0) return res.status(400).send({ message: 'O campo "strMeal" é obrigatório' });
    if (body.strMeal.length < 3) return res.status(400).send({ message: 'O campo "strMeal" deve ter pelo menos 3 caracteres' });

    if (!body.strCategory || body.strCategory.length === 0) {
      return res.status(400).send({ message: 'O campo "strCategory" é obrigatório' });
    }
    if (body.strCategory < 3) return res.status(400).send({
      message: 'O campo "strCategory" deve ter pelo menos 3 caracteres'
    });

    if (!body.strArea || body.strArea.length === 0) return res.status(400).send({ message: 'O campo "strArea" é obrigatório' });
    if (body.strArea.length < 3) return res.status(400).send({
      message: 'O campo "strArea" deve ter pelo menos 3 caracteres'
    });

    if (!body.strInstructions || body.strInstructions.length === 0) {
      return res.status(400).send({ message: 'O campo "strInstructions" é obrigatório' });
    }
    if (body.strInstructions) {
      const instArray = body.strInstructions.split(' ');
      if (instArray.length < 10) return res.status(400).send({
        message: 'O campo "strInstructions" deve ter pelo menos 10 palavras'
      });
    }

    if (!body.strTags && body.strTags !== '') {
      return res.status(400).send({ message: 'O campo "strTags" é obrigatório' });
    }
    if (body.strTags === '') {
      return res.status(400).send({
        message: 'O campo "strTags" deve ter pelo menos 1 valor'
      });
    }

    next();
  };
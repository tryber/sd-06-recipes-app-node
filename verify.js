const verifyMeal = (request, response, next) => {
  const { strMeal } = request.body;
  if (strMeal.length < 3) return response.status(400).json({ message: 'O campo "strMeal" deve ter pelo menos 3 caracteres' });
}
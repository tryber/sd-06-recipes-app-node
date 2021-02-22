const validationExist = (parameter) => {
  const validation = (parameter !== undefined && parameter !== null)
  return validation
}

const validationLength = (str) => {
  const validation = str.length > 3
    return validation
}

const validationWords = (text) => {
  const arrayOfWords = text.split(' ');
  const validation = arrayOfWords.length > 10
  return validation
}

const validationTags = (tags) => {
  const arrayOfWords = tags.split(',');
  const validation = arrayOfWords.length >= 1
  return validation
}

 
module.exports = {
  validationExist,
  validationLength,
  validationWords,
  validationTags
};
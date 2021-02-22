# Recipes API

Exercício em grupo para prática de Node, Express e Mongodb

## Sobre o exercício

Anteriormente, vocês fizeram uma aplicação frontend que consumia dados de uma API externa do site https://www.themealdb.com/. Agora vocês vão criar uma cópia dessa API usando como ferramentas as tecnologias de backend que aprendemos até agora.

* Node.js
* Express
* Mongodb

## Antes de começar

Importe as coleções do banco de dados, usando os comandos abaixo

```bash
mongoimport --db mealDB --collection categories database/categories.json --drop
mongoimport --db mealDB --collection recipes database/recipes.json --drop
```

## Desafios

### 1 - Crie o endpoint `GET /recipes`



* O endpoint deve retornar um array com todas as receitas cadastradas. Devendo retornar o status 200, com o seguinte corpo:

```json
{"idMeal":"52874","strMeal":"Beef and Mustard Pie","strArea":"British","strCategory":"Beef","strInstructions":"Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside.","strTags":"Meat,Pie"}
{"idMeal":"52878","strMeal":"Beef and Oyster pie","strArea":"British","strCategory":"Beef","strInstructions":"Season the beef cubes with salt and black pepper. Heat a tablespoon of oil in the frying pan and fry the meat over a high heat. Do this in three batches so that you don’t overcrowd the pan, transferring the meat to a large flameproof casserole dish once it is browned all over. Add extra oil if the pan seems dry.\r\nIn the same pan, add another tablespoon of oil and cook the shallots for 4-5 minutes, then add the garlic and fry for 30 seconds. Add the bacon and fry until slightly browned. Transfer the onion and bacon mixture to the casserole dish and add the herbs.\r\nPreheat the oven to 180C/350F/Gas 4.\r\nPour the stout into the frying pan and bring to the boil, stirring to lift any stuck-on browned bits from the bottom of the pan. Pour the stout over the beef in the casserole dish and add the stock. Cover the casserole and place it in the oven for 1½-2 hours, or until the beef is tender and the sauce is reduced.\r\nSkim off any surface fat, taste and add salt and pepper if necessary, then stir in the cornflour paste. Put the casserole dish on the hob – don’t forget that it will be hot – and simmer for 1-2 minutes, stirring, until thickened. Leave to cool.\r\nIncrease the oven to 200C/400F/Gas 6. To make the pastry, put the flour and salt in a very large bowl. Grate the butter and stir it into the flour in three batches. Gradually add 325ml/11fl oz cold water – you may not need it all – and stir with a round-bladed knife until the mixture just comes together. Knead the pastry lightly into a ball on a lightly floured surface and set aside 250g/9oz for the pie lid.\r\nRoll the rest of the pastry out until about 2cm/¾in larger than the dish you’re using. Line the dish with the pastry then pile in the filling, tucking the oysters in as well. Brush the edge of the pastry with beaten egg.\r\nRoll the remaining pastry until slightly larger than your dish and gently lift over the filling, pressing the edges firmly to seal, then trim with a sharp knife. Brush with beaten egg to glaze. Put the dish on a baking tray and bake for 25-30 minutes, or until the pastry is golden-brown and the filling is bubbling.","strTags":"Pie"}
{"idMeal":"52997","strMeal":"Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber","strArea":"Vietnamese","strCategory":"Beef","strInstructions":"Add'l ingredients: mayonnaise, siracha\r\n\r\n1\r\n\r\nPlace rice in a fine-mesh sieve and rinse until water runs clear. Add to a small pot with 1 cup water (2 cups for 4 servings) and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat for at least 10 minutes or until ready to serve.\r\n\r\n2\r\n\r\nMeanwhile, wash and dry all produce. Peel and finely chop garlic. Zest and quarter lime (for 4 servings, zest 1 lime and quarter both). Trim and halve cucumber lengthwise; thinly slice crosswise into half-moons. Halve, peel, and medium dice onion. Trim, peel, and grate carrot.\r\n\r\n3\r\n\r\nIn a medium bowl, combine cucumber, juice from half the lime, ¼ tsp sugar (½ tsp for 4 servings), and a pinch of salt. In a small bowl, combine mayonnaise, a pinch of garlic, a squeeze of lime juice, and as much sriracha as you’d like. Season with salt and pepper.\r\n\r\n4\r\n\r\nHeat a drizzle of oil in a large pan over medium-high heat. Add onion and cook, stirring, until softened, 4-5 minutes. Add beef, remaining garlic, and 2 tsp sugar (4 tsp for 4 servings). Cook, breaking up meat into pieces, until beef is browned and cooked through, 4-5 minutes. Stir in soy sauce. Turn off heat; taste and season with salt and pepper.\r\n\r\n5\r\n\r\nFluff rice with a fork; stir in lime zest and 1 TBSP butter. Divide rice between bowls. Arrange beef, grated carrot, and pickled cucumber on top. Top with a squeeze of lime juice. Drizzle with sriracha mayo.","strTags":null}
{"idMeal":"52904","strMeal":"Beef Bourguignon","strArea":"French","strCategory":"Beef","strInstructions":"Heat a large casserole pan and add 1 tbsp goose fat. Season the beef and fry until golden brown, about 3-5 mins, then turn over and fry the other side until the meat is browned all over, adding more fat if necessary. Do this in 2-3 batches, transferring the meat to a colander set over a bowl when browned.\r\nIn the same pan, fry the bacon, shallots or pearl onions, mushrooms, garlic and bouquet garni until lightly browned. Mix in the tomato purée and cook for a few mins, stirring into the mixture. This enriches the bourguignon and makes a great base for the stew. Then return the beef and any drained juices to the pan and stir through.\r\nPour over the wine and about 100ml water so the meat bobs up from the liquid, but isn’t completely covered. Bring to the boil and use a spoon to scrape the caramelised cooking juices from the bottom of the pan – this will give the stew more flavour.\r\nHeat oven to 150C/fan 130C/gas 2. Make a cartouche: tear off a square of foil slightly larger than the casserole, arrange it in the pan so it covers the top of the stew and trim away any excess foil. Then cook for 3 hrs. If the sauce looks watery, remove the beef and veg with a slotted spoon, and set aside. Cook the sauce over a high heat for a few mins until the sauce has thickened a little, then return the beef and vegetables to the pan.\r\nTo make the celeriac mash, peel the celeriac and cut into cubes. Heat the olive oil in a large frying pan. Tip in the celeriac and fry for 5 mins until it turns golden. Season well with salt and pepper. Stir in the rosemary, thyme, bay and cardamom pods, then pour over 200ml water, enough to nearly cover the celeriac. Turn the heat to low, partially cover the pan and leave to simmer for 25-30 mins.\r\nAfter 25-30 mins, the celeriac should be soft and most of the water will have evaporated. Drain away any remaining water, then remove the herb sprigs, bay and cardamom pods. Lightly crush with a potato masher, then finish with a glug of olive oil and season to taste. Spoon the beef bourguignon into serving bowls and place a large spoonful of the celeriac mash on top. Garnish with one of the bay leaves, if you like.","strTags":null}
{"idMeal":"52812","strMeal":"Beef Brisket Pot Roast","strArea":"American","strCategory":"Beef","strInstructions":"1 Prepare the brisket for cooking: On one side of the brisket there should be a layer of fat, which you want. If there are any large chunks of fat, cut them off and discard them. Large pieces of fat will not be able to render out completely.\r\nUsing a sharp knife, score the fat in parallel lines, about 3/4-inch apart. Slice through the fat, not the beef. Repeat in the opposite direction to make a cross-hatch pattern.\r\nSalt the brisket well and let it sit at room temperature for 30 minutes.\r\n \r\n2 Sear the brisket: You'll need an oven-proof, thick-bottomed pot with a cover, or Dutch oven, that is just wide enough to hold the brisket roast with a little room for the onions.\r\nPat the brisket dry and place it, fatty side down, into the pot and place it on medium high heat. Cook for 5-8 minutes, lightly sizzling, until the fat side is nicely browned. (If the roast seems to be cooking too fast, turn the heat down to medium. You want a steady sizzle, not a raging sear.)\r\nTurn the brisket over and cook for a few minutes more to brown the other side.\r\n\r\n3 Sauté the onions and garlic: When the brisket has browned, remove it from the pot and set aside. There should be a couple tablespoons of fat rendered in the pot, if not, add some olive oil.\r\nAdd the chopped onions and increase the heat to high. Sprinkle a little salt on the onions. Sauté, stirring often, until the onions are lightly browned, 5-8 minutes. Stir in the garlic and cook 1-2 more minutes.\r\n \r\n4 Return brisket to pot, add herbs, stock, bring to simmer, cover, cook in oven: Preheat the oven to 300°F. Use kitchen twine to tie together the bay leaves, rosemary and thyme.\r\nMove the onions and garlic to the sides of the pot and nestle the brisket inside. Add the beef stock and the tied-up herbs. Bring the stock to a boil on the stovetop.\r\nCover the pot, place the pot in the 300°F oven and cook for 3 hours. Carefully flip the brisket every hour so it cooks evenly.\r\n \r\n5 Add carrots, continue to cook: After 3 hours, add the carrots. Cover the pot and cook for 1 hour more, or until the carrots are cooked through and the brisket is falling-apart tender.\r\n6 Remove brisket to cutting board, tent with foil: When the brisket is falling-apart tender, take the pot out of the oven and remove the brisket to a cutting board. Cover it with foil. Pull out and discard the herbs.\r\n7 Make sauce (optional): At this point you have two options. You can serve as is, or you can make a sauce with the drippings and some of the onions. If you serve as is, skip this step.\r\nTo make a sauce, remove the carrots and half of the onions, set aside and cover them with foil. Pour the ingredients that are remaining into the pot into a blender, and purée until smooth. If you want, add 1 tablespoon of mustard to the mix. Put into a small pot and keep warm.\r\n8 Slice the meat across the grain: Notice the lines of the muscle fibers of the roast. This is the \"grain\" of the meat. Slice the meat perpendicular to these lines, or across the grain (cutting this way further tenderizes the meat), in 1/4-inch to 1/2-inch slices.\r\nServe with the onions, carrots and gravy. Serve with mashed, roasted or boiled potatoes, egg noodles or polenta.","strTags":"Meat"}
{"idMeal":"52873","strMeal":"Beef Dumpling Stew","strArea":"British","strCategory":"Beef","strInstructions":"Preheat the oven to 180C/350F/Gas 4.\r\n\r\nFor the beef stew, heat the oil and butter in an ovenproof casserole and fry the beef until browned on all sides.\r\n\r\nSprinkle over the flour and cook for a further 2-3 minutes.\r\n\r\nAdd the garlic and all the vegetables and fry for 1-2 minutes.\r\n\r\nStir in the wine, stock and herbs, then add the Worcestershire sauce and balsamic vinegar, to taste. Season with salt and freshly ground black pepper.\r\n\r\nCover with a lid, transfer to the oven and cook for about two hours, or until the meat is tender.\r\n\r\nFor the dumplings, sift the flour, baking powder and salt into a bowl.\r\nAdd the suet and enough water to form a thick dough.\r\n\r\nWith floured hands, roll spoonfuls of the dough into small balls.\r\n\r\nAfter two hours, remove the lid from the stew and place the balls on top of the stew. Cover, return to the oven and cook for a further 20 minutes, or until the dumplings have swollen and are tender. (If you prefer your dumplings with a golden top, leave the lid off when returning to the oven.)\r\n\r\nTo serve, place a spoonful of mashed potato onto each of four serving plates and top with the stew and dumplings. Sprinkle with chopped parsley.","strTags":"Stew,Baking"}
```

Caso não exista nenhuma receita cadastrada o endpoint deve retornar um array vazio e o status 200.

### 2 - Crie o endpoint `GET /recipes/:id`

* O endpoint deve retornar uma receita baseado no id da rota. Devendo retornar o status 200 ao fazer uma requisição /recipes/1, com o seguinte corpo:

```js
{
  "_id": ObjectId("6032d64b89aed8e9a797d376"),
  "strMeal": "Spicy Arrabiata Penne",
  "strCategory": "Vegetarian",
  "strArea": "Italian",
  "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boilingwater, then add the pasta. Cook according to the package instructions, about 9 minutes\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oilstarts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Addthe chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste.Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes andmore basil and serve warm.",
  "strTags": "Pasta,Curry"
}
```


* Caso não seja encontrado uma receita baseado no id da rota, o endpoint deve retornar o status 404 com o seguinte corpo:

```js
{
  "message": "Receita não encontrada"
}
```

### 3 - Crie o endpoint `POST /recipes`

* O endpoint deve ser capaz de adicionar uma nova receita na coleção recipes no banco

* O corpo da requisição deverá ter o seguinte formato:

```js
{
  "strMeal": "Spicy Arrabiata Penne",
  "strCategory": "Vegetarian",
  "strArea": "Italian",
  "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boilingwater, then add the pasta. Cook according to the package instructions, about 9 minutes\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oilstarts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Addthe chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste.Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes andmore basil and serve warm.",
  "strTags": "Pasta,Curry"
}
```

Faça as seguintes validações:

* `strMeal` deve estar preenchido e deve ter no mínimo 3 caracteres.
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
  ```js
  {
    "message": "O campo \"strMeal\" é obrigatório"
  }
  ```

  * Caso o campo não tenha pelo menos 3 caracteres retorne um código de status 400, com o seguinte corpo:
  ```js
  {
    "message": "O campo \"strMeal\" deve ter pelo menos 3 caracteres"
  }
  ```

* `strCategory` deve estar preenchido e deve ter no mínimo 3 caracteres.
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strCategory\" é obrigatório"
    }
    ```


  * Caso o campo não tenha pelo menos 3 caracteres retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo  \"strCategory\" deve ter pelo menos 3 caracteres"
    }
    ```

* `strArea` deve estar preenchido e deve ter no mínimo 3 caracteres.
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strArea\" é obrigatório"
    }
    ```

  * Caso o campo não tenha pelo menos 3 caracteres retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strArea\" deve ter pelo menos 3 caracteres"
    }
    ```

* `strInstructions` deve estar preenchido e deve ter no mínimo 10 palavras.
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strInstruction\" é obrigatório"
    }
    ```

  * Caso o campo não tenha pelo menos 10 palavras retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O \"strInstruction\" deve ter pelo menos 10 palavras"
    }
    ```

* `strTags` deve estar preenchido e deve ter no mínimo 1 tag (considere que a cada vírgula presente no código é uma nova tag).
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strTags\" é obrigatório"
    }
    ```

  * Caso o campo não tenha pelo menos 1 valor retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strTags\" deve ter pelo menos 1 valor"
    }
    ```


### 4 - Crie o endpoint `PUT /recipes/:id`

* O endpoint deve ser capaz de editar uma receita baseado no id da rota, sem alterar o id registrado.

* O corpo da requisição deverá ter o seguinte formato:

```js
{
  "strMeal": "Spicy Arrabiata Penne",
  "strCategory": "Vegetarian",
  "strArea": "Italian",
  "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boilingwater, then add the pasta. Cook according to the package instructions, about 9 minutes\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oilstarts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Addthe chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste.Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes andmore basil and serve warm.",
  "strTags": "Pasta,Curry"
}
```

Faça as seguintes validações:

* `strMeal` deve estar preenchido e deve ter no mínimo 3 caracteres.
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
  ```js
  {
    "message": "O campo \"strMeal\" é obrigatório"
  }
  ```

  * Caso o campo não tenha pelo menos 3 caracteres retorne um código de status 400, com o seguinte corpo:
  ```js
  {
    "message": "O campo \"strMeal\" deve ter pelo menos 3 caracteres"
  }
  ```

* `strCategory` deve estar preenchido e deve ter no mínimo 3 caracteres.
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strCategory\" é obrigatório"
    }
    ```


  * Caso o campo não tenha pelo menos 3 caracteres retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo  \"strCategory\" deve ter pelo menos 3 caracteres"
    }
    ```

* `strArea` deve estar preenchido e deve ter no mínimo 3 caracteres.
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strArea\" é obrigatório"
    }
    ```

  * Caso o campo não tenha pelo menos 3 caracteres retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strArea\" deve ter pelo menos 3 caracteres"
    }
    ```

* `strInstructions` deve estar preenchido e deve ter no mínimo 10 palavras.
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strInstruction\" é obrigatório"
    }
    ```

  * Caso o campo não tenha pelo menos 10 palavras retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O \"strInstruction\" deve ter pelo menos 10 palavras"
    }
    ```

* `strTags` deve estar preenchido e deve ter no mínimo 1 tag (considere que a cada vírgula presente no código é uma nova tag).
  * Caso o campo não seja passado ou esteja vazio retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strTags\" é obrigatório"
    }
    ```

  * Caso o campo não tenha pelo menos 1 valor retorne um código de status 400, com o seguinte corpo:
    ```js
    {
      "message": "O campo \"strTags\" deve ter pelo menos 1 valor"
    }
    ```

### 5 - Crie o endpoint `DELETE /recipes/:id`

* O endpoint deve deletar uma receita baseado no id da rota. Devendo retornar o status 200, com o seguinte corpo:

```js
{ "message": "Receita deletada com sucesso" }
```

## Bônus

### 6 - Crie o endpoint `GET /recipes/search`. 

Este endpoint pode receber como **query string** os parâmetros `cat`, `area` ou `q`. Abaixo está um exemplo de como utilizar cada um dos parâmetros.

* `?cat=Beef`, deve retornar todos as receitas onde o atributo `strCategory` seja igual a `Beef`.
* `?area=Mexican`, deve retornar todos as receitas onde o atributo `strArea` seja igual a `Mexican`.
* `?q=Big Mac`, deve retornar todos as receitas onde o atributo `strMeal` seja igual a `Big MAc`.

### 7 - Faça um CRUD usando a API `The Cocktail DB` como referência criando uma nova coleção `drinks`. Use como referência o documento abaixo para cria a coleção. Aplique validações similares a coleção de receitas.

```js
{
  "idDrink": "11007",
  "strDrink": "Margarita",
  "strTags": "IBA,ContemporaryClassic",
  "strCategory": "Ordinary Drink",
  "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick toit. Take care to moisten only the outer rim and sprinkle the salt on it. The salt shouldpresent to the lips of the imbiber and never mix into the cocktail. Shake the otheringredients with ice, then carefully pour into the glass.",
},
```

export const fakeRecipes: IRecipe[] = [
    {
      name: "Black Bean Enchiladas",
      ingredients: [
        {
          quantity: "1 can",
          name: "black beans"
        },
        {
          quantity: "10",
          name: "tortillas"
        }
      ]
    },
    {
      name: "Baked Falafel Wraps",
      ingredients: [
        {
          quantity: "2 cups",
          name: "dry chickpeas"
        },
        {
          quantity: "1",
          name: "yellow onion"
        }
      ]
    }
  ]

export interface IRecipe {
    name: string
    ingredients: IIngredients[]
}

export interface IIngredients {
    quantity: string
    name: string
}
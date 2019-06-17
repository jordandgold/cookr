export interface IRecipe {
    name: string
    ingredients: IIngredients[]
    author: string
}

export interface IIngredients {
    quantity: string
    name: string
}
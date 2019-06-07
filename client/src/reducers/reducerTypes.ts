export interface IRecipe {
    name: string
    ingredients: IIngredients[]
}

export interface IIngredients {
    quantity: string
    name: string
}
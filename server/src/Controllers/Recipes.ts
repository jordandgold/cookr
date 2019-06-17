import * as express from 'express';
import { IRecipe } from 'Types'
import { recipeModel } from '../Models'

export class RecipesController {
    public path = '/recipes'
    public router = express.Router()
     
      constructor() {
        this.intializeRoutes();
      }

      public intializeRoutes() {
        this.router.get(this.path, this.getAllRecipes);
        this.router.post(this.path, this.createRecipe);
      }

      getAllRecipes = (request: express.Request, response: express.Response) => {
        recipeModel.find().then((recipes: IRecipe[]) => {
            response.send(recipes)
        })
      }

      createRecipe = (request: express.Request, response: express.Response) => {
        const recipe: IRecipe = request.body
        const createdRecipe = new recipeModel(recipe)
        createdRecipe.save().then((savedRecipe: IRecipe) => {
            response.send(savedRecipe)
        })
      }
}
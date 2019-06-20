import * as express from 'express';
import { recipeModel } from '../Models'
import { IController, IRecipe } from '../Types'

export class RecipesController implements IController {
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
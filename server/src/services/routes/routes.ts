import { Request, Response } from "express";
import { fakeRecipes, IRecipe } from "../../mock/mockRecipes"

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("");
    }
  },
  {
    path: "/recipes",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send(fakeRecipes)
    }
  },
  {
    path: "/add-recipe",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const recipe: IRecipe = req.body.recipe
      fakeRecipes.push(recipe)
      res.send(fakeRecipes)
    }
  }
];
// things to go back and pay attention to:
// 1) process.on
// 2) error handling
// 3 read node best practices in https://github.com/i0natan/nodebestpractices

import App from './App';
import { RecipesController }  from './Controllers';
 
const app = new App(
  [
    new RecipesController(),
  ],
  5000,
);
 
app.listen();

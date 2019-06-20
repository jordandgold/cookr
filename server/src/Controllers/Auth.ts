import * as bcrypt from 'bcrypt'
import express from 'express'
import mongoose from 'mongoose'
import { IController, IUser, ILogin } from '../Types'
import { userModel } from '../Models'
import { UserWithThatEmailAlreadyExistsException, WrongCredentialsException } from '../Middleware'

export class AuthController implements IController {
    public path = '/auth'
    public router = express.Router()
    private user = userModel;

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/register`, this.registration);
        this.router.post(`${this.path}/login`, this.loggingIn);
    }

    private registration = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const userData: IUser = request.body;
        console.log(userData);
        
        if (
            await this.user.findOne({ email: userData.email })
        ) {
            next(new UserWithThatEmailAlreadyExistsException(userData.email));
        } else {
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            const user = await this.user.create({
                ...userData,
                password: hashedPassword,
                _id: new mongoose.Types.ObjectId()
            });

            user.password = '';

            response.send(user);
        }
    }

    private loggingIn = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        const logInData: ILogin = request.body;
        const user = await this.user.findOne({ email: logInData.email });
        if (user) {
          const isPasswordMatching = await bcrypt.compare(logInData.password, user.password);
          if (isPasswordMatching) {
            user.password = '';
            response.send(user);
          } else {
            next(new WrongCredentialsException());
          }
        } else {
          next(new WrongCredentialsException());
        }
    }
}
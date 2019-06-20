"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Models_1 = require("../Models");
const Middleware_1 = require("../Middleware");
class AuthController {
    constructor() {
        this.path = '/auth';
        this.router = express_1.default.Router();
        this.user = Models_1.userModel;
        this.registration = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const userData = request.body;
            console.log(userData);
            if (yield this.user.findOne({ email: userData.email })) {
                next(new Middleware_1.UserWithThatEmailAlreadyExistsException(userData.email));
            }
            else {
                const hashedPassword = yield bcrypt.hash(userData.password, 10);
                const user = yield this.user.create(Object.assign({}, userData, { password: hashedPassword, _id: new mongoose_1.default.Types.ObjectId() }));
                user.password = '';
                response.send(user);
            }
        });
        this.loggingIn = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const logInData = request.body;
            const user = yield this.user.findOne({ email: logInData.email });
            if (user) {
                const isPasswordMatching = yield bcrypt.compare(logInData.password, user.password);
                if (isPasswordMatching) {
                    user.password = '';
                    response.send(user);
                }
                else {
                    next(new Middleware_1.WrongCredentialsException());
                }
            }
            else {
                next(new Middleware_1.WrongCredentialsException());
            }
        });
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/register`, this.registration);
        this.router.post(`${this.path}/login`, this.loggingIn);
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=Auth.js.map
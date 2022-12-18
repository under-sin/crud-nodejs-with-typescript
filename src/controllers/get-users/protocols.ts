import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
  Handle(): Promise<HttpResponse<User[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>;
}

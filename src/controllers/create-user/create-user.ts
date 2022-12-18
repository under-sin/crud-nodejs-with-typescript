import validator from "validator";
import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreateUserParams,
  ICreateUserController,
  ICreateUserRepository,
} from "./protocols";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User>> {
    try {
      const requeireFields = ["firstName", "lastName", "email", "password"];

      for (const field of requeireFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return {
            statusCode: 400,
            body: `Field ${field} id required`,
          };
        }
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: "Email is invalid",
        };
      }

      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Please specify a body",
        };
      }

      console.log(httpRequest.body);

      const user = await this.createUserRepository.createUser(httpRequest.body);

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}

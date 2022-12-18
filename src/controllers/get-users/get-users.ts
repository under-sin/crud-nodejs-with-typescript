import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  // injeção de dependência
  constructor(private readonly getUserRepository: IGetUsersRepository) {}

  async Handle() {
    try {
      const users = await this.getUserRepository.getUsers();

      return {
        statusCode: 200,
        body: users, // nesse caso, o body precisa retornar uma lista de users
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}

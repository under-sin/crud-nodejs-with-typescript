import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Anderson",
        lastName: "Vieira",
        email: "andersonvieira@gmail.com",
        password: "12345",
      },
    ];
  }
}

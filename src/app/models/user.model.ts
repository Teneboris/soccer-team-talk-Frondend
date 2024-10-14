import {Role} from "../Enum/role.enum";

export class User{
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  role: Role | undefined;
}

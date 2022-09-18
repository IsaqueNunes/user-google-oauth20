import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser({ email, displayName }: { email; displayName }) {
    const user = await this.usersService.find({ email: email });

    if (user) return user;
    return await this.usersService.create({ username: displayName, email });
  }

  findUser(id: string) {
    return this.usersService.find({ id });
  }
}

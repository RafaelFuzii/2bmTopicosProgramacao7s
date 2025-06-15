
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async singUp(
    createUserDto: CreateUserDto
  ): Promise<{ access_token: string }> {
    return this.usersService.create(createUserDto).then(user => {
      const payload = { sub: user._id, username: user.username, roles: user.role };
      return {
        access_token: this.jwtService.sign(payload),
      };
    });
  }

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findUserByName(username);

    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const payload = { sub: user._id, username: user.username, roles: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { registerDto } from 'src/user/dto/register.dto';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string) {
        console.log("Hello")
        const user = await this.userService.getUserByUsername(username);
        console.log(user.password)

        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const { password, ...result } = user;
        const payload = { sub: user.id, username: user.username }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }

        console.log("Logged In Successfully!");
        return result;

    }
}

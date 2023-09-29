import { Injectable } from '@nestjs/common';
import { registerDto } from 'src/user/dto/register.dto';


@Injectable()
export class AuthService {
    // signUp(re) {
    //     return "Signed Up!"
    // }
    async signUp(registerUserDto: registerDto) {
        const { username, password } = registerUserDto

        // const salt = await bcrypt.genSalt();
    }
}

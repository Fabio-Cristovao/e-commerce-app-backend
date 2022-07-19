import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Users } from '../auth/user.entity';
export declare class AuthService {
    private jwt;
    constructor(usersRepository: Repository<Users>, jwt: JwtService);
    signup(user: Users): Promise<Users>;
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}

import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Users } from '../user.entity';
export declare class AuthService {
    private usersRepository;
    private jwt;
    constructor(usersRepository: Repository<Users>, jwt: JwtService);
    signup(user: Users): Promise<Users>;
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
    }>;
}

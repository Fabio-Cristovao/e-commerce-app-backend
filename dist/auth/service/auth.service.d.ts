import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Users } from '../user.entity';
export declare class AuthService {
    private userRepository;
    private jwt;
    constructor(userRepository: Repository<Users>, jwt: JwtService);
}

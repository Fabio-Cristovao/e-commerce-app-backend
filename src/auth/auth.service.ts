import { Injectable } from '@nestjs/common';
import { User, Product } from '@prisma/client';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'I have signed up' };
  }

  signup() {
    return { msg: 'I have sign in' };
  }
}

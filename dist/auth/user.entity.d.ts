import { CartEntity } from 'src/cart/cart.entity';
import { OrderEntity } from 'src/order/order.entity';
export declare class Users {
    id: number;
    username: string;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    cart: CartEntity[];
    order: OrderEntity;
}

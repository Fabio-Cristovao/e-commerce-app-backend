import { CartEntity } from 'src/cart/cart.entity';
export declare class ProductEntity {
    id: number;
    name: string;
    price: number;
    quantity: string;
    createdAt: string;
    updatedAt: string;
    cart: CartEntity[];
}

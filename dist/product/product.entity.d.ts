import { CartEntity } from 'src/cart/cart.entity';
export declare class ProductEntity {
    id: number;
    price: number;
    quantity: string;
    createdAt: string;
    updatedAt: string;
    cart: CartEntity[];
}

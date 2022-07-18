import { Users } from 'src/auth/user.entity';
import { ProductEntity } from 'src/product/product.entity';
export declare class CartEntity {
    id: number;
    total: string;
    quantity: string;
    item: ProductEntity;
    user: Users;
}

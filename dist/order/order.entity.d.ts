import { Users } from 'src/auth/user.entity';
import { ProductEntity } from 'src/product/product.entity';
export declare class OrderEntity {
    id: number;
    items: ProductEntity[];
    user: Users;
    subTotal: number;
    pending: boolean;
}

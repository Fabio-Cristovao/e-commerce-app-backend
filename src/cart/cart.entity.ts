import { Users } from 'src/auth/user.entity';
import { ProductEntity } from 'src/product/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  total: string;

  @Column()
  quantity: string;

  @ManyToOne((type) => ProductEntity, (order) => order.id)
  @JoinColumn()
  item: ProductEntity;

  @ManyToOne((type) => Users, (user) => user.username)
  @JoinColumn()
  user: Users;
}

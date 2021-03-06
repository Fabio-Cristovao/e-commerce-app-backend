"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const cart_entity_1 = require("../cart/cart.entity");
const order_entity_1 = require("../order/order.entity");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], Users.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => cart_entity_1.CartEntity, (cart) => cart.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Users.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => order_entity_1.OrderEntity, (order) => order.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", order_entity_1.OrderEntity)
], Users.prototype, "order", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;
//# sourceMappingURL=user.entity.js.map
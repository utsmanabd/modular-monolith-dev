/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api-gateway/src/app.module.ts":
/*!********************************************!*\
  !*** ./apps/api-gateway/src/app.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_1 = __webpack_require__(/*! @app/product */ "./libs/product/src/index.ts");
const order_1 = __webpack_require__(/*! @app/order */ "./libs/order/src/index.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [product_1.ProductModule, order_1.OrderModule]
    })
], AppModule);


/***/ }),

/***/ "./libs/order/src/client/contracts/order-client.interface.ts":
/*!*******************************************************************!*\
  !*** ./libs/order/src/client/contracts/order-client.interface.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/order/src/client/dto/create-order.dto.ts":
/*!*******************************************************!*\
  !*** ./libs/order/src/client/dto/create-order.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateOrderDto = void 0;
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;


/***/ }),

/***/ "./libs/order/src/client/dto/order-response.dto.ts":
/*!*********************************************************!*\
  !*** ./libs/order/src/client/dto/order-response.dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderResponseDto = void 0;
class OrderResponseDto {
}
exports.OrderResponseDto = OrderResponseDto;


/***/ }),

/***/ "./libs/order/src/client/index.ts":
/*!****************************************!*\
  !*** ./libs/order/src/client/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./tokens/order.tokens */ "./libs/order/src/client/tokens/order.tokens.ts"), exports);
__exportStar(__webpack_require__(/*! ./contracts/order-client.interface */ "./libs/order/src/client/contracts/order-client.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./dto/create-order.dto */ "./libs/order/src/client/dto/create-order.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./dto/order-response.dto */ "./libs/order/src/client/dto/order-response.dto.ts"), exports);


/***/ }),

/***/ "./libs/order/src/client/tokens/order.tokens.ts":
/*!******************************************************!*\
  !*** ./libs/order/src/client/tokens/order.tokens.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ORDER_CLIENT_TOKEN = void 0;
exports.ORDER_CLIENT_TOKEN = Symbol('ORDER_CLIENT_TOKEN');


/***/ }),

/***/ "./libs/order/src/index.ts":
/*!*********************************!*\
  !*** ./libs/order/src/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./order.module */ "./libs/order/src/order.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./client */ "./libs/order/src/client/index.ts"), exports);


/***/ }),

/***/ "./libs/order/src/internal/controller/order.controller.ts":
/*!****************************************************************!*\
  !*** ./libs/order/src/internal/controller/order.controller.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! ../../client */ "./libs/order/src/client/index.ts");
const order_service_1 = __webpack_require__(/*! ../service/order.service */ "./libs/order/src/internal/service/order.service.ts");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async create(payload) {
        return this.orderService.createOrder(payload);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof client_1.CreateOrderDto !== "undefined" && client_1.CreateOrderDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], OrderController);


/***/ }),

/***/ "./libs/order/src/internal/order-internal.module.ts":
/*!**********************************************************!*\
  !*** ./libs/order/src/internal/order-internal.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderInternalModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_1 = __webpack_require__(/*! @app/product */ "./libs/product/src/index.ts");
const order_controller_1 = __webpack_require__(/*! ./controller/order.controller */ "./libs/order/src/internal/controller/order.controller.ts");
const order_repository_1 = __webpack_require__(/*! ./repository/order.repository */ "./libs/order/src/internal/repository/order.repository.ts");
const order_service_1 = __webpack_require__(/*! ./service/order.service */ "./libs/order/src/internal/service/order.service.ts");
let OrderInternalModule = class OrderInternalModule {
};
exports.OrderInternalModule = OrderInternalModule;
exports.OrderInternalModule = OrderInternalModule = __decorate([
    (0, common_1.Module)({
        imports: [product_1.ProductModule],
        controllers: [order_controller_1.OrderController],
        providers: [order_repository_1.OrderRepository, order_service_1.OrderService],
        exports: [order_service_1.OrderService]
    })
], OrderInternalModule);


/***/ }),

/***/ "./libs/order/src/internal/repository/order.repository.ts":
/*!****************************************************************!*\
  !*** ./libs/order/src/internal/repository/order.repository.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let OrderRepository = class OrderRepository {
    constructor() {
        this.data = new Map();
    }
    save(order) {
        this.data.set(order.id, order);
        return order;
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, common_1.Injectable)()
], OrderRepository);


/***/ }),

/***/ "./libs/order/src/internal/service/order.service.ts":
/*!**********************************************************!*\
  !*** ./libs/order/src/internal/service/order.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const node_crypto_1 = __webpack_require__(/*! node:crypto */ "node:crypto");
const client_1 = __webpack_require__(/*! @app/product/client */ "./libs/product/src/client/index.ts");
const order_repository_1 = __webpack_require__(/*! ../repository/order.repository */ "./libs/order/src/internal/repository/order.repository.ts");
let OrderService = class OrderService {
    constructor(productClient, orderRepository) {
        this.productClient = productClient;
        this.orderRepository = orderRepository;
    }
    async createOrder(payload) {
        const product = await this.productClient.getProductById(payload.productId);
        if (!product) {
            throw new common_1.NotFoundException('Product not found for order creation');
        }
        const order = {
            id: (0, node_crypto_1.randomUUID)(),
            productId: product.id,
            quantity: payload.quantity,
            totalPrice: product.price * payload.quantity
        };
        return this.orderRepository.save(order);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(client_1.PRODUCT_CLIENT_TOKEN)),
    __metadata("design:paramtypes", [typeof (_a = typeof client_1.ProductClient !== "undefined" && client_1.ProductClient) === "function" ? _a : Object, typeof (_b = typeof order_repository_1.OrderRepository !== "undefined" && order_repository_1.OrderRepository) === "function" ? _b : Object])
], OrderService);


/***/ }),

/***/ "./libs/order/src/order.module.ts":
/*!****************************************!*\
  !*** ./libs/order/src/order.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_1 = __webpack_require__(/*! @app/product */ "./libs/product/src/index.ts");
const client_1 = __webpack_require__(/*! ./client */ "./libs/order/src/client/index.ts");
const order_internal_module_1 = __webpack_require__(/*! ./internal/order-internal.module */ "./libs/order/src/internal/order-internal.module.ts");
const order_service_1 = __webpack_require__(/*! ./internal/service/order.service */ "./libs/order/src/internal/service/order.service.ts");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [product_1.ProductModule, order_internal_module_1.OrderInternalModule],
        providers: [
            {
                provide: client_1.ORDER_CLIENT_TOKEN,
                useExisting: order_service_1.OrderService
            }
        ],
        exports: [client_1.ORDER_CLIENT_TOKEN]
    })
], OrderModule);


/***/ }),

/***/ "./libs/product/src/client/contracts/product-client.interface.ts":
/*!***********************************************************************!*\
  !*** ./libs/product/src/client/contracts/product-client.interface.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/product/src/client/dto/create-product.dto.ts":
/*!***********************************************************!*\
  !*** ./libs/product/src/client/dto/create-product.dto.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProductDto = void 0;
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;


/***/ }),

/***/ "./libs/product/src/client/dto/product-response.dto.ts":
/*!*************************************************************!*\
  !*** ./libs/product/src/client/dto/product-response.dto.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductResponseDto = void 0;
class ProductResponseDto {
}
exports.ProductResponseDto = ProductResponseDto;


/***/ }),

/***/ "./libs/product/src/client/index.ts":
/*!******************************************!*\
  !*** ./libs/product/src/client/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./tokens/product.tokens */ "./libs/product/src/client/tokens/product.tokens.ts"), exports);
__exportStar(__webpack_require__(/*! ./contracts/product-client.interface */ "./libs/product/src/client/contracts/product-client.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./dto/create-product.dto */ "./libs/product/src/client/dto/create-product.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./dto/product-response.dto */ "./libs/product/src/client/dto/product-response.dto.ts"), exports);


/***/ }),

/***/ "./libs/product/src/client/tokens/product.tokens.ts":
/*!**********************************************************!*\
  !*** ./libs/product/src/client/tokens/product.tokens.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PRODUCT_CLIENT_TOKEN = void 0;
exports.PRODUCT_CLIENT_TOKEN = Symbol('PRODUCT_CLIENT_TOKEN');


/***/ }),

/***/ "./libs/product/src/index.ts":
/*!***********************************!*\
  !*** ./libs/product/src/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./product.module */ "./libs/product/src/product.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./client */ "./libs/product/src/client/index.ts"), exports);


/***/ }),

/***/ "./libs/product/src/internal/controller/product.controller.ts":
/*!********************************************************************!*\
  !*** ./libs/product/src/internal/controller/product.controller.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! ../../client */ "./libs/product/src/client/index.ts");
const product_service_1 = __webpack_require__(/*! ../service/product.service */ "./libs/product/src/internal/service/product.service.ts");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async create(payload) {
        return this.productService.createProduct(payload);
    }
    async findOne(id) {
        const product = await this.productService.getProductById(id);
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return product;
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof client_1.CreateProductDto !== "undefined" && client_1.CreateProductDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], ProductController);


/***/ }),

/***/ "./libs/product/src/internal/product-internal.module.ts":
/*!**************************************************************!*\
  !*** ./libs/product/src/internal/product-internal.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductInternalModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_controller_1 = __webpack_require__(/*! ./controller/product.controller */ "./libs/product/src/internal/controller/product.controller.ts");
const product_repository_1 = __webpack_require__(/*! ./repository/product.repository */ "./libs/product/src/internal/repository/product.repository.ts");
const product_service_1 = __webpack_require__(/*! ./service/product.service */ "./libs/product/src/internal/service/product.service.ts");
let ProductInternalModule = class ProductInternalModule {
};
exports.ProductInternalModule = ProductInternalModule;
exports.ProductInternalModule = ProductInternalModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController],
        providers: [product_repository_1.ProductRepository, product_service_1.ProductService],
        exports: [product_service_1.ProductService]
    })
], ProductInternalModule);


/***/ }),

/***/ "./libs/product/src/internal/repository/product.repository.ts":
/*!********************************************************************!*\
  !*** ./libs/product/src/internal/repository/product.repository.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ProductRepository = class ProductRepository {
    constructor() {
        this.data = new Map();
    }
    save(product) {
        this.data.set(product.id, product);
        return product;
    }
    findById(id) {
        return this.data.get(id) ?? null;
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)()
], ProductRepository);


/***/ }),

/***/ "./libs/product/src/internal/service/product.service.ts":
/*!**************************************************************!*\
  !*** ./libs/product/src/internal/service/product.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const node_crypto_1 = __webpack_require__(/*! node:crypto */ "node:crypto");
const product_repository_1 = __webpack_require__(/*! ../repository/product.repository */ "./libs/product/src/internal/repository/product.repository.ts");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async createProduct(payload) {
        const product = {
            id: (0, node_crypto_1.randomUUID)(),
            name: payload.name,
            price: payload.price
        };
        return this.productRepository.save(product);
    }
    async getProductById(id) {
        return this.productRepository.findById(id);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof product_repository_1.ProductRepository !== "undefined" && product_repository_1.ProductRepository) === "function" ? _a : Object])
], ProductService);


/***/ }),

/***/ "./libs/product/src/product.module.ts":
/*!********************************************!*\
  !*** ./libs/product/src/product.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! ./client */ "./libs/product/src/client/index.ts");
const product_internal_module_1 = __webpack_require__(/*! ./internal/product-internal.module */ "./libs/product/src/internal/product-internal.module.ts");
const product_service_1 = __webpack_require__(/*! ./internal/service/product.service */ "./libs/product/src/internal/service/product.service.ts");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [product_internal_module_1.ProductInternalModule],
        providers: [
            {
                provide: client_1.PRODUCT_CLIENT_TOKEN,
                useExisting: product_service_1.ProductService
            }
        ],
        exports: [client_1.PRODUCT_CLIENT_TOKEN]
    })
], ProductModule);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./apps/api-gateway/src/main.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/api-gateway/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3079);
}
void bootstrap();

})();

/******/ })()
;
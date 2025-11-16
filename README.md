<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

A server providing details for products.

## Flow - Setup

- Pull the repo - main branch and run npm install.
- start the server with num run dev:start

## Tech Stack

- NestJs
- Mongodb

## API

Three apis:

- /login - success response
- /products - array of products
  [
  {
    "_id": "69176f5330ed20f31559234c",
    "name": "Apple iPhone 17 Pro",
    "slug": "iphone-17-pro",
    "brand": "Apple",
    "description": "The latest iPhone with A19 chip, ProMotion display, and advanced triple camera setup.",
    "productImage": "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg"
  },
  {
    "_id": "69176f5330ed20f31559234d",
    "name": "Samsung Galaxy S25 Ultra",
    "slug": "samsung-s25-ultra",
    "brand": "Samsung",
    "description": "Samsung’s flagship with Snapdragon Gen 4 processor and 200MP camera.",
    "productImage": "https://www.sathya.store/img/product/PH9POkYZuCfBCucO.jpg"
  },
  {
    "_id": "69176f5330ed20f31559234e",
    "name": "OnePlus 13 Pro",
    "slug": "oneplus-13-pro",
    "brand": "OnePlus",
    "description": "Ultra-sleek design powered by Snapdragon Gen 4 with Hasselblad cameras.",
    "productImage": "https://image01-in.oneplus.net/media/202505/22/fe39bc573b7c7c964f6b85088dfcaf8d.png"
  }
]
- /products/:id - single product
  {
  "_id": "69176f5330ed20f31559234c",
  "name": "Apple iPhone 17 Pro",
  "slug": "iphone-17-pro",
  "brand": "Apple",
  "description": "The latest iPhone with A19 chip, ProMotion display, and advanced triple camera setup.",
  "productImage": "https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg"
}


## Schema

@Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop()
  brand: string;

  @Prop()
  description: string;

  @Prop()
  productImage: string;

  @Prop({
    type: [
      {
        color: { type: String, required: true },
        storage: { type: String, required: true },
        price: { type: Number, required: true },
        mrp: { type: Number, required: true },
        image: { type: String, required: true },
      },
    ],
    default: [],
  })
  variants: {
    color: string;
    storage: string;
    price: number;
    mrp: number;
    image: string;
  }[];

  @Prop({
    type: [
      {
        monthly: { type: Number, required: true },
        tenure: { type: Number, required: true },
        interestRate: { type: Number, required: true },
        cashback: { type: Number, default: 0 },
      },
    ],
    default: [],
  })
  emiPlans: {
    monthly: number;
    tenure: number;
    interestRate: number;
    cashback: number;
  }[];

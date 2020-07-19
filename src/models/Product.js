import mongoose, { Schema } from 'mongoose';

const ProductType = {
  Vegetable: 'vegetable', // 채소
  FruitNutRice: 'fruit_nut_rice', // 과일 견과 쌀
  Seafood: 'seafood', // 수산 해선 건어물
  MeatEgg: 'meat_egg', // 정육 계란
  SoupSideMain: 'soup_side_main', // 국 반찬 메인
  MyeonSpiceOil: 'myeon_spice_oil', // 면 양념 오일
  BeverageSnack: 'beverageSnack', // 음료 우유 떡 간식
  Lifestyle: 'lifestyle', // 생활용품
  Special: 'special', // 특산품
  Beauty: 'beauty', //뷰티 바디케어
}
Object.freeze(ProductType);

const ProductSchema = mongoose.Schema({
  store: { type: Schema.Types.ObjectId, reference: 'Store' },
  name: String,
  price: Number,
  image: String,
  description: String,
  type: String,
});

const Product = mongoose.model('Product', ProductSchema);

export { Product, ProductSchema, ProductType };

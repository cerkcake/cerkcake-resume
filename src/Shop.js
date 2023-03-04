import Product from "./Product.js";
import ProductData from "./Products.json";

const Shop = () => {
  const products = ProductData.products;
  //   const fruitBasket = {
  //     apple: 10,
  //     banana: 5,
  //     orange: 2,
  //   };
  //   console.log(`I have ${fruitBasket.apple} apple, ${fruitBasket.banana}
  // banana, ${fruitBasket.orange} orange`);

  const string = `string text line 1
string text line 2`;
  console.log(string);

  const a = 10;
  const b = 20;
  console.log(`Sum of a + b is: ${a + b}`);

  console.log(`Sum of a + b is: ${a + b} and Multiple of a * b is: ${a * b}`);

  // const oddOrEven = (number) => {
  //  number % 2 === 0 ? "even":"odd"
  //   }
  // console.log(
  //   `I have ${fruitBasket.apple.amount} apple, and the color is ${fruitBasket.apple.color}`
  // );

  return (
    <div className="grid grid-cols-3 space-x-2">
      {/* <Product data={products[0]} />
      <Product data={products[1]} />
      <Product data={products[2]} />
      <Product data={products[3]} /> */}
      {products.map((data) => (
        <Product data={data} />
      ))}
    </div>
  );
};

export default Shop;

/**function Category(categoryCode, categoryName) {
  this.categoryCode = categoryCode;
  this.categoryName = categoryName;
}

Category.prototype.printCategory = function () {
  console.log(`${this.categoryCode} - ${this.categoryName}`);
};

function Product(
  productCode,
  productName,
  productPrice,
  categoryCode,
  categoryName
) {
  Category.call(this, categoryCode, categoryName);
  this.productCode = productCode;
  this.productName = productName;
  this.productPrice = productPrice;
}

Product.prototype = Object.create(Category.prototype);

Product.prototype.printProduct = function () {
  console.log(`${this.productCode} - ${this.productName}`);
};**/

/** CLASS **/
class Category {
  constructor(categoryCode, categoryName) {
    this.categoryCode = categoryCode;
    this.categoryName = categoryName;
  }
  printCategory() {
    console.log(`${this.categoryCode} - ${this.categoryName}`);
  }
}

class Product extends Category {
  constructor(
    productCode,
    productName,
    productPrice,
    categoryCode,
    categoryName
  ) {
    super(categoryCode, categoryName);
    this.productCode = productCode;
    this.productName = productName;
    this.productPrice = productPrice;
  }

  printProduct() {
    console.log(`${this.productCode} - ${this.productName}`);
  }
}

const phone = new Product(
  "9X4S2",
  "iPhone SE 2022",
  1999.0,
  "47X12",
  "Smartphones"
);

phone.printCategory();

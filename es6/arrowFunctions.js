/** () => ;**/
/** () => {} **/
/** SUGAR SINTAX **/
function printMessage(msg) {
  console.log(msg);
}
var alertMessage = function () {};

var printMessage = (msg) => {
  console.log("Message");
  console.log(msg);
};
var sum = (a, b) => a + b;

/** THIS **/

console.log(this);

function Product() {
  this.name = "iPad";
  this.generation = "9na Gen";
  this.printInfo = function () {
    var that = this;
    setTimeout(function () {
      console.log(`${that.name} ${that.generation}`);
    }, 3000);
  };
}

var product = new Product();
product.printInfo();

function Product() {
  this.name = "iPad";
  this.generation = "9na";
  this.printInfo = function () {
    setTimeout(() => {
      console.log(`${this.name} - ${this.generation}`);
    }, 3000);
  };
}

var product = new Product();
product.printInfo();

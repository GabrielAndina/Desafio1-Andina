class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {

      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  

      if (this.products.some(product => product.code === code)) {
        console.error("El código del producto ya existe.");
        return;
      }
  

      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      console.log("Producto agregado:", newProduct);
  
      return newProduct;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        console.log("Producto encontrado:", product);
        return product;
      } else {
        console.error("Producto no encontrado. Not found");
      }
    }
  }
  
  // Ejemplo de uso
  const productManager = new ProductManager();
  
  const product1 = productManager.addProduct("Producto 1", "Descripción 1", 22, "imagen1.jpg", "P001", 10);
  const product2 = productManager.addProduct("Producto 2", "Descripción 2", 25, "imagen2.jpg", "P002", 15);
  
  const allProducts = productManager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  const foundProduct = productManager.getProductById(product1.id);
  const notFoundProduct = productManager.getProductById(999); // ID que no existe
  
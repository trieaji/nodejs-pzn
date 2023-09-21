import { getAllProducts, getProductById } from "../src/database.js";
import { ProductService } from "../src/productService.js";

jest.mock("../src/database.js");

test('mock modules getProductById', () => {
    getProductById.mockImplementation((id) => { //misal mau pakek selain "mockImplementation" tidak mengapa. untuk database
        return {
            id: id,
            nawa: 'Product Mock'
        }
    });

    const product = ProductService.findById(23);
    console.info(product)

    expect(product).toEqual({id: 1, nawa: 'Product Mock'});

    // expect(product).toEqual(product);
})

test('mock modules getAllProducts', () => { //gk bisa memanggil salah satu, harus dua2Nya
    const products = [
        {
            id: 1,
            nawa: "Product Mock"
        },
        {
            id: 2,
            nawa: "Product Mock"
        }
    ];
    getAllProducts.mockReturnValue(products)
    console.info(products)

    expect(ProductService.findAll()).toEqual(products)
})
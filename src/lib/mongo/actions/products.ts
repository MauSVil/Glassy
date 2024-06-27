import { Db } from "mongodb";
import clientPromise from "..";
import { Product } from "../types/Product.type";

let client;
let db: Db;

const init = async () => {
  client = await clientPromise;
  db = client.db() as Db;
};

export const getProducts = async (filters: Partial<Product>) => {
  try {
    await init();
    const productsCollection = db.collection<Product>('products');
    const products = await productsCollection.find(filters).toArray();
    return products;
  } catch (e) {
    console.error('Error getting products', e);
    throw new Error('Error getting products');
  }
};


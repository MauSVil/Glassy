import { Db } from "mongodb";
import clientPromise from "..";

let client;
let db: Db;

const init = async () => {
  client = await clientPromise;
  db = client.db() as Db;
};

export const getProducts = async () => {
  try {
    await init();
    const productsCollection = db.collection('products');
    const products = await productsCollection.find().toArray();
    return products;
  } catch (e) {
    console.error('Error getting products', e);
    throw new Error('Error getting products');
  }
};


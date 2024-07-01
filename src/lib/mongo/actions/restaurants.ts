import { Db } from "mongodb";
import clientPromise from "..";
import { Restaurant } from "../types/Restaurant.type";

let client;
let db: Db;

const init = async () => {
  client = await clientPromise;
  db = client.db() as Db;
};

export const getRestaurants = async (filters: Partial<Restaurant>) => {
  try {
    await init();
    const restaurantsCollection = db.collection<Restaurant>('restaurants');
    const restaurants = await restaurantsCollection.find(filters).toArray();
    return restaurants;
  } catch (e) {
    console.error('Error getting restaurants', e);
    throw new Error('Error getting restaurants');
  }
};


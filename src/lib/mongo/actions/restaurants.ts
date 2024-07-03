import { Db, ObjectId } from "mongodb";
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

export const createRestaurant = async (data: Restaurant) => {
  try {
    await init();
    const restaurantsCollection = db.collection<Restaurant>('restaurants');
    const restaurant = await restaurantsCollection.insertOne(data);
    return restaurant;
  } catch (e) {
    console.error('Error creating restaurant', e);
    throw new Error('Error creating restaurant');
  }
};

export const updateRestaurant = async (id: string, data: Partial<Restaurant>) => {
  try {
    await init();
    const restaurantsCollection = db.collection<Restaurant>('restaurants');
    const restaurant = await restaurantsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnDocument: 'after' },
    );
    return restaurant;
  } catch (e) {
    console.error('Error updating restaurant', e);
    throw new Error('Error updating restaurant');
  }
};


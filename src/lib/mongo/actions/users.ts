import { Db } from "mongodb";
import clientPromise from "..";

let client;
let db: Db;

const init = async () => {
  client = await clientPromise;
  db = client.db() as Db;
};

export const getUsers = async () => {
  try {
    await init();
    const usersCollection = db.collection('users');
    const users = await usersCollection.find().toArray();
    return users;
  } catch (e) {
    console.error('Error getting users', e);
    throw new Error('Error getting users');
  }
};


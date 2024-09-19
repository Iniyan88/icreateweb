import { Account, Client, Storage, Databases, Avatars } from "appwrite";
export const appwriteConfig = {
  databaseId: "",
  storageId: "",
  userCollectionId: "",
  contactCollectionId: "",
  starCollectionId: "",
};
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("");
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

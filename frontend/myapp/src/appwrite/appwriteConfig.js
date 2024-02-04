import { Account, Client, Storage, Databases, Avatars } from "appwrite";
export const appwriteConfig = {
  databaseId: "65bf176fc0223f74a827",
  storageId: "",
  userCollectionId: "65bf1b92d330c22fc161",
};
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65be0215528b11edd6a7");
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

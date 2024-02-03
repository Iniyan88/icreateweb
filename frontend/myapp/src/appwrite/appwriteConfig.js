import { Account, Client } from "appwrite";
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65be0215528b11edd6a7");
export const account = new Account(client);

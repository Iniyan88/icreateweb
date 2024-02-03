import { account } from "../appwrite/appwriteConfig";

async function Api() {
  const data = await account.get();
  return data;
}
export default Api;

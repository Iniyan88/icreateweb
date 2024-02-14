import { ID } from "appwrite";
import {
  account,
  appwriteConfig,
  database,
} from "../../appwrite/appwriteConfig";
export async function Api() {
  const data = await account.get();
  return data;
}
export async function saveContact(data) {
  console.log(data);
  const userId = await account.get();
  console.log(userId);
  const contactInfo = {
    name: data.fullName,
    designation: data.designation,
    email: data.email,
    description: data.message,
    user: userId.$id,
  };
  const saveContact = await database.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.contactCollectionId,
    ID.unique(),
    contactInfo
  );
  return saveContact;
}
export async function saveCard(data) {
  console.log(data);
  console.log(data.isStarred);
  const CardInfo = {
    starred: data.isStarred,
    title: data.title,
    link: data.link,
    courseid: data.id,
  };
  const saveCardDetails = await database.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.starCollectionId,
    ID.unique(),
    CardInfo
  );
  return saveCardDetails;
}

import { db } from "../Config";
import {
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
// Get a list of cities from your database
async function getItemsDrinks() {
  const photosCol = collection(db, "photos");
  const photoSnapshot = await getDocs(photosCol);
  const photoList = photoSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
return photoList;
}

async function deleteItemsDrinks(id) {
  try {
  await deleteDoc(doc(db, "photos", id));
  console.log("Document deleted with ID: ", id);
} catch (error) {
  console.error("Error deleting document: ", error);
}
}

async function AddItemsDrinks(photo) {
  try {

    const docRef = await addDoc(collection(db, "photos"), photo);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function editDrink(Drink) {
  await setDoc(doc(db, "photos", Drink.id), Drink);
}

export { getItemsDrinks,deleteItemsDrinks,AddItemsDrinks,editDrink};
import { db } from "../Config";
import {
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  collection,
} from "firebase/firestore";
// Get a list of cities from your database
async function getItemPizza() {
  const photosCol = collection(db, "deals");
  const photoSnapshot = await getDocs(photosCol);
  const ItemList = photoSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
return ItemList;
}

// async function deletePhoto(id) {
//   try {
//   await deleteDoc(doc(db, "photos", id));
//   console.log("Document deleted with ID: ", id);
// } catch (error) {
//   console.error("Error deleting document: ", error);
// }
// }

// async function addphoto(photo) {
//   try {

//     const docRef = await addDoc(collection(db, "photos"), photo);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
// , deletePhoto, addphoto 

export { getItemPizza};
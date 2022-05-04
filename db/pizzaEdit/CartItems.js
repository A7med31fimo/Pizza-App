import { db } from "../Config";
import {
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  collection,setDoc
} from "firebase/firestore";
// Get a list of cities from your database
async function getCardItems() {
  const CardCol = collection(db, "CartItems");
  const CardSnapshot = await getDocs(CardCol);
  const CardItemsList = CardSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
return CardItemsList;
}

async function deleteItemsCards(id) {
  try {
  await deleteDoc(doc(db, "CartItems", id));
  console.log("Document deleted with ID: ", id);
} catch (error) {
  console.error("Error deleting document: ", error);
}
}

async function AddItemsCards(ItemCard) {
  try {

    const docRef = await addDoc(collection(db, "CartItems"), ItemCard);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function editCard(Card) {
  await setDoc(doc(db, "CartItems", Card.id), Card);
}

export {getCardItems,deleteItemsCards,AddItemsCards,editCard};
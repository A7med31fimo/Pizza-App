import { db } from "../Config";
import {
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  collection,
  query,
  where,
  onSnapshot,
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


function subscribe(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "CartItems")),
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        
        if (callback) callback({ change, snapshot});
      });
     
    }
  );
  return unsubscribe;
}

export {getCardItems,deleteItemsCards,AddItemsCards,subscribe,editCard};
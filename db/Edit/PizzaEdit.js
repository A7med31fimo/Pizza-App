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
async function getItemPizza() {
  const photosCol = collection(db, "Pizza");
  const photoSnapshot = await getDocs(photosCol);
  const ItemList = photoSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return ItemList;
}

async function deleteItemsPizza(id) {
  try {
  await deleteDoc(doc(db, "Pizza", id));
  console.log("Document deleted with ID: ", id);
} catch (error) {
  console.error("Error deleting document: ", error);
}
}

async function AddItemsPizza(Itemdeal) {
  try {

    const docRef = await addDoc(collection(db, "Pizza"), Itemdeal);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function editPizza(Itemdeal) {
  await setDoc(doc(db, "Pizza", cake.id), Itemdeal);
}


function subscribe(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "Pizza")),
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        
        if (callback) callback({ change, snapshot});
      });
     
    }
  );
  return unsubscribe;
}

export { getItemPizza,subscribe,AddItemsPizza,deleteItemsPizza,editPizza };

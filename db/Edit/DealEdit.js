import { db } from "../Config";
import {
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";

async function getItemDeals() {
  const photosCol = collection(db, "deals");
  const photoSnapshot = await getDocs(photosCol);
  const ItemList = photoSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
return ItemList;
}

async function deleteItemsDeals(id) {
  try {
  await deleteDoc(doc(db, "deals", id));
  console.log("Document deleted with ID: ", id);
} catch (error) {
  console.error("Error deleting document: ", error);
}
}

async function AddItemsDeals(Itemdeal) {
  try {

    const docRef = await addDoc(collection(db, "deals"), Itemdeal);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function editdeal(Itemdeal) {
  await setDoc(doc(db, "deals", cake.id), Itemdeal);
}


function subscribe(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "deals")),
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        
        if (callback) callback({ change, snapshot});
      });
     
    }
  );
  return unsubscribe;
}


export { getItemDeals,AddItemsDeals,deleteItemsDeals,editdeal,subscribe};
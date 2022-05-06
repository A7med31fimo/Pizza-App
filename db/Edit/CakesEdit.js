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

async function getItemCakes() {
  const photosCol = collection(db, "Cakes");
  const photoSnapshot = await getDocs(photosCol);
  const ItemList = photoSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
return ItemList;
}

async function deleteItemscake(id) {
  try {
  await deleteDoc(doc(db, "Cakes", id));
  console.log("Document deleted with ID: ", id);
} catch (error) {
  console.error("Error deleting document: ", error);
}
}

async function AddItemscakes(ItemCake) {
  try {

    const docRef = await addDoc(collection(db, "Cakes"), ItemCake);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function editcake(cake) {
  await setDoc(doc(db, "Cakes", cake.id), cake);
}


function subscribe(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "Cakes")),
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        
        if (callback) callback({ change, snapshot});
      });
     
    }
  );
  return unsubscribe;
}


export { getItemCakes,AddItemscakes,editcake,deleteItemscake,subscribe};
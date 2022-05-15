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
async function getItemFeedBack() {
  const photosCol = collection(db, "FeedBack");
  const photoSnapshot = await getDocs(photosCol);
  const ItemList = photoSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return ItemList;
}

async function deleteItemsFeedBack(id) {
  try {
  await deleteDoc(doc(db, "FeedBack", id));
  console.log("Document deleted with ID: ", id);
} catch (error) {
  console.error("Error deleting document: ", error);
}
}

async function AddItemsFeedBack(Itemdeal) {
  try {

    const docRef = await addDoc(collection(db, "FeedBack"), Itemdeal);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function editFeedBack(Itemdeal) {
  await setDoc(doc(db, "FeedBack", cake.id), Itemdeal);
}


function subscribe(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "FeedBack")),
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        
        if (callback) callback({ change, snapshot});
      });
     
    }
  );
  return unsubscribe;
}

export { getItemFeedBack,subscribe,AddItemsFeedBack,deleteItemsFeedBack,editFeedBack };

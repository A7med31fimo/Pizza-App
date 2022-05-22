import { auth, db } from "../Config";
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
import { getUserUId} from "../auth/auth"
// Get a list of cities from your database
var s;
s= auth.currentUser!=null?auth.currentUser.email.split(".")[0]+"OldCard":"guest";
async function getOldCardItems() {
  if(s){
  const CardCol = collection(db, s);
  const CardSnapshot = await getDocs(CardCol);
  const CardItemsList = CardSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data()};
  });
return CardItemsList;}
}

async function deleteOldCards(id) {
  if(s){try {
  await deleteDoc(doc(db, s, id));
  //console.log("Document deleted with ID: ", id);
} catch (error) {
  console.error("Error deleting document: ", error);
}}
}

async function AddOldCards(ItemCard) {
 if(s){ try {
    const docRef = await addDoc(collection(db, s), ItemCard);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }}
}
async function editOldCard(Card) {
  if(s) {await setDoc(doc(db, s, Card.id), Card);}
}


function subscribe(callback) {
  if(s){ const unsubscribe = onSnapshot(
    query(collection(db, s)),
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        
        if (callback) callback({ change, snapshot});
      });
     
    }
  );
  return unsubscribe;}
}

export {getOldCardItems,deleteOldCards,AddOldCards,subscribe,editOldCard};
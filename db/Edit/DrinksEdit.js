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
async function getItemsDrinks() {
  const DrinksCol = collection(db, "Drinks");
  const DrinksSnapshot = await getDocs(DrinksCol);
  const DrinksList = DrinksSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
return DrinksList;
}

async function deleteItemsDrinks(id) {
  try {
  await deleteDoc(doc(db, "Drinks", id));
  console.log("Document deleted with ID: ", id);
} catch (error) {
  console.error("Error deleting document: ", error);
}
}

async function AddItemsDrinks(Drink) {
  try {

    const docRef = await addDoc(collection(db, "Drinks"), Drink);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function editDrink(Drink) {
  await setDoc(doc(db, "Drinks", Drink.id), Drink);
}
function subscribe(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "Drinks")),
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        
        if (callback) callback({ change, snapshot});
      });
     
    }
  );
  return unsubscribe;
}
export { getItemsDrinks,deleteItemsDrinks,AddItemsDrinks,editDrink,subscribe};
import { db } from "../Config";
import {
  getDocs,
  doc,
  addDoc,
  collection,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

async function getAllChats() {
  const chatsCol = collection(db, "Chats");
  const chatsSnapshot = await getDocs(chatsCol);
  const chatList = chatsSnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  // console.log(chatList);
  return chatList;
}

async function editConversation(id, status) {
  try {
    const docRef = await doc(db, "Chats", id);
    updateDoc(docRef, {
      status: status,
    }).then(console.log("status updated!"));
  } catch (e) {
    console.error(e);
  }
}

async function addConversation(
  title,
  totalCost,
  numberOfItems,
  status,
  cards,
  phone,
  address,
  comment,
  Date
) {
  try {
    const docRef = await addDoc(collection(db, "Chats"), {
      title: title,
      totalCost: totalCost,
      numberOfItems: numberOfItems,
      status: status,
      id: "",
      cardslist: cards,
      phone: phone,
      address: address,
      comment: comment,
      Date: Date,
    });
    updateDoc(docRef, {
      id: docRef.id,
    }).then(console.log("Document written with ID: ", docRef.id));
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function deleteItem(id) {
  try {
    await deleteDoc(doc(db, "Chats", id));
    console.log("Document deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

function subscribe(callback) {
  const unsubscribe = onSnapshot(query(collection(db, "Chats")), (snapshot) => {
    const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
    snapshot.docChanges().forEach((change) => {
      if (callback) callback({ change, snapshot });
    });
  });
  return unsubscribe;
}

export {
  getAllChats,
  editConversation,
  addConversation,
  deleteItem,
  subscribe,
};

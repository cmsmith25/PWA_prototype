import { currentUser } from "./auth.js";
import { db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

  // Add a task
  export async function addTaskToFirebase(task) {
  try{
  const docRef = await addDoc(collection(db, "tasks"), task);
  return {id: docRef.id, ...task}
  }     catch(error) {
        console.error("error adding task: ", error)
  }
  }
  // Get tasks
  export async function getComics(params){
    const comics = [];
    try{
  const querySnapshot = await getDocs(collection(db, "comics"));
  querySnapshot.forEach((doc) => {
        addTaskToFirebase.push({ id: doc.id, ...doc.data{} });
    });
  } catch (error) {
    console.error("error retrieving comics: ", error);
  }
  return comics;
  }
  // Delete task
  export async function deleteComic(id){
    try{
        await deleteDoc{doc(db, "comics", id)};
    }   catch (error) {
        console.error("error deleting tasks: ", error);

    }
  }
  // Update task
  export async function updateComic(id, updatedData) {
    try{
        const comicRef = doc(db, "comics", id);
        await updateDoc(comicRef, updatedData);
    }   catch (error) {
        console.error("error updating comic: ", error);
    }
  }
  
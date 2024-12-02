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

  // Add a new comic
  export async function addTaskToFirebase(task) {
  try{
    if (!currentUser) {
      throw new Error("User is not authenticated");
    }
    const userId = currentUser.uid;
    console.log("userID : " , userId);
    const userRef = doc(db, "users", userId);
    await setDoc(
      userRef,
    {
      email: currentUser.email,
      name: currentUser.displayName,
    },
    { merge: true }
    );
  const tasksRef = collection(userRef, "tasks");
  const docRef = await addDoc(tasksRef, task);
  return { id: docRef.id, ...task};
  } catch (error) {
    console.error("Error adding comic: ", error);
  }
  }


  // Get a new comic
  export async function getTasksFromFirebase(){
    const tasks = [];
    try{
      if (!currentUser) {
        throw new Error("User is not authenticated");
      }
      const userId = currentUser.uid;
      const taskRef = collection(doc(db, "users", userId), "tasks");
      const querySnapshot = await getDocs(taskRef);
      querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Error retrieving comics: ", error);
  }
  return tasks;
  }


  // Delete a comic from library
  export async function deleteTaskFromFirebase(id) {
    try {
      if (!currentUser) {
        throw new Error("User is not authenticated");
      }
        const userId = currentUser.uid;
        await deleteDoc(doc(db, "users", userId, "tasks", id));
    }   catch (error) {
        console.error("error deleting comic: ", error);

    }
  }


  // Update comic library
  export async function updateTaskInFirebase(id, updatedData) {
    console.log(updatedData, id);
    try{
      if (!currentUser) {
        throw new Error("User is not authenticated");
      }
        const userId = currentUser.uid;
        const taskRef = doc(db, "users", userId, "tasks", id);
        console.log(taskRef);
        await updateDoc(taskRef, updatedData);
    }   catch (error) {
        console.error("Error updating comic: ", error);
    }
  }
  
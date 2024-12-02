import { auth, db } from "./firebaseConfig.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
    doc,
    getDoc,
}   from "https://www.getstatic.com/firebasejs/11.0.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    const userNameElement = document.getElementById("user-name");
    const userEmailElement = document.getElementById("user-email");

    //Listening for authentication state changes
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            //User is authenticated, gets user details
            const userId = user.uid;
            // console.log(currentUser.displayName);
            try {
                //Reference to the user's document in the Firestore
                const userRef = doc(db, "users" , userID);
                const userDoc = await getDoc(userRef);

                if (userDoc.esists()) {
                    //Updates profile HTML with user details
                    const userData = userDoc.data();
                    userNameElement.textContent = userData.name || "Anonymous";
                    userEmailElement.textContent = userData.email;
                } else {
                    console.error("No user document found!");
                }
            } catch (e) {
                console.error("Error fetching user details: ", e);
            }
        } else {
            //No user is authenticated, will redirect to login page
            window.location.href = "/pages/auth.html";
        }
    });
});
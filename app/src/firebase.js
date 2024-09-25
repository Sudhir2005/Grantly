// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9_XHXnC7oPD8Us-OB_cULlm_5PntmMoE",
  authDomain: "grantlyscholar.firebaseapp.com",
  projectId: "grantlyscholar",
  storageBucket: "grantlyscholar.appspot.com",
  messagingSenderId: "919608957644",
  appId: "1:919608957644:web:5c219b680bef2f0dfe4069",
  measurementId: "G-H886EQC16Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Example: Add a document to Firestore
async function addScholarship() {
  try {
    const docRef = await addDoc(collection(db, "scholarships"), {
      name: "Grant Scholarship",
      amount: 5000,
      isAvailable: true
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Example: Read documents from Firestore
async function getScholarships() {
  const querySnapshot = await getDocs(collection(db, "scholarships"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

// Call Firestore functions (as needed)
addScholarship(); // Call this function to add a new document
getScholarships(); // Call this function to fetch documents

import React, { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { addDoc, getDocs } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// Adding user role to firestore...
const addUserRole = async (userId, username, email, role) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      userId: userId,
      username: username,
      email: email,
      role: role,
    });
  } catch (e) {
    console.error("Error: ", e);
  }
};

// Getting user role from firestore...
export const getUserRole = async (userId) => {
  const q = query(collection(db, "users"), where("userId", "==", userId));
  let role;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    role = doc.data().role;
  });
  return role;
};

// Getting username from firestore...
export const getUserName = async (userId) => {
  const q = query(collection(db, "users"), where("userId", "==", userId));
  let username;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    username = doc.data().username;
  });
  return username;
};


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Signup ADMIN...
  function signupAdmin(email, password, username, role = "ADMIN") {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        addUserRole(e.user.uid, username, e.user.email, role);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Signup TEACHER...
  function signupTeacher(email, password, username, role = "TEACHER") {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        addUserRole(e.user.uid, username, e.user.email, role);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Signup STUDENT...
  function signupStudent(email, password, username, role = "STUDENT") {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        addUserRole(e.user.uid, username, e.user.email, role);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  // function for changing state after login...
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log("CurrentUser", user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signupAdmin,
    signupTeacher,
    signupStudent,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
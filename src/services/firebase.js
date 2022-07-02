import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, update, onChildAdded, onChildChanged, onValue, query, limitToLast } from "firebase/database";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCTXvvdEz5ErLZb37lZg3FlJX9sKsTfYKk",
    authDomain: "jayeon-nuri.firebaseapp.com",
    projectId: "jayeon-nuri",
    storageBucket: "jayeon-nuri.appspot.com",
    messagingSenderId: "323667698923",
    appId: "1:323667698923:web:187293e3df761a07d38aae",
    measurementId: "G-CZ6YWXRFV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// database
export const database = getDatabase();
export const database_ref = ref;
export const database_set = set;
export const database_update = update;
export const database_query = query;
export const database_limit_to_last= limitToLast;
export const database_on_child_added = onChildAdded;
export const database_on_child_changed = onChildChanged;
export const database_on_value = onValue;

// storage
// export const storage  = getStorage();
// export const storage_ref  = storageRef;
// export const storage_upload_bytes  = uploadBytes;
// export const storage_download_url = getDownloadURL;
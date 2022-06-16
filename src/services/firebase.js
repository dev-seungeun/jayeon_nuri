import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, update, onChildAdded, onChildChanged, onValue, query, limitToLast } from "firebase/database";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB5v504RKmqaLi3lG2R8nD1x_8BCKmv4wo",
    authDomain: "jayeonnuri-a1413.firebaseapp.com",
    databaseURL: "https://jayeonnuri-a1413-default-rtdb.firebaseio.com",
    projectId: "jayeonnuri-a1413",
    storageBucket: "jayeonnuri-a1413.appspot.com",
    messagingSenderId: "29237233696",
    appId: "1:29237233696:web:6bb0b1262e943ab3695445"
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
export const storage  = getStorage();
export const storage_ref  = storageRef;
export const storage_upload_bytes  = uploadBytes;
export const storage_download_url = getDownloadURL;
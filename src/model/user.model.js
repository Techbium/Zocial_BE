import db from "../config/firebaseConfig.js";

export async function getUserModel(name, email, age){
    await db.collection("users").add({
            name,
            email,
            age,
        });
}
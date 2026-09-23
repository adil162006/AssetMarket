import { cert, initializeApp } from "firebase-admin";
import { ENV } from "./env";


export const app = initializeApp({
    credential:cert({
        projectId:ENV.FIREBASE_PROJECT_ID,
        clientEmail:ENV.FIREBASE_CLIENT_EMAIL,
        privateKey:ENV.FIREBASE_PRIVATE_KEY
    })

})
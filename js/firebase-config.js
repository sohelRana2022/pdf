// Firebase web configuration (these values identify the project; they are not secrets).
// Access control is enforced by Firestore Security Rules, NOT by this file.
export const firebaseConfig = {
  apiKey: "AIzaSyD6PvxY5vP9sDrDrYXoT7ZzoR3NBnJeEO4",
  authDomain: "cloud-storage-6a7e1.firebaseapp.com",
  projectId: "cloud-storage-6a7e1",
  storageBucket: "cloud-storage-6a7e1.firebasestorage.app",
  messagingSenderId: "818557067287",
  appId: "1:818557067287:web:0db2092c525f4610863c52"
};

export const COLLECTION_CURRENT = "cardTemplates";
export const COLLECTION_VERSIONS = "cardTemplateVersions";
// Firestore documents are limited to 1 MiB; keep headroom for the other fields.
export const MAX_HTML_BYTES = 900000;

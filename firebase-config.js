// Firebase Configuration
// Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCt9jIv2UawIHuFpXyySwfMmrnqxK_BGa4",
    authDomain: "quiz-cursor.firebaseapp.com",
    databaseURL: "https://quiz-cursor-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quiz-cursor",
    storageBucket: "quiz-cursor.firebasestorage.app",
    messagingSenderId: "327578273208",
    appId: "1:327578273208:web:8d713fb2e4417521c83b4d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Database structure references
const gameRef = database.ref('game');
const participantsRef = database.ref('participants');
const questionsRef = database.ref('questions');
const answersRef = database.ref('answers');

// Sample data structure:
// {
//   "game": {
//     "currentQuestion": 0,
//     "isActive": false,
//     "timeRemaining": 45
//   },
//   "participants": {
//     "participant1": { "name": "Alice", "isActive": false },
//     ...
//   },
//   "questions": [
//     {
//       "id": 0,
//       "text": "What's your favorite color?",
//       "options": ["Red", "Blue", "Green", "Yellow"],
//       "type": "4-option"
//     },
//     ...
//   ],
//   "answers": {
//     "0": {
//       "participant1": "Red",
//       "participant2": "Blue",
//       ...
//     }
//   }
// }

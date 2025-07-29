// Firebase Configuration
// Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com/",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
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
# 🗳️ Poll Visualization Experience

A real-time interactive poll visualization system designed for groups of up to 80 participants. The system consists of three main components: participant input, live visualization, and quizmaster control.

## 🎯 Features

### Participant Input (`participant-input.html`)
- **Name Selection**: Searchable list of 80 prepopulated participants
- **Real-time Answers**: Submit answers that can be changed until time expires
- **Timer Display**: 45-second countdown with automatic answer freezing
- **Responsive Design**: Works on mobile and desktop devices

### Live Visualization (`visualization.html`)
- **Animated Characters**: Each participant is represented by a unique character
- **Quadrant Movement**: Characters move to different areas based on their answers
- **Collision Physics**: Characters interact with each other for a lively experience
- **Real-time Updates**: Instant response to participant answer changes
- **Dynamic Layout**: Adapts to 2-option or 4-option questions

### Quizmaster Control (`quizmaster.html`)
- **Question Management**: Select and activate questions in sequence
- **Timer Control**: Adjustable countdown timer (10-300 seconds)
- **Live Statistics**: Monitor participant activity and answer distribution
- **Game State Control**: Start, stop, and reset quiz sessions

## 🚀 Setup Instructions

### 1. Firebase Configuration

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Realtime Database
3. Set up database rules for read/write access:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

4. Copy your Firebase config object from Project Settings > General > Your apps
5. Replace the placeholder config in all three HTML files:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com/",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

### 2. File Deployment

#### Participant Input & Quizmaster (GitHub Pages)
1. Create a new GitHub repository
2. Upload `participant-input.html` and `quizmaster.html`
3. Enable GitHub Pages in repository settings
4. Access via: `https://yourusername.github.io/yourrepo/participant-input.html`

#### Visualization (Local Hosting)
1. Save `visualization.html` to your local machine
2. Open directly in a web browser for local display
3. For fullscreen presentations, press F11

### 3. Initial Data Setup

The system automatically initializes with sample data on first run:
- 80 participant names
- 4 sample questions (mix of 2-option and 4-option)
- Default game state

## 🎮 Usage Guide

### For Participants
1. Open the participant input page
2. Search for and select your name
3. Confirm to enter the game
4. Wait for the quizmaster to activate a question
5. Click your answer choice
6. Change your answer anytime before the timer expires

### For Quizmaster
1. Open the quizmaster control panel
2. Select a question from the list
3. Set the timer duration (default: 45 seconds)
4. Click "Start Selected Question"
5. Monitor live statistics and answer distribution
6. Use "Next Question" or "Stop Current Question" as needed
7. Reset game to clear all data and start fresh

### For Visualization Display
1. Open the visualization page on the display screen
2. Position for optimal viewing by audience
3. The display automatically updates when questions are activated
4. Characters will appear and move based on participant responses

## 🎨 Customization

### Adding Questions
Modify the sample questions in any of the HTML files (they sync via Firebase):

```javascript
const sampleQuestions = [
    {
        id: 0,
        text: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        type: "4-option"  // or "2-option"
    }
];
```

### Modifying Participant Names
Update the `participantNames` array in `participant-input.html`:

```javascript
const participantNames = [
    "Your Name 1", "Your Name 2", // ... add your participants
];
```

### Visual Customization
- **Quadrant Colors**: Modify the `.option1`, `.option2`, etc. CSS classes
- **Character Colors**: Edit the `TORSO_COLORS` array in `visualization.html`
- **Movement Speed**: Adjust `MOVEMENT_SPEED` variable
- **Timer Duration**: Change default in quizmaster controls

### Background Images (Optional)
Add background images to quadrants by updating CSS:

```css
.option1 {
    background-image: url('path/to/your/image1.jpg');
}
```

## 🔧 Technical Details

### Database Structure
```
{
  "game": {
    "currentQuestion": 0,
    "isActive": true,
    "timeRemaining": 45
  },
  "participants": {
    "participant_0": {
      "name": "Alice Johnson",
      "isActive": true
    }
  },
  "questions": [
    {
      "id": 0,
      "text": "Question text",
      "options": ["A", "B", "C", "D"],
      "type": "4-option"
    }
  ],
  "answers": {
    "0": {
      "participant_0": "A"
    }
  }
}
```

### Browser Compatibility
- Modern browsers with ES6 support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers supported

### Performance Notes
- Optimized for up to 80 concurrent participants
- Real-time updates with minimal latency
- Efficient collision detection and animation

## 🎭 Character Animation Details

Characters consist of:
- **Head**: Golden circle with black border
- **Torso**: Colored rectangle that animates during movement
- **Name Label**: First name displayed above character

Animation behaviors:
- **Movement**: Characters walk toward their selected answer quadrant
- **Walking Animation**: Torso scales horizontally while moving
- **Collision**: Characters push each other apart when too close
- **Wiggling**: Subtle random movement when stationary
- **Answer Changes**: Characters immediately redirect to new target

## 🔒 Security Considerations

- Firebase rules are set to public read/write for simplicity
- For production use, implement proper authentication
- Consider rate limiting for answer submissions
- Monitor Firebase usage to stay within quotas

## 🆘 Troubleshooting

### Common Issues
1. **Characters not appearing**: Check Firebase configuration and network connectivity
2. **Timer not syncing**: Ensure all devices have accurate time
3. **Questions not loading**: Verify Firebase database rules and initialization
4. **Mobile display issues**: Test in device's browser, not in-app browsers

### Firebase Errors
- Check console for network errors
- Verify database URL format
- Ensure project permissions are correct

## 📱 Recommended Setup

- **Participant devices**: Smartphones or tablets
- **Visualization display**: Large screen TV or projector
- **Quizmaster device**: Laptop or desktop with reliable internet
- **Network**: Stable Wi-Fi for all participants

## 🎉 Tips for Best Experience

1. Test with a small group first
2. Ensure all devices can access the URLs
3. Have backup questions ready
4. Consider having a technical assistant
5. Brief participants on how to use the interface
6. Use fullscreen mode for the visualization display

Enjoy your interactive poll experience! 🎊
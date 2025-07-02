// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGcYAdpjPQHh7x5mnM_oOujXMCE91365Y",
  authDomain: "sabrinasite-383f4.firebaseapp.com",
  projectId: "sabrinasite-383f4",
  storageBucket: "sabrinasite-383f4.firebasestorage.app",
  messagingSenderId: "249360441265",
  appId: "1:249360441265:web:7abd59e97d65be47c3e790"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// 2. Send a Message
function sendMessage() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (!name || !message) {
        alert("Please fill in both fields.");
        return;
    }

    db.collection("messages").add({
        text: `${name}: ${message}`,
        timestamp: new Date()
    }).then(() => {
        document.getElementById("message").value = "";
    }).catch(error => {
        console.error("Error sending message: ", error);
        alert("Failed to send message. Please try again.");
    });
}

// 3. Load Messages
function loadMessages() {
    const messagesDiv = document.getElementById("messages");
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
          messagesDiv.innerHTML = "";
          snapshot.forEach(doc => {
              const msg = doc.data();
              const messageElement = document.createElement("p");
              messageElement.textContent = `${msg.text} (${new Date(msg.timestamp.toDate()).toLocaleString()})`;
              messageElement.className = "message-box";
              messagesDiv.appendChild(messageElement);
              console.log("Message loaded:", msg.text);
          });
      });
}

window.onload = loadMessages;
import React, { useState } from "react";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  const [section, setSection] = useState("dashboard");
  const [user, setUser] = useState(null);
  const [chatWith, setChatWith] = useState(null);

  // Demo registration
  function demoRegister() {
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Demo User" }),
    })
      .then(r => r.json())
      .then(u => setUser(u));
  }

  return (
    <main>
      {!user ? (
        <div>
          <h1>Welcome to miiwiichat!</h1>
          <button onClick={demoRegister}>Register Demo User</button>
        </div>
      ) : section === "chat" ? (
        <ChatWindow user={user} chatWith={chatWith || "87654321"} />
      ) : (
        <div>
          <h2>Hello, {user.name}!</h2>
          <p>Your friend code: <b>{user.friendCode}</b></p>
          <button onClick={() => setSection("chat")}>Start Chat</button>
        </div>
      )}
    </main>
  );
}

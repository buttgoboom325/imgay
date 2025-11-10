import React, { useEffect, useState } from "react";
import axios from "axios";
import { getPusherClient } from "../lib/pusher";

export default function ChatWindow({ user, chatWith }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    if (!chatWith || !user) return;
    const room = [user.friendCode, chatWith].sort().join("-");
    const pusher = getPusherClient();
    const channel = pusher.subscribe(room);

    channel.bind("chat", (data) => {
      setMessages((msgs) => [...msgs, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      pusher.disconnect();
    };
  }, [chatWith, user]);

  function sendMsg() {
    axios.post("/api/sendMessage", {
      from: user.friendCode,
      to: chatWith,
      message: input,
    });
    setInput("");
  }
  function call() {
    alert("Call requested (stub)");
  }
  return (
    <div style={{
      background: "#fff", borderRadius: "8px", boxShadow: "0 0 6px #0002",
      margin: "20px auto", width: "70%", minHeight: "350px", padding: "20px"
    }}>
      <h3>Chat with: {chatWith}</h3>
      <div style={{ borderTop: "1px solid #ddd", maxHeight: 190, overflowY: "auto", margin: "16px 0" }}>
        {messages.map((m, i) =>
          <div key={i} style={{
            textAlign: m.from === user.friendCode ? "right" : "left",
            margin: "6px 0"
          }}>
            <b>{m.from === user.friendCode ? "You" : "Them"}: </b>{m.message}
          </div>
        )}
      </div>
      <input
        value={input} onChange={e => setInput(e.target.value)}
        placeholder="Type a message..." style={{ width: "60%", fontSize: 16, padding: "6px" }}
      />
      <button onClick={sendMsg} style={{ marginLeft: 8 }}>Send</button>
      <button onClick={call} style={{ marginLeft: 10, background: "#AEEAFF" }}>Call</button>
    </div>
  );
}

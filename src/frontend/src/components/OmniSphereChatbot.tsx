import { useEffect, useRef, useState } from "react";

export default function OmniSphereChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Namaste! 👋 Main OmniSphere ka AI assistant hoon. Kuch bhi pucho 🚀",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");

    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply || "No response" },
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "❌ Error aaya, dubara try karo" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20 }}>
      <button onClick={() => setIsOpen(!isOpen)}>Chat</button>

      {isOpen && (
        <div
          style={{
            width: 300,
            height: 400,
            background: "#111",
            color: "#fff",
            padding: 10,
            overflow: "auto",
          }}
        >
          {messages.map((msg, i) => (
            <div key={i}>
              <b>{msg.role}:</b> {msg.content}
            </div>
          ))}

          {loading && <div>Typing...</div>}

          <div ref={messagesEndRef} />

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: "80%" }}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
}

export default function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src="/robot.webp" className="chat-message-profile" alt="Robot" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src="/user.jpg" className="chat-message-profile" alt="User" />
      )}
    </div>
  );
}

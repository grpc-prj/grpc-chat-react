import "./Chat.css";

export default function Chat({ msgList, sendMessage }) {
  function handler() {
    var msg = window.msgTextArea.value;
    sendMessage(msg);
    window.msgTextArea.value = "";
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <h3>Group Messages</h3>
      </div>
      <div className="chat-list">
        {msgList?.map((chat, i) => (
          <ChatCard chat={chat} key={i} />
        ))}
      </div>
      <div className="chat-input">
        <div style={{ flex: "3 1 90%" }}>
          <textarea id="msgTextArea" />
        </div>
        <div
          style={{
            paddingLeft: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button onClick={handler}>Send</button>
        </div>
      </div>
    </div>
  );
}

function ChatCard({ chat }) {
  return (
    <>
      <div style={{ fontSize: "9px", marginLeft: "4px", paddingLeft: "8px" }}>
        <span>{chat?.from}</span>
      </div>
      <div
        className={
          chat?.mine ? "chatcard chatcard-mine" : "chatcard chatcard-friend"
        }
      >
        <div className="chatcard-msg">
          <span>{chat?.msg}</span>
        </div>
        <div className="chatcard-time">
          <span>{chat?.time}</span>
        </div>
      </div>
    </>
  );
}

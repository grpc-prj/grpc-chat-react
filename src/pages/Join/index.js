import { User, JoinResponse } from "./../../chat_pb";
import { ChatServiceClient } from "./../../chat_grpc_web_pb";
import { useHistory } from "react-router-dom";

export const client = new ChatServiceClient(
  "http://localhost:8080",
  null,
  null
);

export default function Join() {
  const history = useHistory();
  function joinHandler() {
    const _username = window.username.value;

    const user = new User();
    user.setId(Date.now());
    user.setName(_username);

    client.join(user, null, (err, response) => {
      if (err) return console.log(err);
      const error = response.getError();
      const msg = response.getMsg();

      if (error === 1) {
        console.log(error, msg);
        window.alert("Username already exists.");
        return;
      }
      window.localStorage.setItem("username", _username.toString());
      history.push("chatslist");
    });
  }
  return (
    <div>
      <div>
        <h1>Join Chat As...</h1>
      </div>
      <div style={{ padding: "10px 0" }}>
        <input
          style={{ fontSize: "1.3rem" }}
          type="text"
          id="username"
          placeholder="Your username..."
        />
      </div>
      <div>
        <button
          onClick={joinHandler}
          style={{
            padding: "7px 38px",
            fontSize: "1.2em",
            boxSizing: "content-box",
            borderRadius: "4px",
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
}

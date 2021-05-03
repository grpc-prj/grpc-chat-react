import "./UsersList.css";

export default function UsersList({ users = [] }) {
  return (
    <div className="userslist">
      {users?.map((user, i) => {
        return <UserCard user={user} key={i} />;
      })}
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div className="usercard">
      <div className="usercard-img"></div>
      <div>
        <div className="usercard-name">
          <h3>{user?.name || "No Username"}</h3>
        </div>
      </div>
    </div>
  );
}

import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import ChatPage from "./pages/ChatPage";
import Join from "./pages/Join";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <head>
          <title>NewsNet</title>
          <link rel="icon" href="/favicon.ico" />
        </head>

        <main className="main">
          <BrowserRouter>
            <Switch>
              <Route path="/join">
                <Join />
              </Route>
              <Route path="/chatslist">
                <ChatPage />
              </Route>
              <Route exact path="/">
                <Redirect to="/join" />
              </Route>
              <Route path="*">
                <Join />
              </Route>{" "}
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    </>
  );
}

export default App;

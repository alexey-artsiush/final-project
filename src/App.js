import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { Header } from "./components/header";
import { store } from "./redux";
import { AdminPage } from "./pages/admin-page/admin-page";

function App() {
  return (
    <Provider store={store} >
      <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/app/:title">
            <GamePage />
          </Route>
          <Route exact path="/order">
            <OrderPage />
          </Route>
          <Route exact path="/admin">
            <AdminPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}


export default App;

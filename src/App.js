import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {

  const [showPopup, setShowPopup] = useState(false);
  const [pizzas, setPizzas] = useState([]);

  const onSelectPopup = () => {
    setShowPopup(!showPopup);
  }

  useEffect(() => {
    fetch("http://localhost:3004/pizzas")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`Could not fetch ${"http://localhost:3004/pizzas"}` +
            `, received ${resp.status}`);
        }
        return resp.json();
      })
      .then((data) => {
        setPizzas(data);
      })

  }, [])


  return (
    <div
      onClick={(e) => {
        if (!e.target.matches('.sort__list-item') && !e.target.matches('.sort__name')) {
          setShowPopup(false);
        }
      }}
      className="outsideBg">
      <svg display="none">
        <symbol id="ruble" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="" d="M291.75,308.1a105.8,105.8,0,1,0,0-211.6H136v32h39.943V276.1H136v32h39.943V352H136v32h39.943v56h32V384H304V352H207.943V308.1ZM207.943,128.5H291.75a73.8,73.8,0,1,1,0,147.6H207.943Z" className="ci-primary" />
        </symbol>
      </svg>
      <div
        className="wrapper">
        <Header />
        <div className="content">
          <Route
            exact
            path="/"
            render={() => (
              <Home
                pizzas={pizzas}
                setShowPopup={setShowPopup}
                showPopup={showPopup}
                onSelectPopup={onSelectPopup}
              />
            )}
          />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;


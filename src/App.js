import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    //При первом запуске сайта, отправь запрос
    axios
      .get("https://6361603267d3b7a0a6c561c6.mockapi.io/Items")
      .then((res) => {
        setItems(res.data); //на получение данных для карточек с сервера
      });
    axios
      .get("https://6361603267d3b7a0a6c561c6.mockapi.io/Cart")
      .then((res) => {
        setCartItems(res.data); // и на получение данных о добавленных с сервера
      });
    axios
      .get("https://6361603267d3b7a0a6c561c6.mockapi.io/Favourites")
      .then((res) => {
        setFavourites(res.data); // и на получение данных о добавленных с сервера
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://6361603267d3b7a0a6c561c6.mockapi.io/Cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavourite = async (obj) => {
    if (favourites.find((favObj) => favObj.id == obj.id)) {
      axios.delete(
        `https://6361603267d3b7a0a6c561c6.mockapi.io/Favourites/${obj.id}`
      );
      setFavourites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      const { data } = await axios.post(
        "https://6361603267d3b7a0a6c561c6.mockapi.io/Favourites",
        obj
      );

      setFavourites((prev) => [...prev, data]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6361603267d3b7a0a6c561c6.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavourite={onAddToFavourite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favourites"
          exact
          element={
            <Favourites
              items={favourites}
              onAddToFavourite={onAddToFavourite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

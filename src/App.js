import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";
import AppContext from "../src/context";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import LoginPage from "pages/LoginPage";
import { useNavigate } from "react-router-dom";
import AdminPage from "pages/AdminPage";
import Modal from "components/Modal";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cardOpened, setCardOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState([]);

  const [modalTitle, setModalTitle] = React.useState("");
  const [modalPrice, setmodalPrice] = React.useState("");
  const [modalImage, setmodalImage] = React.useState("");
  const [modalBrandName, setModalBrandName] = React.useState("");
  const [modalBrandImage, setModalBrandImage] = React.useState("");

  const [title, setTitle] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get(
              "https://6331cc103ea4956cfb67783b.mockapi.io/Cart-iteams"
            ),
            axios.get("https://6331cc103ea4956cfb67783b.mockapi.io/Favorite"),
            axios.get(
              "https://6331cc103ea4956cfb67783b.mockapi.io/Sneakers-iteams"
            ),
          ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://6331cc103ea4956cfb67783b.mockapi.io/Cart-iteams/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://6331cc103ea4956cfb67783b.mockapi.io/Cart-iteams",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(
        `https://6331cc103ea4956cfb67783b.mockapi.io/Cart-iteams/${id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://6331cc103ea4956cfb67783b.mockapi.io/Favorite/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://6331cc103ea4956cfb67783b.mockapi.io/Favorite",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      setTitle("");
    } else {
      setTitle("Пожалуйста введите корректные данные, если они у вас есть!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleProductClick = (item) => {
    setSelectedProduct(item);
    setModal(!modal);
    setModalTitle(selectedProduct.title);
    setmodalImage(selectedProduct.imageUrl);
    setmodalPrice(selectedProduct.price);
    setModalBrandImage(selectedProduct.brandImage);
    setModalBrandName(selectedProduct.brandname);

    console.log(selectedProduct.brandname);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
        setCardOpened,
        username,
        setUsername,
        password,
        setPassword,
        isLoggedIn,
        setIsLoggedIn,
        handleLogin,
        handleLogout,
        title,
      }}
    >
      <Modal
        brandname={modalBrandName}
        brandImage={modalBrandImage}
        title={modalTitle}
        imageUrl={modalImage}
        price={modalPrice}
        isOpened={modal}
        onModalClose={() => {
          setModal(false);
        }}
      />
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path=""
            exact
            element={
              <Home
                handleProductClick={handleProductClick}
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
                cardOpened={cardOpened}
                setCardOpened={setCardOpened}
                setModal={setModal}
              />
            }
          />

          <Route path="favorites" element={<Favorites />} />
          <Route path="orders" element={<Orders />} />

          <Route
            path="/admin"
            element={<AdminPage handleLogout={handleLogout} />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

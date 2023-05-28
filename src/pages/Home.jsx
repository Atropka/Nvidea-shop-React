import React from "react";

import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
  setModal,
  handleProductClick,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        handleProductClick={handleProductClick}
        setModal={setModal}
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(item) => onAddToCart(item)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="slider">
        <img src={process.env.PUBLIC_URL + "/img/photo1.jpg"} alt="1" />
      </div>

      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Католог"}
        </h1>
        <div className="search-block d-flex">
          <img src={process.env.PUBLIC_URL + "/img/search.svg"} alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src={process.env.PUBLIC_URL + "/img/btn-remove.svg"}
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;

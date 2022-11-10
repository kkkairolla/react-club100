import Card from "../components/Card/Index";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavourite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue
            ? `Поиск по запросу: "${searchValue}"`
            : " Все модели в наличии"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/srch.svg" alt="search"></img>
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear"
              src="/img/btnremove.svg"
              alt="clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((obj1) =>
            obj1.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj1) => (
            <Card
              key={obj1.imageurl}
              title={obj1.name}
              price={obj1.price}
              imageurl={obj1.imageurl}
              onFavourite={(obj) => onAddToFavourite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;

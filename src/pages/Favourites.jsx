import Card from "../components/Card/Index";

function Favourites({ items, onAddToFavourite }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Избранные</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((obj1) => (
          <Card
            key={obj1.imageurl}
            id={obj1.id}
            title={obj1.name}
            price={obj1.price}
            imageurl={obj1.imageurl}
            favourited={true}
            onFavourite={onAddToFavourite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;

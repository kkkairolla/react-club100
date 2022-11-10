import styles from "./Card.module.scss";
import React from "react";

function Card({
  id,
  onPlus,
  onFavourite,
  favourited = false,
  imageurl,
  title,
  price,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(favourited);

  const onClickPlus = () => {
    onPlus({ imageurl, title, price });
    setIsAdded(!isAdded);
  };
  const onClickFavourite = () => {
    onFavourite({ id, imageurl, title, price });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onClickFavourite}>
        <img
          src={isFavourite ? "/img/like.svg" : "/img/unlike.svg"}
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={imageurl} alt="Sneakers"></img>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span> Цена:</span>
          <b>{price} тг.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btnchecked.svg" : "/img/btnplus.svg"}
          alt="plus"
        ></img>
      </div>
    </div>
  );
}

export default Card;

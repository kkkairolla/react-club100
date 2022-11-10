function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="drawerShadow">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btnremove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="items">
            {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${obj.imageurl})` }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}тг</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className="cartItemRemove"
                  src="/img/btnremove.svg"
                  alt="remove"
                />
              </div>
            ))}
            <div className="cardTotalBlock">
              <ul>
                <li className="d-flex">
                  <spam>Итого:</spam>
                  <div></div>
                  <b>33.990тг</b>
                </li>
                <li className="d-flex">
                  <spam>Налог 5%:</spam>
                  <div></div>
                  <b>3.990тг</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/img/row.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Пожалуйста, добавьте минимум одну пару кроссовок, чтобы сделать
              заказ
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/row.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;

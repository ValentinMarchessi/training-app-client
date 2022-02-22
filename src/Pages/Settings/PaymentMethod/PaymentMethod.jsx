//STYLES
import S from "./PaymentMethod.module.scss";
//IMAGES
import masterCard from "../../../assets/images/masterCard.png";
import BBVAIcon from "../../../assets/images/BBVAIcon.png";
import meliIcon from "../../../assets/images/meliIcon.png";

export default function PaymentMethod() {
  return (
    <div className={S.container}>
      <div className={S.containerCard}>
        <div className={S.contentCard}>
          <div className={S.contentCardLeft}>
            <img alt="imgCards" src={masterCard} />
            <img alt="imgCards" src={BBVAIcon} />
            <img alt="imgCards" src={meliIcon} />
          </div>
          <div className={S.contentCardRight}>
            <p>Master Card</p>
            <p>Banco Francés</p>
            <p>Mercado Pago</p>
          </div>
        </div>
        <button>Add Card</button>
      </div>
      <div className={S.containerCart}>
        <h4>Cart</h4>
        <div className={S.contentCart}>
          <div className={S.contentCartLeft}>
            <p>Sub Total</p>
            <p>Discount</p>
            <hr />
            <p>Total</p>
          </div>
          <div className={S.contentCartRight}>
            <p>$150</p>
            <p>$50</p>
            <hr />
            <p>$100</p>
          </div>
        </div>
        <button>Payment</button>
      </div>
    </div>
  );
}

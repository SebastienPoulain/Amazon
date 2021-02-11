import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function SubTotal() {
  const [{ basket, dispatch }] = useStateValue();
  const [{ user, dispatch2 }] = useStateValue();
  const history = useHistory();

  const paymentValidation = () => {
    if (user !== null) {
      history.push("/payment");
    } else {
      alert("Vous devez vous connecter pour effectuer une commande");
    }
  };

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SousTotal ( {basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Cette commande contient un cadeau
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={paymentValidation}>Procéder au paiement</button>
    </div>
  );
}

export default SubTotal;

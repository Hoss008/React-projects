import "./CheckoutPage.css";
import "./checkout-header.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatMoney } from "../utils/money";

function CheckoutPage({
  cartItems,
  onUpdateCartItem,
  onDeleteCartItem,
  onUpdateDeliveryOption,
}) {
  const { taskId } = useParams();
  const basePath = `/tasks/${taskId ?? "ecommerce-frontend"}`;

  const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState({
    totalItems: 0,
    productCostCents: 0,
    shippingCostCents: 0,
    totalCostBeforeTaxCents: 0,
    taxCents: 0,
    totalCostCents: 0,
  });

  const resolveImagePath = (path) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("/")) return path;
    return `/${path}`;
  };

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOption(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, [cartItems]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleUpdateQuantity = async (productId, currentQuantity) => {
    const nextQuantity = Number(
      window.prompt("Enter quantity (1-10)", currentQuantity),
    );
    if (
      !Number.isInteger(nextQuantity) ||
      nextQuantity < 1 ||
      nextQuantity > 10
    ) {
      return;
    }

    try {
      await onUpdateCartItem(productId, nextQuantity);
    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };

  const handleDeleteItem = async (productId) => {
    try {
      await onDeleteCartItem(productId);
    } catch (error) {
      console.error("Failed to delete cart item", error);
    }
  };

  const handleUpdateDeliveryOption = async (productId, deliveryOptionId) => {
    try {
      await onUpdateDeliveryOption(productId, deliveryOptionId);
    } catch (error) {
      console.error("Failed to update delivery option", error);
    }
  };

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to={basePath}>
              <img className="logo" src="/images/logo.png" />
              <img className="mobile-logo" src="/images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to={basePath}>
              {totalItems} items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="/images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cartItems.map((item) => {
              const deliveryOptionForItem = deliveryOption.find(
                (option) => option.id === item.deliveryOptionId,
              );
              return (
                <div key={item.productId} className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date:
                    {deliveryOptionForItem?.estimatedDeliveryTimeMs
                      ? new Date(
                          deliveryOptionForItem.estimatedDeliveryTimeMs,
                        ).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })
                      : ""}
                  </div>

                  <div className="cart-item-details-grid">
                    <img
                      className="product-image"
                      src={resolveImagePath(item.product.image)}
                    />

                    <div className="cart-item-details">
                      <div className="product-name">{item.product.name}</div>
                      <div className="product-price">
                        {formatMoney(item.product.priceCents)}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity:{" "}
                          <span className="quantity-label">
                            {item.quantity}
                          </span>
                        </span>
                        <span
                          className="update-quantity-link link-primary"
                          onClick={() =>
                            handleUpdateQuantity(item.productId, item.quantity)
                          }
                        >
                          Update
                        </span>
                        <span
                          className="delete-quantity-link link-primary"
                          onClick={() => handleDeleteItem(item.productId)}
                        >
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      {deliveryOption.map((option) => {
                        const isChecked = item.deliveryOptionId === option.id;
                        const deliveryDate = option.estimatedDeliveryTimeMs
                          ? new Date(
                              option.estimatedDeliveryTimeMs,
                            ).toLocaleDateString("en-US", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            })
                          : "";
                        const shippingText =
                          option.priceCents === 0
                            ? "FREE Shipping"
                            : `${formatMoney(option.priceCents)} - Shipping`;

                        return (
                          <div key={option.id} className="delivery-option">
                            <input
                              type="radio"
                              checked={isChecked}
                              onChange={() =>
                                handleUpdateDeliveryOption(
                                  item.productId,
                                  option.id,
                                )
                              }
                              className="delivery-option-input"
                              name={`delivery-option-${item.productId}`}
                            />
                            <div>
                              <div className="delivery-option-date">
                                {deliveryDate}
                              </div>
                              <div className="delivery-option-price">
                                {shippingText}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            <div className="payment-summary-row">
              <div>Items ({paymentSummary.totalItems}):</div>
              <div className="payment-summary-money">
                {formatMoney(paymentSummary.productCostCents)}
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">
                {formatMoney(paymentSummary.shippingCostCents)}
              </div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">
                {formatMoney(paymentSummary.totalCostBeforeTaxCents)}
              </div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">
                {formatMoney(paymentSummary.taxCents)}
              </div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">
                {formatMoney(paymentSummary.totalCostCents)}
              </div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;

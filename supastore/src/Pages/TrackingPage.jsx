import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import { Header } from "../components/Header";
import dayjs from "dayjs";

import "./TrackingPage.css";

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();

  const [order, setOrder] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchTrackingData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );

      setOrder(response.data);

      const orderProduct = response.data.products.find(
        (p) => p.productId === productId,
      );

      setProduct(orderProduct);
    };

    fetchTrackingData();
  }, [orderId, productId]);
  //const deliveryTime=order.estimatedDeliveryTimeMs-order.orderTimeMs
  if (!order || !product) {
    return null;
  }
  return (
    <>
      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on{" "}
            {dayjs(product.estimatedDeliveryTimeMs).format("MMMM D")}
          </div>

          <div className="product-info">{product.product.name}</div>

          <div className="product-info">Quantity: 1</div>

          <img className="product-image" src={product.product.image} />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import Order from './Order';

export default function OrderList({ orders }) {
  return <div>
    <h2>Your Orders</h2>
    {orders.map((order, i) => <Order key={order + i} order={order} />
    )}
  </div>;
}

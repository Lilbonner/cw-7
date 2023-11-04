import { useState } from 'react';
import './Style.css';
import OrderDetails from './Details';
import AddItem from './AddItems';

interface MenuItem {
  name: string;
  price: number;
}

interface OrderItem extends MenuItem {
  quantity: number;
}

export default function OrderApp() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToOrder = (item: MenuItem) => {
    const existingItem = order.find((orderItem) => orderItem.name === item.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }

    setTotalPrice(totalPrice + item.price);
  };

  const removeFromOrder = (item: OrderItem) => {
    const existingItem = order.find((orderItem) => orderItem.name === item.name);

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      const updatedOrder = order.filter((orderItem) => orderItem.name !== item.name);
      setOrder(updatedOrder);
    }

    setTotalPrice(totalPrice - item.price);
  }

  const menu: MenuItem[] = [
    { name: 'Hamburger', price: 80 },
    { name: 'Pizza', price: 120 },
    { name: 'Shawarma', price: 100 },
    { name: 'Hot dog', price: 60 },
    { name: 'Fries', price: 40 },
    { name: 'Nuggets', price: 50 },
  ];

  return (
    <div className="orderApp">
      <OrderDetails order={order} totalPrice={totalPrice} removeFromOrder={removeFromOrder} />
      <AddItem menu={menu} addToOrder={addToOrder} />
    </div>
  );
}

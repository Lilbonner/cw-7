interface OrderDetailsProps {
  order: any[];
  totalPrice: number;
  removeFromOrder: (item: any) => void;
}

export default function OrderDetails({ order, totalPrice, removeFromOrder }: OrderDetailsProps) {
  return (
    <div className="orderDetails">
      <h2 className="orderTitle">Order Details</h2>
      {order.length === 0 ? (
        <p className="orderP">Your order is empty.</p>
      ) : (
        <div>
          {order.map((item) => (
            <div key={item.name}>
              <p className="orderItem">
                {item.name} x{item.quantity} - {item.price * item.quantity} KGS
                <button className="deleteBtn" onClick={() => removeFromOrder(item)}>Delete</button>
              </p>
            </div>
          ))}
          <p className="total">Total price: {totalPrice} KGS</p>
        </div>
      )}
    </div>
  );
}

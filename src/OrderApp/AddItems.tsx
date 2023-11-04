interface AddItemsProps {
  menu: { name: string; price: number }[];
  addToOrder: (item: { name: string; price: number }) => void;
}

export default function AddItems({ menu, addToOrder }: AddItemsProps) {
  return (
    <div className="addItems">
      <h2 className="addTitle">Add Items</h2>
      {menu.map((item) => (
        <div key={item.name}>
          <p className="addItemsDiv">
            {item.name} - {item.price} KGS
            <button className="addBtn" onClick={() => addToOrder(item)}>Add</button>
          </p>
        </div>
      ))}
    </div>
  );
}

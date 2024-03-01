import { v4 as uuidv4 } from 'uuid';

function AddItem({products, setProducts, setLoading}) {

  // adding an item on the products list
  const onAddItem = (e) => {
    e.preventDefault();
    setLoading(true);
    // set new product data
    const addItem = {
      id: uuidv4(),
      name: e.target.name.value,
      type: e.target.type.value,
      quantity: 1
    }
    // insert new product to products list
    const listArr = [...products];
    listArr.push(addItem);
    setProducts(listArr);
    // for accurate return data
    setTimeout(() => {
      setLoading(false);
    }, 500);
    
  }

  return (
    <form onSubmit={onAddItem}>
      <div className="flex justify-between space-x-20">
        <div className="w-3/6">
          <h3 className="text-lg font-medium">List Name *</h3>
          <input name="name" type="text" className="w-full h-10 p-2 rounded-md" required/>
        </div>
        <div className="w-3/6">
          <h3 className="text-lg font-medium">Type *</h3>
          <select name="type" className="w-full h-10 p-2 rounded-md" required>
            <option value="">Please select</option>
            <option value="Grocery">Grocery</option>
            <option value="Home Goods">Home Goods</option>
            <option value="Hardware">Hardware</option>
          </select>
        </div>
      </div>
      <button type="submit" className="w-full bg-slate-400 p-2 mt-5 rounded-md">+ Add an Item</button>
    </form>
  )
}

export default AddItem

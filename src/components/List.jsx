import React, { forwardRef } from "react";

const List = forwardRef(
  ({index, dragHandleProps, prod, products, setProducts, setLoading, ...props }, ref) => {

  // removing an item on the products list
  const onClickRemove = (id) => {
    setLoading(true);
    // remove product on the list when click remove
    const listArr = [...products];
    const finalList = listArr.filter((ls => ls.id !== id));
    setProducts(finalList);
    // for accurate return data
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  return (
    <div
      key={index}
      className={
        "flex bg-gray-200 w-full p-5 mt-5 space-x-10 rounded-md"
      }
      ref={ref}
      {...props}
    >
      <div className="w-3/6 flex items-center space-x-3">
        <span {...dragHandleProps}>
          <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </span>
        <input type="text" className="w-full h-10 p-2 border-2 border-slate-400 rounded-md" defaultValue={prod.name} required/>
      </div>
      <div className="w-3/6 flex items-center space-x-3">
        <select className="w-full h-10 p-2 border-2 border-slate-400 rounded-md" defaultValue={prod.quantity} required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <button onClick={() => onClickRemove(prod.id)}>
          <svg width={24} height={24} fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
        </button>
      </div>
    </div>
  )
});

export default List

import { useState } from "react";
import StrictModeDroppable from "./components/StrictModeDroppable";
import AddItem from "./components/AddItem"
import List from "./components/List";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Swal from "sweetalert2";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // for drag and drop function
  const dragEnded = (param) => {
    const { source, destination } = param;
    let _arr = [...products];
    //extracting the source item from the list
    const _item = _arr.splice(source.index, 1)[0];
    //inserting it at the destination index.
    _arr.splice(destination.index, 0, _item);
    setProducts(_arr);
  };

  // submit shopping cart
  const onSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Shopping List Saved!",
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <div className="w-screen h-screen bg-gray-100 p-20">
      <h1 className="text-4xl font-semibold mb-10">My Shopping List</h1>

      <AddItem
        products={products}
        setProducts={setProducts}
        setLoading={setLoading}
      />

      <div className="flex bg-gray-200 w-full p-5 my-10 space-x-10 rounded-md">
        <p className="text-lg font-medium w-3/6">Item Name</p>
        <p className="text-lg font-medium w-3/6">Quantity</p>
      </div>
      

      <form onSubmit={onSubmit}>
        {!loading ? products.length !== 0 && (
          <DragDropContext onDragEnd={dragEnded}>
            <StrictModeDroppable droppableId="products-wrapper">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {products.map((prod, index) => {
                    return (
                      <Draggable
                        draggableId={`product-${prod.id}`}
                        index={index}
                        key={prod.id}
                      >
                        {(_provided, _snapshot) => (
                          <List
                            index={index}
                            products={products}
                            setProducts={setProducts}
                            setLoading={setLoading}
                            ref={_provided.innerRef}
                            dragHandleProps={_provided.dragHandleProps}
                            prod={prod}
                            {..._provided.draggableProps}
                          />
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
          </DragDropContext>
        ) : (
          <p className="text-center text-lg font-bold">Loading...</p>
        )}


        {products.length !== 0 && (
          <div className="flex justify-end mt-10">
            <div className="flex space-x-5">
              <button className="py-3 px-12 bg-blue-500" type="submit">Save</button>
              <button className="py-3 px-12 bg-red-300">Cancel</button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default App

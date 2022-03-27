import { useState } from "react";
import AddProd from "./components/AddProd";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  let product = [
    { name: "Iphone 13 Pro", quantity: 0, price: 100000 },
    { name: "Mi 10", quantity: 0, price: 50000 },
  ];
  const [productList, setProductList] = useState(product);
  const [total, setTotal] = useState(0);

  const addQuantity = (index) => {
    let newProductList = [...productList];
    let amt = total;
    newProductList[index].quantity++;
    amt += newProductList[index].price;
    setProductList(newProductList);
    setTotal(amt);
  };
  const removeQuantity = (index) => {
    let newProductList = [...productList];
    let amt = total;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      amt -= newProductList[index].price;
    } else {
      newProductList[index].quantity = 0;
    }
    setProductList(newProductList);
    setTotal(amt);
  };

  const removeProduct = (index) => {
    let newProductList = [...productList];
    let amt = total;
    amt -= newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotal(amt);
  };

  const addProduct = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };
  const reset = () => {
    let newProductList = [...product];
    setProductList(newProductList);
    setTotal(0);
  };
  return (
    <>
      <Navbar productList={productList} />
      <main className="container mt-5">
      <AddProd addProd={addProduct}/>
        <ProductList
          productList={productList}
          deleteProduct={removeProduct}
          removeQuantity={removeQuantity}
          addQuantity={addQuantity}
        />
      </main>
      <Footer total={total} reset={reset} />
    </>
  );
}

export default App;

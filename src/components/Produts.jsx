import { useEffect } from "react"
import { useState } from "react"


const Produts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
   const fetchProducts = async () => {
    try {
       const response = await fetch("https://fakestoreapi.com/products");
       const data = await response.json();
       setProducts(data);
    } catch (error) {
      console.log(error);
      setError(error)
      
    }
    }
    fetchProducts()
  }, [])


  if (error) {
    console.log(error);
    
  }

  return (
    <div className="products-container">
      <div className="products box">
        <div className="Products">
          <h2>Products</h2>
        </div>
        <div className="productCard-container">
          <div className="productCard-box">
            {products.map((item) => (
              <div key={item.id} className="product-details">
                <div className="itemImage">
                  <img src={item.image} alt="item-img" />
                </div>
                <div className="itemTitle">
                  <h3>{item.title}</h3>
                  <span>${item.price}</span>
                  <button>🛒</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produts
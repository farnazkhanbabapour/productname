import React from "react";
import Product from "./Product/Product";



import "./App.css";

function App() {
  const allProducts =[
    {id:0, foto:"Images/Foto_1.png", titel:"Image1",price:100, description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."},
    {id:1, titel:"Image2",price:20, description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."},
    {id:2, foto:"Images/Foto_3.jpg", titel:"Image3",price:160, description:"Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."},
  ]
 
  return (
    <div className="container" >
      <Product {...allProducts[0]}>
        <p><button>Sale</button></p>
      </Product>
      <Product {...allProducts[1]}>
        <p><button>NOT Sale</button></p>
      </Product>
      <Product {...allProducts[2]}>
        <p><button>NOT Sale</button></p>
      </Product>
    </div>
  );
}

export default App;

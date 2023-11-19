import React from "react";

import "./Product.css";

function Product({foto = "Images/keinFoto.png", titel,price,description,children}) {
    return (
        (price  >= 100) &&
        <div>
            <h2 style={{textAlign:"center"}}>Product Card</h2> 
            <div className="card">
                <img src={foto} style={{width:"100%"}}/>
                <h1>{titel}</h1>
                <p className="price">{price}$</p>
                <p>{description}</p>
                {children}
                <p><button>Add to Cart</button></p>
            </div> 
            
        </div>  

     );
    
}

export default Product;
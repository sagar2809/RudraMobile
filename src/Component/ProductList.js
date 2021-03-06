import React, { Component } from 'react';
import "./Product.js"
import Product from './Product.js';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../Context';

class ProductList extends Component {
    state={
        products : storeProducts
    }



    render() { 
        return (
           <React.Fragment>
               <div className="py-5">
                   <div className = "container">
                   <Title name = "our" title ="products"></Title>
                       <div className = "row">
                           <ProductConsumer>
                               {value => {
                                   return value.products.map( product =>{
                                       return <Product key ={product.id} product = {product}></Product>


                                   })
                               }

                            }
                           </ProductConsumer>
                          


                       </div>

                   </div>

               </div>
           </React.Fragment>
        );
    }
}

export default ProductList;
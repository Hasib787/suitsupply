import React, { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductImages from './ProductImages/ProductImages';
import productInfo from '../../Database';
const ProductInfo = () => {
    const [product, setProduct] = useState({})
useEffect(() => {
    setProduct(productInfo);
},[]);
console.log(product)
    return (
        <div className='row w-100'>
            <div className='col-md-7'>
            <ProductImages />
            </div>
            <div className='col-md-5'>
                <ProductDetails info={product} />
            </div>
        </div>
    );
};

export default ProductInfo;
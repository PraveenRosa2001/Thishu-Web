import React, { useContext } from 'react';
import { HomeContext } from '../Context/HomeContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(HomeContext);
  const { productId } = useParams();

  // Find the product by id
  const product = all_product?.find((e) => e.id === Number(productId));

  // If product not found, show error message
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;

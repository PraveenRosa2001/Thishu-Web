import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { HomeContext } from '../Context/HomeContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Components/Item/item';

const ShopCategory = (props) => {
    const { categorizedProducts } = useContext(HomeContext);

    // Get products for the specific category from the context
    const categoryProducts = categorizedProducts[props.category] || [];

    console.log("Category from props:", props.category); // Verify the category prop
    console.log("Products in this category:", categoryProducts); // Verify products in category

    return (
        <div className='shop-category'>
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of {categoryProducts.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shopcategory-products">
                {categoryProducts.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
            
        </div>
    );
}

export default ShopCategory;

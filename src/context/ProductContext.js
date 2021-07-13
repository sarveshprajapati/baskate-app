import React,{createContext, useState} from 'react';

export const ProductContext = createContext();

function ProductContextProvider(props) {
    const [products,setProducts]=useState([
       'lettuce', 'apples', 'oranges', 'peaches', 'pears', 'prunes', 'plums',
       'strawberries', 'raisins', 'kiwi', 'pineapple', 'bananas', 'cauliflower',
       'broccoli', 'carrots', 'garlic', 'celery', 'green peppers', 'corn', 'tomatoes', 
       'mushrooms', 'rice', 'canned vegetables', 'cheese', 'hamburger', 'butter', 'chicken', 
       'fresh fish', 'pork chops', 'pork and beans', 'meat balls', 'lunch meat', 'wieners', 
       'wiener buns', 'eggs', 'bread', 'butter', 'jelly', 'cheese', 'potatoes', 'pasta', 'ketchup', 
       'yogurt', 'cottage cheese', 'cereal', 'milk', 'orange juice', 'apple juice', 
       'prune juice', 'ice cream', 'soda', 'soup', 'macaroni', 'cheese', 'oatmeal', 
       'chocolate milk', 'bread', 'mayonnaise', 'mustard', 'rice', 'laundry soap', 
       'dish soup', 'dishwasher soap', 'tissue', 'toilet paper', 'paper towels', 'beer', 
       'cigarettes', 'cake mixes', 'crackers', 'chocolate chips', 'hot chocolate mix', 
       'coffee', 'tea', 'cooking oil', 'vinegar', 'flour', 'sugar', 'salt', 'pepper', 'onions', 
       'cinnamon', 'ginger', 'onion salt', 'garlic powder', 'bakery foods', 'baking soda', 
       'flour', 'vanilla', 'cake mixes', 'noodles', 'spaghetti', 'potato chips'
    ]);
    const [cart,setCart] = useState([]);
    const [orders,setOrders]=useState([]);
      return (
        <ProductContext.Provider value={{products,setProducts,cart,setCart,orders,setOrders}} >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider

const addCartItems = ( cartItems, productToAdd) => {
    //check if the product exist
    
    //use the find method to check if id is the same
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    
    
    
    if(existingCartItem){
        //if existingCartItem is found its quantity is ioncreased
        return cartItems.map((cartItem) =>  cartItem.id ===  productToAdd.id ? {...cartItem,quantity:cartItem.quantity +1 } :cartItem)
    }
    
    return [...cartItems, {...productToAdd, quantity:1}];
    
    }
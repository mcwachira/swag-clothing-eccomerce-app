import { createContext , useState , useEffect} from "react";



//helper functions to add items to cart
const addCartItems = ( cartItems, productToAdd) => {

    //check if exist in the cart

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem){
        //if existingCartItem is found its quantity is increased
        return cartItems.map((cartItem) =>  cartItem.id ===  productToAdd.id ? {...cartItem,quantity:cartItem.quantity +1 } :cartItem)
    }


    //if no existing cart item 
    return[...cartItems, {...productToAdd, quantity:1}]
}

const removeCartItems = ( cartItems, productToRemove) => {

    //check if exist in the cart

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id)


    //existing cart item quantity is one remove it from cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id ) 
     }
 
        //if existingCartItem is found its quantity is increased
        return cartItems.map((cartItem) =>  cartItem.id ===  productToRemove.id ? {...cartItem,quantity:cartItem.quantity -1 } :cartItem)

    }


const deleteCartItems = ( cartItems, productToDelete) => {
    
 return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id )  
}

export const CartContext =  createContext({
    isCarOpen:false,
    setIsCartOpen:() => {},
    cartItems:[],
    addItemsToCart:() => {},
    cartCount:0,
    cartTotal:0,
    removeItemsFromCart:() => {},
    deleteItemsInCart:() => {},

})




export const CartProvider = ({children}) => {
const [isCartOpen, setIsCartOpen] = useState(false)
const [cartItems, setCartItems] = useState([])
const [cartCount, setCartCount] = useState(0)
const [cartTotal, setCartTotal] = useState(0)

useEffect(() => {
    const newCartCount =cartItems.reduce(( total, cartItem) =>  cartItem.quantity + total, 0)
    setCartCount(newCartCount)
    },[cartItems])

    useEffect(() => {
        const newCartTotal=cartItems.reduce(( total, cartItem) =>  total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
        },[cartItems])

const addItemsToCart = (productToAdd) => {
setCartItems(addCartItems(cartItems, productToAdd))
}
const removeItemsFromCart = (productToRemove) => {
    setCartItems(removeCartItems(cartItems, productToRemove))
    }


    const deleteItemsInCart = (productToRemove) => {
        setCartItems(deleteCartItems(cartItems, productToRemove))
        }
const value ={
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    removeItemsFromCart,
    deleteItemsInCart,
    cartCount,
    cartTotal


}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
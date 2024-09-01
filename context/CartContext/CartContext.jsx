import { data } from "autoprefixer";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";






export const CartContext = createContext()

export default function CartContextProvider({ children }) {


    const token = localStorage.getItem('Token')
    const headers = { token }


    const successNotify = (msg) => toast.success(msg);
    const warningNotify = (msg) => toast.warn(msg);

    const [cartDetails, setCartDetails] = useState(null)




    useEffect(() => {



    })



    function getLoggedUserCart() {

        return axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
            headers
        }).then((data) => data.data).catch((err) => err.response)


    }

    function addProductToTheCart(productId) {

        return axios.post('https://ecommerce.routemisr.com/api/v1/cart', { productId }, {
            headers
        }).then((data) => { successNotify(data.data.message); return data.data }).catch((err) => { warningNotify(err.response.data.message); return err.response.data })


    }

    function updateCartProductQuantity(id, count) {

        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, { count }, {
            headers
        }).then((data) => { successNotify('Quantity Updated'); return data.data }).catch((err) => { warningNotify(err.response.data.message); return err.response.data })


    }

    function removeSpecificCartItem(id) {

        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            headers
        }).then((data) => { successNotify('Removed scuccesfully'); return data.data }).catch((err) =>{ warningNotify(err.response.data.message); return err.response.data })


    }


    function clearAllUserCart() {

        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers
        }).then((data) => { successNotify('All CartItems have been removed'); return data.data }).catch((err) => { warningNotify(err.response.data.message); return err.response.data })


    }






    return <CartContext.Provider value={{ getLoggedUserCart, setCartDetails, cartDetails, addProductToTheCart, updateCartProductQuantity, removeSpecificCartItem, clearAllUserCart }}>
        {children}
    </CartContext.Provider>
}
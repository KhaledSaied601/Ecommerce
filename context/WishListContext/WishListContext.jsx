import { data } from "autoprefixer";
import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const wishListContext = createContext()

export default function WishListContextProvider({ children }) {


    const token = localStorage.getItem('Token')
    const headers = { token }
    const [wishList, setWishList] = useState(null)
    const [updatedWishListIds, setUpdatedWishListIds] = useState([])


    const successNotify = (msg) => toast.success(msg);
    const warningNotify = (msg) => toast.warn(msg);

    function GetLoggedUserWishList() {

        return axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
            headers
        }).then((data) => data.data).catch((err) => err.data)


    }

    function AddProductToWishList(id) {

        return axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
            "productId": id
        }, {
            headers
        }).then((data) => { successNotify('Successfully Added to Wish List'); return data.data }).catch((err) => { warningNotify(err.data.message); return err.data })


    }
    function RemoveProductFromWishList(id) {

        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
            headers
        }).then((data) => { successNotify('Successfully Removed from Wish List'); return data.data }).catch((err) => { warningNotify(err.data.message); return err.data })


    }








    return <wishListContext.Provider value={{ GetLoggedUserWishList, wishList, setWishList, AddProductToWishList, setUpdatedWishListIds, RemoveProductFromWishList }}>
        {children}
    </wishListContext.Provider>



}
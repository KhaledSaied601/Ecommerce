import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'






function useProduct() {



    const Products = useQuery(
        {
            queryKey: ['products'],
            queryFn: () => axios.get('https://ecommerce.routemisr.com/api/v1/products'),
            select: (data) => data.data.data

        }
    )


    return Products

}

export default useProduct


import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

function useCategory() {



    const allCategories = useQuery({
        queryKey: ['categories'],
        queryFn: () => axios.get('https://ecommerce.routemisr.com/api/v1/categories'),
        select: (data) => data.data.data
    })

    return allCategories

}

export default useCategory

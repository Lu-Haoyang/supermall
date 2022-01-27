import axios from './axios'

export function getAllCategory(){
    return axios({
        url: '/category'
    })
}
export function getSubCategory(maitKey) {
    return axios({
        url: '/subcategory',
        params:{
            maitKey
        }
    })
}
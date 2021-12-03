import axios from "axios";

const apiUrl = 'http://localhost:3001'

export const fetchProductById = async (productId: string) => {
    const response = await axios.get(`${apiUrl}/products/${productId}`)
    return response.data
}
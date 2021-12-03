import {RequestHandler} from "express";

const products = [
    {
        id: '1',
        title: 'Tena lady',
        description: 'The famous marketplace product'
    },
    {
        id: '2',
        title: 'Bepanthene',
        description: 'The glorious bepanthene eye and nose oitment',
    }
]

class ProductRepository {
    static findById = (productId: string) => {
        return products.find(it => it.id === productId)
    }

    static getAll = () => {
        return products
    }
}


export const getProductHandler: RequestHandler = (req, res) => {
    const productId = req.params['productId']
    const product = ProductRepository.findById(productId)
    return res.json(product)
}

export const getAllProductsHandler: RequestHandler = (req, res) => {
    return res.json(ProductRepository.getAll())
}
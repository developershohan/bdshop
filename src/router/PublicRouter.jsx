import React from 'react'
import Layout from '../component/Layout/Layout'
import Home from '../customer/pages/Home/Home'
import Product from '../customer/pages/Product/Product'

const PublicRouter = [
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/product",
                element: <Product/>
            }
        ]
    }
]

export default PublicRouter
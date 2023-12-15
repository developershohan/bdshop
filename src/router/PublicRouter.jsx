
import Layout from '../component/Layout/Layout'
import Cart from '../customer/pages/Cart/Cart'
import Home from '../customer/pages/Home/Home'
import Product from '../customer/pages/Product/Product'
import SingleProduct from '../customer/pages/SingleProduct/SingleProduct'

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
            },
            {
                path: "/product/:id",
                element: <SingleProduct/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
        ]
    }
]

export default PublicRouter
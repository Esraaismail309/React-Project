import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"

function Shop() {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        feachProducts()
    }, [])
    const feachProducts = () => {
        return fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    return (
        <div>
            {products
                ?
                (<div className="container mt-5 p-5">
                    <section className="d-flex flex-wrap justify-content-center ">
                        {products.map(product => {
                            return (
                                <Link to={`/shop/${product.id}`} key={product.id} className="container w-25 border me-2 mb-4 shadow rounded-3 text-decoration-none">
                                    <div className=" my-3 d-flex justify-content-center" >
                                        <img className="w-50" src={product.image} alt="" />
                                    </div>
                                    <h5 className="text-primary my-3">{product.title}</h5>
                                    <p className="text-black"><span className="fw-bold my-3">Price</span> : {product.price}</p>
                                    <p className="text-black"> <span className="fw-bold">Rating</span>  : {product.rating.rate}</p>
                                </Link>)
                        })}
                    </section>   
                </div>)
                :
                (<div className="d-flex justify-content-center mt-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>)
            }
        </div>
    )
}
export default Shop
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"

function SingleProduct({ match }) {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getSingleProduct()
    }, [])

    const getSingleProduct = () => {
        return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then(res => res.json())
            // const result=await res.json
            .then(json => setProduct(json))
    }
    return (
        <div>
            {product
                ?
                (<div className="container d-flex justify-content-around align-items-center border mt-5 p-5 shadow">
                    <div className="w-25">
                        <img className="w-100 mt-4" src={product.image} alt="" />
                    </div>
                    <div className="w-50">
                        <h2 className="text-primary mb-4">{product.title}</h2>
                        <p >{product.description}</p>
                        <p><span className="fw-bold text-primary">Category</span> : {product.category}</p>

                        <p><span className="fw-bold text-primary">Price</span> : {product.price}</p>
                        <p><span className="fw-bold text-primary">Rating</span> : {product.rating.rate}</p>
                    </div>
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
export default SingleProduct
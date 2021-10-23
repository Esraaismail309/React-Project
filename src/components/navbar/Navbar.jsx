import { Link } from "react-router-dom"
const Navigation = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand h4 mt-2">PORTFOLIO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link" >Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Counter" className="nav-link" >Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Todo" className="nav-link" >ToDo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="nav-link" >LogIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Register" className="nav-link" >Register</Link>
                        </li>

                      
                    </ul>

                </div>
            </div>
        </nav>
    </>
    )
}
export default Navigation
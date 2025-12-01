import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
            <Header />
            <div className="container">
                <div className="row mt-3">
                    <Link to="/category/men" className="col-md-2 mx-auto">
                        <div className="card position-relative" style={{ width: "14rem", height: "150px" }}>
                            <img src="https://images.unsplash.com/photo-1740620781160-45129cc82da3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" className="card-img-top rounded-0 h-100 img-fluid" alt="..." />
                            <p className="z-0 position-absolute bg-white text-dark d-flex justify-content-center align-items-center nav-p"
                               style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "100%",
                                    height: "20px",
                                }}
                            >
                                Men
                            </p>
                        </div>
                    </Link>
                    <Link to="/category/women" className="col-md-2 mx-auto">
                        <div className="card position-relative" style={{ width: "14rem", height: "150px" }}>
                            <img src="https://images.unsplash.com/photo-1713778480925-7ac25bdfa723?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" className="card-img-top rounded-0 h-100 img-fluid" alt="..." />
                            <p className="z-0 position-absolute bg-white text-dark d-flex justify-content-center align-items-center nav-link"
                               style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "100%",
                                    height: "20px",
                                }}
                            >
                                Women
                            </p>
                        </div>
                    </Link>
                    <Link to="/category/kid" className="col-md-2 mx-auto">
                        <div className="card position-relative" style={{ width: "14rem", height: "150px" }}>
                            <img src="https://plus.unsplash.com/premium_photo-1661719873453-6c3652949446?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" className="card-img-top rounded-0 h-100 img-fluid" alt="..." />
                            <p className="z-0 position-absolute bg-white text-dark d-flex justify-content-center align-items-center nav-link"
                               style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "100%",
                                    height: "20px",
                                }}
                            >
                                Kids
                            </p>
                        </div>
                    </Link>
                    <Link to="/category/electronics" className="col-md-2 mx-auto">
                        <div className="card position-relative" style={{ width: "14rem", height: "150px" }}>
                            <img src="https://images.unsplash.com/photo-1720983590448-28b749bd403d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" className="card-img-top rounded-0 h-100 img-fluid" alt="..." />
                            <p className="z-0 position-absolute bg-white text-dark d-flex justify-content-center align-items-center nav-link"
                               style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "100%",
                                    height: "20px",
                                }}
                            >
                                Electronics
                            </p>
                        </div>
                    </Link>
                    <Link to="/more" className="col-md-2 mx-auto">
                        <div className="card position-relative" style={{ width: "14rem", height: "150px" }}>
                            <img src="https://plus.unsplash.com/premium_photo-1670869657555-53e309f8adc2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1400" className="card-img-top rounded-0 h-100 img-fluid" alt="..." />
                            <p className="z-0 position-absolute bg-white text-dark d-flex justify-content-center align-items-center nav-p"
                               style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "100%",
                                    height: "20px",
                                }}
                            >
                                More+
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="container ms-2 mt-4">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" alt="" className="w-100 img-fluid" style={{height: "450px"}} />
                </div>
                <div className="row p-3">
                    <div className="col-sm-6 p-3">
                        <div className="card border-0 p-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1729808785118-bbfd41d0149c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" className="img-thumbnail border-0" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <p>NEW ARRIVALS</p>
                                        <h3 className="mt-4">Winter Collection</h3>
                                        <p>Check out the best winter collection to stay warm in style this season</p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 p-3">
                        <div className="card border-0 p-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1614172745174-d76736beb78b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" className="img-thumbnail border-0" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <p>NEW ARRIVALS</p>
                                        <h3 className="mt-4">Summer Collection</h3>
                                        <p>Check out the best summer collection to stay stylish this season</p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;







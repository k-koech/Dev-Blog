import { Outlet, Link } from "react-router-dom";
import Footer from "./footer/Footer";

export default function Layout() 
{

  return (
    <>
    <div className="container app-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 pt-4 pb-3">
            <a className="navbar-brand font-weight-bolder" href="/">
                <span className="h1"><span className="text-danger">Dev</span>Kenya</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup ">
                <div className="navbar-nav ">
                    <Link className="nav-link active" to="/">Home</Link>
                    <Link className="nav-link active" to="/blogs">Blogs</Link>
                    <Link className="nav-link active" to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
        
        <Outlet />
        
    </div>
    <Footer/>
    </>
  )

};


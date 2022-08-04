import "./Footer.css"
export default function Footer()
{
    return (          
        <footer className="section bg-dark ">
        <div className="container row footer-container p-5 mx-auto">
          <div className="col-md-4">
            <h6 className="footer-heading text-white text-uppercase font-weight-bolder ">Informations</h6>
            <div className="mt-4">
              <h6><a className="nav-link active text-white" href="#!">Sitemap</a></h6>
              <h6><a className="nav-link active text-white" href="#!">Our team</a></h6>
              <h6><a className="nav-link active text-white" href="#!">Terms of Services</a></h6>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="footer-heading text-uppercase font-weight-bolder text-white">Links</h6>
            <div className="mt-4">
              <h6><a className="nav-link active text-white" href="#!">Blog</a></h6>
              <h6><a className="nav-link active text-white" href="#!">Home</a></h6>
              <h6><a className="nav-link active text-white" href="#!">Job Offers</a></h6>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="footer-heading text-uppercase font-weight-bolder text-white">Contact Us</h6>
            <div className="mt-4">
              <h6><a className="nav-link active text-white" href="#!">koechkevin97@gmail.com</a></h6>
              <h6><a className="nav-link active text-white" href="#!">0725801772</a></h6>
              <h6><a className="nav-link active text-white" href="#!">Privacy Policy</a></h6>
            </div>
          </div>


        </div>
        <div className="text-center mt-5 text-white p-4">
          <p className="footer-alt">2022 © DevBlog, All Rights Reserved</p>
        </div>
      </footer>
    )
}









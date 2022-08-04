
import "./Home.css"
import homepage from "../images/homepage.png";
export default function Home() 
{
    
  return (
    <div className="container-fluid landingPage row  ">
               {/* <h1>Home</h1> */}
      <div className="col-md-5 home-col1">
        <div className="centered w-100">
         <h1 className="font-weight-bold">Learn With DevKenya</h1>
         <div className="d-flex justify-content-center my-2">
              <button className="btn btn-sm btn-success mx-1">Easy</button>
              <button className="btn btn-sm btn-success mx-1">Simple</button>
              <button className="btn btn-sm btn-success mx-1">Direct to the point</button>
         </div>
         <button className="btn btn-outline-success font-weight-bolder px-5 mt-4">Go to blog</button>
        </div>
      </div>
      <div className="col-md-7 home-image">
        <div className="centered">
         <img src={homepage} alt="Loading"  />
        </div>
      </div>
    </div>
    
  )
}

import React, { Component ,Container,url} from "react";
import { Link } from "react-router-dom";
import CarouselHomePage from "./carouselhomepage.js"
import Secondslide from './img/Secondslide.jpg'
import  './styles.css'
import Footer from './footer.js'

class Home extends Component {
  render() {
    return (
       <div>

          <div  className="text-center  ml-auto " style= {{ 
            backgroundImage: `url('https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/24/22/istock-639223110-3.jpg?w968h681')`,
             height:'300px',
             width:'auto',
             paddingTop: 'auto',
             paddingBottom: 'auto',
          
            
            }}
            >
         <h1><strong>Fashion Shop</strong></h1>
            <div className="container">
           
        <div className="row">
           
            <div className="col-md-6" style={{paddingTop: '200px',
                  }}>
              <Link
                to="/Women"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
     
                }}
                className="btn btn-primary active"
              >
                Shop Women
              </Link>
            </div>
            <div className="col-md-6" style={{paddingTop: '200px',
                  }}>
              <Link
                to="/Men"
                style={{
                  width: "140px",
                  borderRadius: "6px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-primary active"
              >
                Shop Men </Link>
            </div>
          
          </div>
        </div>
        </div>
        <div >
         < CarouselHomePage />
         <Footer />
         </div>
         </div>

       

      
       
    

   
      
    );
  }
}
export default Home;
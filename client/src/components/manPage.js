import React , {Component}from 'react'
import Footer from './footer.js'
import { Link } from "react-router-dom";

class ManPage extends Component {
    render() {
      return (
         <div>
  
            <div  className="text-center  ml-auto " style= {{ 
              backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2020/FASHION/FLIP/06_JUNE/02_MEN/01_LOUNGEWEAR_DESKTOP.jpg')`,
               height:'300px',
               width:'auto',
               paddingTop: 'auto',
               paddingBottom: 'auto',
            
              
              }}
              >
        
              <div className="container">
             
          <div className="row">
             
              <div className="col-sm" style={{paddingTop: '200px',
                    }}>
                <Link
                  to="/clotting"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
       
                  }}
                  className="btn btn-primary active"
                >
                  Clotting
                </Link>
              </div>
              <div className="col-sm" style={{paddingTop: '200px',
                    }}>
                <Link
                  to="/jeans"
                  style={{
                    width: "140px",
                    borderRadius: "6px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-primary active"
                >
                  Jeans</Link>
              </div>
              <div className="col-sm" style={{paddingTop: '200px',
                    }}>
                <Link
                  to="/shoes"
                  style={{
                    width: "140px",
                    borderRadius: "6px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-primary active"
                >
                  Shoes</Link>
              </div>
              <div className="col-sm" style={{paddingTop: '200px',
                    }}>
                <Link
                  to="/trainers"
                  style={{
                    width: "140px",
                    borderRadius: "6px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-primary active"
                >
                  Trainers</Link>
              </div>
            
            </div>
          </div>
          </div>
          <div >
         
           <Footer />
           </div>
           </div>
  
         
  
        
         
      
  
     
        
      );
    }
  }
  export default ManPage;
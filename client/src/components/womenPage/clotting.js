import React from 'react';
import Footer from '../footer.js';


class clottingPage extends Component {
    render() {
      return (
         <div  className="a-fixed-left-grid-col a-col-right" style={{paddingLeft:"0px", width:"100%", float:"right"}}>
  
        
              <div className="container lp s-padding-left-small twoColumn">
             
          <div className="row">
             
              <div className="a-fixed-left-grid-col a col-left" style={{width: '200px', marginLeft:"-200px",float:"none"
                    }}>
                <Link
                  to="/tops,t-shirts"
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
                  to="/bags"
                  style={{
                    width: "140px",
                    borderRadius: "6px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-primary active"
                >
                  Bags</Link>
              </div>
            
            </div>
          </div>
          </div>
          <div >
         
           <Footer />
           </div>
          
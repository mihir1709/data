import React from "react";
import Footer from "./Footer";
import Header from "./Header";
 
const Layout = ({ children }) => {
  return (
    <div>
   
      <Header />
      <main style={{ minHeight: "70vh", marginTop: "30px" ,alignContent:"left", padding:"20px"
      }}>
      
    
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

Layout.defaultProps = {
  title: "DATA STRUCTURE",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "summer-term",
};

export default Layout;

import React from "react";

function Footer(){
    const current_year=new Date().getFullYear();
    return (<footer>
       <p>Copyright &copy; {current_year} </p>
    </footer>
        
    )
}
export default Footer;
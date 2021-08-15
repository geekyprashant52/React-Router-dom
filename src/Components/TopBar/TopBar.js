import React from 'react';
import { Link } from 'react-router-dom';
import "./TopBar.css"
const TopBar = () => {
    return (<>
        <div id="div111">
            <Link className="linkkk" to="/">Home</Link>
            <Link className="linkkk" to="/productdetails">Product Details</Link>
        </div>
    </>)
}
export default TopBar;
import React from 'react';


class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<>
            <div style={{ fontSize: "30px", textAlign: "center" }}>
                Product Details
            </div>
        </>);
    }
}

export default ProductDetails;
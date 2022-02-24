import React, { Component } from "react";
import ImageCard from "./imageCard";

class imagelist extends Component {
   

  render() {
    const container = {
      width: "90%",
      height: "80vh",
      margin: "1rem auto",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      padding: "0.5rem 0.5rem",
      overflowY: "scroll",
    };
    const gridStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gridAutoRow: '10px',
      gridGap: "0 10px",
    };
    
    
   const images  = this.props.images.map((image) =>{
        return (
          <ImageCard 
          image={image} 
          key={image.id} 
          clicked={this.props.changeState}/>
            // <img src={item.urls.small} style={gridItem} 
            // key={item.id} alt={item.alt_description} 
            // onClick={() =>this.props.changeState(item.urls.small)}
            // />
        )
    })

    return (
      <div style={container}>
        <div style={gridStyle}>
          {images}
        </div>
      </div>
    );
  }
}
export default imagelist;

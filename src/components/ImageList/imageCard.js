import React, { Component } from 'react'


class ImageCard extends Component {
    constructor(props){
        super(props);
        this.Imageref = React.createRef();
        this.state = {
            span: 0
        }
    }

    componentDidMount(){
        this.Imageref.current.addEventListener('load', this.setSpan)
    }

    setSpan = () =>{
        const height = this.Imageref.current.clientHeight;
        let span = Math.ceil(height / 10 + 1) ;
        this.setState({span})
    }

    render(){
        return(
            <div style={{gridRowEnd: `span ${this.state.span}`}} onClick={() =>this.props.clicked(this.props.image.urls.small)}>
                <img ref={this.Imageref} src={this.props.image.urls.small} alt={this.props.image.alt_description}/>
            </div>
           )
        
    }
 }
 export default ImageCard;
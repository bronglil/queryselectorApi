import React, { Component } from "react";
import unsplash from "./api/unsplash";
import Imagelist from "./components/ImageList/imagelist";
import Inputfield from "./components/inputField/inputfield";
import Modal from "./components/modal";
// import SearchBar from "./Searchbar";

class App extends Component {
  state = {
    Images: [],
    err: "",
    click: false,
    curIMageUrl: null
  };

  handleClick = (data) =>{
    this.setState({click: true, curIMageUrl: data})

    console.log(data)
  }

  chnageStateToPrev = (e) =>{
    this.setState({click: !this.state.click})
     
  }

   handleFormSubmit= async(data)=>{
    const response = await unsplash.get('/search/photos', {
      params: {
        query: data,
      },
    });

    this.setState({ Images: response.data.results });
  }

  render() {
    return (
      <>
        <Inputfield onsubmit={this.handleFormSubmit} />
        <Imagelist images={this.state.Images} changeState={this.handleClick}/>
        <Modal clickState={this.state.click} ImageUrl={this.state.curIMageUrl} setShowModal={this.chnageStateToPrev}/>
      </>
    );
  }
}

export default App;

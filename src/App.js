import React, { Component } from "react";
import Home from "./components/Home";
import MapPage from "./components/MapPage";

class App extends Component {
  state = {
    location: {
      lat: null,
      lon: null
    }
  };
  getLocationClick = e => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }
      });
      console.log(this.state.location);
    });
  };
  render() {
    const Page = this.state.location.lat ? (
      <MapPage />
    ) : (
      <Home onClick={this.getLocationClick} />
    );
    return <div className="App">{Page}</div>;
  }
}

export default App;

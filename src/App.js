import React, { Component } from "react";
import Home from "./components/Home";
import MapPage from "./components/MapPage";
import backgroundImage from "./images/background.jpg";
import axios from "axios";

class App extends Component {
  state = {
    isLoading: false,
    infoIsLoaded: false,
    location: {
      lat: null,
      lon: null
    },
    restaurant: {}
  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      if (position.coords.latitude) {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        });
        this.getApiInfo();
      }
    });
  };
  getApiInfo = e => {
    // this make sure to get location first
    if (this.state.location.lat == null) {
      this.getLocation();
      return false;
      // return because getLocation will call this function after getting user location
    }
    this.setState({ isLoading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.location.lat},${this.state.location.lon}`
      )
      .then(res => {
        if (res.data && res.error !== "no") {
          this.setState({
            infoIsLoaded: true,
            isLoading: false,
            restaurant: res.data
          });
        }
      })
      .catch(() => {
        this.setState({ infoIsLoaded: false, isLoading: false });
      });
  };
  render() {
    // simple routing based on infoIsLoaded from state ; false > Home ; true > MapPage
    // we have only tow views so no need for react router
    const Page =
      !this.state.infoIsLoaded && true ? (
        <Home isLoading={this.state.isLoading} onClick={this.getApiInfo} />
      ) : (
        <MapPage
          restaurant={this.state.restaurant}
          isLoading={this.state.isLoading}
          onClick={this.getApiInfo}
        />
      );
    return (
      <div className="App">
        <div
          className="-z-10 fixed bg-cover w-full h-full"
          style={{
            background: `url(${backgroundImage})`,
            backgroundSize: "cover"
          }}
        />
        <div className="flex sm:w-9/12 md:w-8/12 lg:w-1/2 h-full min-h-screen mx-auto bg-light-500">
          {Page}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'

class MapPage extends Component {
    state = {
        restaurant: {
          error: "no",
          name: "SPĒLL",
          id: "5c801687492814002ce8c7a3",
          link: "https://foursquare.com/v/5c801687492814002ce8c7a3",
          cat: "Coffee Shop",
          catId: "4bf58dd8d48988d1e0931735",
          rating: "-1",
          lat: "26.305111301326",
          lon: "50.195476886357",
          Ulat: "50.2017993",
          Ulon: "26.2716025",
          open: "",
          image: []
        }
      };
    
      componentDidMount() {
        // axios
        //   .get(
        //     "https://www.wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&g et_param=value")
        //   .then(res => {
        //     console.log(res);
        //     // this.setState({
        //     //     lng = res.data.lng,
        //     // });
        //   });
      }
    render() {
        return (
            <div>
              map page
            </div>
        )
    }
}
export default MapPage
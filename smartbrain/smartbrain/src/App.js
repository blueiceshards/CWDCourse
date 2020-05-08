import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css';

const app = new Clarifai.App({ apiKey: 'e96b30b256814ebb9b01bc9b7bf2c256' });

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box; //grab first bounding box index 0 of array. 
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    //now, we want to return an object that is going to fill up the box state.
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route }); /* need to dynamically change route cannot be route: 'home' */
  }

  render() {
    const { isSignedIn, box, imageUrl, route } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home'
          ?
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl} /> {/* so that in FaceRecognition.js you can use this prop. */}
          </div>
          :
          (
            route === 'signin' || route === 'signout'
              ?
              <Signin onRouteChange={this.onRouteChange} />
              :
              <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;

/* 

Old render before destructuring clean up:

render() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
      {this.state.route === 'home'
        ?
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /> 
        </div>
        :
        (
          this.state.route === 'signin'
            ?
            <Signin onRouteChange={this.onRouteChange} />
            :
            <Register onRouteChange={this.onRouteChange} />
        )
      }
    </div>
  );
} */
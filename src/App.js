import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import { Vector3, Euler } from 'three';
import logo from './logo.svg';
import './App.css';

class Simple extends Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, otherwise react will think something
    // has changed if we use new within the render function.
    this.cameraPosition = new Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new Euler()
    };

    this._onAnimate = () => {
      // this will get called every frame
      this.setState({
        cubeRotation: new Euler(
          this.state.cubeRotation.x + 0.001,
          this.state.cubeRotation.y + 0.01,
          0
        )
     });
    };
  }

  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
        <React3
          mainCamera="camera"
          width={width}
          height={height}
          onAnimate={this._onAnimate}
        >
          <scene>
            <perspectiveCamera
              name="camera"
              fov={75}
              aspect={width / height}
              near={0.1}
              far={1000}
              position={this.cameraPosition}
            />
            <mesh rotation={this.state.cubeRotation} >
              <boxGeometry
                width={1}
                height={1}
                depth={1}
              />
              <meshBasicMaterial color={0xfdfdfd} />
            </mesh>
          </scene>
        </React3>
    );
  }
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <Simple />
        </div>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;

// // src/App.js
// import React from 'react';
// import './App.css';
// import Profile from './Profile';
// import Connections from './Connections';

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       showProfile: true,
//     }

//     this.changeProfile = this.changeProfile.bind(this);
//   }

//   changeProfile() {
//     const { showProfile } = this.state;

//     this.setState({ showProfile: !showProfile });
//   }

//   render() {
//     const { showProfile } = this.state;
//     return (
//       <div className="gitNetwork d-flex flex-column justify-content-center">
//         {showProfile ? <Profile /> : null}
//         <div className="central d-flex justify-content-center">
//           <button
//             className="btn btn-dark align-self-center"
//             type="button"
//             onClick={this.changeProfile}
//           >
//             Mostrar / Ocultar Perfil
//           </button>
//         </div>
//         <Connections />
//       </div>
//       // <div>leonardo</div>
//     );
//   }
// }

// export default App;

import React from 'react';
import './App.css';
import FullProfile from './FullProfile';

class App extends React.Component {

  state = {
    showProfile: true,
  }

  handleProfile = async () => {
    this.setState(({ showProfile }) => ({
      showProfile: !showProfile,
    }));
  }

  render() {
    const { showProfile } = this.state;
    return (
      <div>
        <button onClick={this.handleProfile}>{showProfile ? 'Mostrar perfil aleatório' : 'Ocultar perfil'}</button>
        {!showProfile
          ? <FullProfile />
          : null}
      </div>
    );
  }
}

export default App;
import React from 'react';

class FullProfile extends React.Component {
  // constructor() {
  //   super();

  // }

  state = {
    hasLoading: true,
  }

  profileFetch = async () => {
    const { hasLoading } = this.state;
    const URL = 'https://api.randomuser.me/';
    try {
      const response = await fetch(URL)
      const dataJson = await response.json()
      console.log(dataJson)
      this.setState({ api: dataJson, hasLoading: !hasLoading })
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.profileFetch();
  }

  render() {
    const { api, hasLoading } = this.state;
    return (
      <div>
        {hasLoading
          ? (<div>Carregando...</div>)
          : (
            api.results.map(({ email, name: { first, last } }) => {
              return (
                <div key={email}>{`${first} ${last}`}</div>
              );
            })
          )
        }
      </div>
    );
  }
}

export default FullProfile;

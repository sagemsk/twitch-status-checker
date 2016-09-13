import React from 'react';

import SearchBar from './containers/SearchBar';
import StreamerList from './containers/StreamerList';

class Main extends React.Component {
  render() {
    return (
      <div className="container twitchSearchApp">
        <h1 className="title">Twitch Status Checker</h1>
        <SearchBar />
        <StreamerList />
      </div>
    );
  }
}

export default Main;
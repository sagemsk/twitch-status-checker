import React from 'react';
import { connect } from 'react-redux';

class StreamerList extends React.Component {
  renderList() {
    return this.props.streamers.map(name => {
      return (
        <li key={name._id} className="list-group-item streamers">
          <a href={`http://www.twitch.tv/${name.display_name}`} target="_blank">
            <img src={name.logo} alt={name.display_name} className="navbar-brand streamerLogo" />
            <span className="streamerName">{name.display_name}</span>
            <p className="streamTitle">{name.status ? name.status : 'OFFLINE'}</p>
            <span className="streamerGame"><strong>Playing: </strong>{name.game ? name.game : '-'}</span>
          </a>
        </li>
      );
    });
  }

  render() {
    if (this.props.streamers.length === 0) {
      return <div className="list-group-item waiting">Enter your Favorite Streamers!</div>
    }

    return (
      <div className="row">
        <ul className="list-group" id="streamerList">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    streamers: state.streamers
  };
}

export default connect(mapStateToProps)(StreamerList);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import * as actionCreators from '../../actions/index';
import { valueInArray } from '../../util/helper';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    let input = e.target.value;
    this.setState({ term: input });
  }

  onFormSubmit(e) {
    e.preventDefault();
    let input = this.state.term;

    if (valueInArray(input, this.props.streamers)) {
      toastr.error('Streamer already in the list.');
      this.setState({ term: '' });
      return;
    }

    this.props.fetchStreamer(input);
    this.setState({ term: '' });
    toastr.success('Streamer Added!');
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          type="text" 
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Enter a twitch streamer" 
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Find</button>
        </span>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { streamers: state.streamers };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
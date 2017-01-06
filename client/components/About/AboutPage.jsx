import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { incrementCounter } from '../../actions';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  };

  handleClick() {
    this.props.incrementCounter();
  };

  render() {
    return (
      <div>
        <h1>This is ohiock's Redux Starter</h1>
        <p>I built this to help me start my React projects faster. Maybe you'll find it useful, too!</p>
        <p>Test out this <Link to='/does-not-exist'>404 page</Link>.</p>
        <button onClick={ this.handleClick }>Clicked { this.props.count }</button>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    count: state.counterState.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementCounter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

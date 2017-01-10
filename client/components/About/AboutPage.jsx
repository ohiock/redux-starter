import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { increment } from '../../actions/counterAction';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.props.increment();
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
    count: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

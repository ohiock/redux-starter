import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { incrementAsync } from '../../../actions/counterAction';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.incrementAsync();
  }

  render() {
    return (
      <div>
        <h1>Super Cool Counter Logic!</h1>
        <p>This button logic uses a Redux Saga.</p>
        <button onClick={this.handleClick}>Clicked {this.props.counter} times</button>
        <br />
        <p>Also, check this <Link to="/does-not-exist">404 page</Link> out.</p>
      </div>
    );
  }
}

AboutPage.propTypes = {
  incrementAsync: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

const mapStateToProps = state => (
  {
    counter: state.counterReducer.counter,
  }
);

const mapDispatchToProps = dispatch => (
  {
    incrementAsync: () => dispatch(incrementAsync()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

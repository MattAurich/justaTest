
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let buttonText;
    let buttonAction;
    if (this.props.store.status === 'logged in') {
      buttonText = 'LogOut';
      buttonAction = (event) => { this.props.handleLogout(); this.state.value = ''; event.preventDefault(); };
    } else {
      buttonText = 'LogIn';
      buttonAction = (event) => { this.props.handleLogin(this.state); event.preventDefault(); };
    }

    return (
      <form onSubmit={buttonAction}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value={buttonText} />
        <h1>Current state is {this.props.store.status + ' as ' + this.props.store.value}</h1>
      </form>
    );
  }
}

const mapStateToProps = (state) => { 
  return { store: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: state => dispatch({
      type: 'LOGIN',
      value: state.value,
    }),
    handleLogout: () => dispatch({
      type: 'LOGOUT',
    }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

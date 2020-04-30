import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { IRootState } from './store';
import { Actions } from './store/types';
import * as actions from './actions';

interface IState {
  inputText: string
}

const mapStateToProps = ({ test }: IRootState) => {
  const { list } = test;
  return { list };
}

const mapDispatcherToProps = (dispatch: Dispatch<Actions>) => {
  return {
    addItem: (item: string) => dispatch(actions.addItemToList(item))
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>

class App extends React.Component<ReduxType> {
  public state: IState = { inputText: '' };

  public onAddClick = () => {
    const { addItem } = this.props;
    addItem(this.state.inputText);
    this.setState({ inputText: '' });
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputText: e.target.value
    })
  }

  render() {
    const { list } = this.props;
    const { inputText } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
            <input value={inputText} onChange={this.onInputChange} />
            <button onClick={this.onAddClick}>Add</button>
          </p>
          <ul>
            {list.map(l => <li key={l}>{l}</li>)}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);

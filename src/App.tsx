import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { IRootState } from './store';
import { Actions } from './store/types';
import * as actions from './actions';

import Notification from './components/Notification';
import Hero from './components/Hero';

import './styles/App.scss';

interface IState {
  inputText: string
}

const mapStateToProps = ({ main }: IRootState) => {
  const { list } = main;
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
    return (
      <div className="App">
        <Notification />
        <Hero />
      </div >
    )
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);

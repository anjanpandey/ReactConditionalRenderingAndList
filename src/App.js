import React, { Component } from 'react';
import Validation from './components/Validation';
import Char from './components/Char';
import './App.css';

class App extends Component {
  // create a state
  state = {
    input:''
  }

  // function that updates the state as input changes
  inputChangeHandler = (event) => {
    this.setState({
      input:event.target.value
    });
  }

  // function that deletes the character 
  deleteCharCardHandler = (index) => {
    const letters = [...this.state.input.split('')];
    letters.splice(index, 1);
    this.setState({input:letters.join('')});
  }

  render() {
    let letter = null, display = null;
    const LENGTH = this.state.input.length;
    var color='';

    // validation for input
    if(LENGTH > 0) {
      // set display fo length
      display = (
        <div>
          <p>Your text is: {this.state.input}</p>
          <p>The length of your input is {LENGTH}.</p>
        </div>
      );

      // set display for characters
      letter = (
        <div className="boxCharContainers">
          {
            this.state.input.split('').map((letter, index) => {
              return <Char letter={letter} key={index} click={() => this.deleteCharCardHandler(index)} />
            })
          }
        </div>  
        );  
        
        // conditional validation coloring
        color = LENGTH < 5 ? "red":"green";
    }

    return (
      <div className="App">
        <div className="inputContainer">
                <input className="input" 
                        value={this.state.input} 
                        type="text" 
                        placeholder="type something here.."
                        onChange={(event) => {this.inputChangeHandler(event)}}/>
            </div>
            {display}
            <Validation length={LENGTH} color={color}/>
            {letter}
      </div>
    );
  }
}

export default App;

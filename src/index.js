const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor() {
    super ();
    this.fontSizes = ["Small", "Medium", "Large", "Extra Large"];
    this.state = {
      fontSize: "medium"
    };
  }
  handleChange = e => {
    this.setState({
      fontSize: e.target.value
    });
  }
  render() {
    let bigSmall = {};
    if (this.state.fontSize === 'Small') {
      bigSmall.fontSize = '8px';
    }
    if(this.state.fontSize === 'Medium') {
      bigSmall.fontSize = '14px';
    }
    if(this.state.fontSize === 'Large') {
      bigSmall.fontSize = '24px';
    }
    if(this.state.fontSize === 'Extra Large') {
      bigSmall.fontSize = '36px';
    }
    return(
      <div>
      {this.fontSizes.map(s => <div>
      <input
      type="radio"
      value={s}
      checked={this.state.fontSize === s}
      onChange={this.handleChange} />{s}</div>)}
      <pre style={bigSmall}>{`
      Self Confident Poem
      by Cody Hess
      
      hi i am a huge poem
      i have so many lines of text
      i do not use this.props like a 
          NERD LOSER POEM
      i use backticks!
      can you make goo dduck noises?
      i bet you cannot make better duck noises
        THAN ME 
      quack 
        QUACK!
      quackquack QUACK
        quackTASTIC
        
      -yaddamaster
    `}</pre>
    </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));


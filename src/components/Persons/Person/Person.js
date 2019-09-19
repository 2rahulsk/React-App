// import React, {Component} from 'react';
// import '../App.css';

// class Person extends Component {

//     render() {
//         return(
//             <div className='App'>
//                 <h1>
//                     I am Rahul
//                 </h1>
//             </div>
//         );
//     }
// }

// export default Person;

import React, { Component } from 'react';
import './Person.css';

class Person extends Component {

    static getDerivedStateFromProps(props,state) {

        console.log('[Person.js getDerivedStateFromProps]', props);
    
        return state;
      }
    
      componentDidMount() {
        console.log('[Person.js componentDidMount]');
      }
    
      shouldComponentUpdate(nextProps, nextState) {
            return true;
      }
    
      getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log('[Person.js getSnapshotBeforeUpdate]');
        return null;
      }
    
      componentDidUpdate() {
        console.log('[Person.js componentDidUpdate]');
      }
    

    render() {

        return (
            <div className='Person'>
            <p onClick={this.props.delete}>I'm  {this.props.name}. I'm {this.props.age} years old.</p>
            <input type="text" onChange = {this.props.change}></input>
            <p>{this.props.children}</p>
           </div>
        );

    }
   
    
}

export default Person;
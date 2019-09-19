import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';

import Validation from '../components/ValidationComponent/Validation';
import Cockpit from '../components/Cockpit/Cockpit';
import CharComponent from '../components/CharComponent/CharComponent';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);
    console.log('[App.js constructor]');
    this.state = {
      persons: [{id:1,name:'Rahul', age : 29},
                {id:2,name:'Tom', age : 29},
                {id:3,name: "Robin", age : 25},
                {id:4,name: "Allen", age : 30}],
      charArray: [],
      showPersons: false,
      showCockpit: true,
      text : ''
    }

  }

  static getDerivedStateFromProps(props,state) {

    console.log('[App.js getDerivedStateFromProps]', props);

    return state;
  }

  componentDidMount() {
    console.log('[App.js componentDidMount]');
  }

  shouldComponentUpdate(nextProps, nextState) {

    // if(nextProps.persons !== this.props.persons) {
    //   console.log('[App.js shouldComponentUpdate]');
    //   return true;
    // } else {
    //   return false
    // }
    
    return true;
  }

  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log('[App.js getSnapshotBeforeUpdate]');
    return null;
  }

  componentDidUpdate() {
    console.log('[App.js componentDidUpdate]');
  }

  nameChangeHandler = (event,id) => {

    // const personIndex = this.state.persons.findIndex(p => {

    //     return p.id === id;
    // });

    const pers = this.state.persons[id];
    pers.name = event.target.value;
    const nameChangedArray = [...this.state.persons];
    nameChangedArray.splice(id,1,pers);

    this.setState({
      persons: nameChangedArray
                });
  }

  toggleShowPersonsHandler = () => {
    const value = this.state.showPersons;
    this.setState( {
      showPersons: !value
    }
      );
  }

  deletePersonHandler = (id) => {
      const newList = [...this.state.persons];
      newList.splice(id,1);
      this.setState({persons: newList});
  }

  checkLengthHandler = (event) => {
 
    const value = event.target.value;
  
    this.setState(
      {text: value,
      charArray: value.split('')}
    );
    
  }

  deleteFromArrayHandler = (event,id) => {
    const newList = [...this.state.charArray];
    newList.splice(id,1);
    this.setState(
      {charArray: newList}
    );
  }

  removeCockpitHandler = (event) => {

      this.setState({showCockpit: !this.state.showCockpit});
  }

  render() {
    console.log('[App.js] render');
    let persons,validationCmp,cockpit = null;

    const charList = (<div>
      {
          this.state.charArray.map((el,i) => {

            return <CharComponent text = {el} delete = {(event) => this.deleteFromArrayHandler(event,i)}></CharComponent>
        })
      }
    </div>);

    if(this.state.showPersons) {
      
      persons =  (<div>
        {
          <Persons persons={this.state.persons} deleted={this.deletePersonHandler} nameChanged={this.nameChangeHandler}></Persons>
        }
      </div>)
      //style.backgroundColor = 'red';
    }

      if(this.state.text.length > 5) {
        validationCmp = (
          
             <Validation text = {"Text Long enough"}></Validation>
          
        );
      } else {
        validationCmp = (
         
               <Validation text = {"Text too short"}></Validation>
          
        );
      } 

      if(this.state.showCockpit) {
        cockpit = (
         
            <Cockpit toggle={this.toggleShowPersonsHandler}></Cockpit>
        
        );
      }

    
    return (
      <div className='App'>
        <button onClick={(event) => this.removeCockpitHandler(event)}>Toggle Cockpit</button>
         {cockpit}
         {persons}
         <input type="text" value={this.state.charArray.join('')} onChange={(event) => this.checkLengthHandler(event)}></input>
         {validationCmp}
         {charList}
      </div>
    );
   // React.createElement('div',{className:'App'},React.createElement('h1',null,`I'm a Text`));
  }

  
}
export default App;
// const App = () => {

//   const [personsState, setPersonsState] = useState({
//     persons: [{name:'Rahul', age : 29},
//               {name:'Tom', age : 29}],
//               otherState: 'some other state values'
//   });

//   const swicthNameHandler = () => {
//     setPersonsState({
//       persons: [{name:'Raghu', age : 29},
//                 {name:'Tommy', age : 28}]
//                 });
//   };

//   const [otherState,setOtherState] = useState({otherState: 'some other state values'});
//   console.log(personsState,otherState);
//   return(
//     <div >
//         <Person  name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//         <Person  name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//         <button onClick = {swicthNameHandler}>switch Name</button>
//       </div>
//   );

// }

//export default App;

  // persons = (
      //   <div>
      //   <Person  
      //   name={this.state.persons[0].name} 
      //   age={this.state.persons[0].age}
        
      //   change={this.nameChangeHandler1}/>

      //   <Person  name={this.state.persons[1].name}
      //    age={this.state.persons[1].age}
        
      //    change={this.nameChangeHandler2}/>
      //   </div> 
      // );

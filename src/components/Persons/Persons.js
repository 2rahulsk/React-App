import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{ 

  static getDerivedStateFromProps(props,state) {

    console.log('[Persons.js getDerivedStateFromProps]', props);

    return state;
  }

  componentDidMount() {
    console.log('[Persons.js componentDidMount]');
  }

  shouldComponentUpdate(nextProps, nextState) {
     if(nextProps.persons !== this.props.persons) {
      console.log('[App.js shouldComponentUpdate]');
      return true;
    } else {
      return false
    }
    //return true;
  }

  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log('[Persons.js getSnapshotBeforeUpdate]');
    return null;
  }

  componentDidUpdate() {
    console.log('[Persons.js componentDidUpdate]');
  }


      render(){

        return(
          this.props.persons.map((el,i) => {
             return <Person name={el.name} age = {el.age} key={el.id} delete={this.props.deleted.bind(this,i)}
             change={(event)=> this.props.nameChanged(event,i)}/>
           })
         );
      } 
    
    }

export default Persons;
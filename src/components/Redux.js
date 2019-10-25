import React from 'react';

import {createStore,bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';

const ACTION_CHANGE_FIRTS_NAME = 'ACTION_CHANGE_FIRTS_NAME';
const ACTION_CHANGE_LAST_NAME = 'ACTION_CHANGE_LAST_NAME';

const initialState = {
    name:'Kolya',
    lastName:'Tyurin',
} 

const changeFirstName = (name)=>{
    return{
        type:ACTION_CHANGE_FIRTS_NAME,
        payload:name,
    }
}
const changeLastName = (name)=>{
    return{
        type:ACTION_CHANGE_LAST_NAME,
        payload:name,
    }
}
const rootReducer = (state = initialState,action)=>{
    switch(action.type){
        case ACTION_CHANGE_FIRTS_NAME:
            return {...state,name:action.payload};
            case ACTION_CHANGE_LAST_NAME:
                    return {...state,lastName:action.payload};
        default:
            return state;
    }
}
const store = createStore(rootReducer);
class MainComponent extends React.Component{
    render(){
        const {lastName,name,changeFirstName,changeLastName} = this.props;
        return (<div>
        <div><input 
        type="text"
        onChange={(event)=>{
            changeFirstName(event.target.value)
        }}
        value ={name}
        placeholder="name"
          /></div>  
        <div><input 
        type="text"
        onChange={(event)=>{
            changeLastName(event.target.value)
        }}
        value ={lastName} 
        placeholder="Lastname"
        /></div>  
        </div>);
    }
}
const mapActionsToProps =(dispatch)=>{
    return{
        changeFirstName:bindActionCreators(changeFirstName,dispatch),
        changeLastName: bindActionCreators(changeLastName,dispatch),
    }
}
const mapStateToProps = (state)=>{
    const {name = 'error',lastName = 'error' }  = state;
    return {
        name,
        lastName
    }
}
const WMainComponent = connect(mapStateToProps,mapActionsToProps)(MainComponent);

function Redux(){
return <div>
<Provider store={store}>
    <WMainComponent />
    </Provider>
</div>
}
export  default Redux;
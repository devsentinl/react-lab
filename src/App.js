import React from 'react';
import "./styles/styles.scss"
import {createStore,combineReducers} from 'redux'
import {Provider,useSelector,useDispatch} from 'react-redux'

function counterReducer(state={count:0},action){
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count:state.count+1
      }
    case 'DECREMENT_COUNT':
      return {
        ...state,
        count:state.count-1
      }
    default:
      return state
  }
}
function nameReducer(state={name:''},action){
  switch (action.type) {
    case 'UPDATE_NAME':
      return{
        ...state,
        name:action.payload
      }
    default:
      return state
  }
}
const rootReducer=combineReducers({
  counterReducer,
  nameReducer
})

const initial_state={
}
const store=createStore(rootReducer,initial_state)

function App(){
  return (<Provider store={store}>
      <Counter/>
      <Name/>
    </Provider>)
}
function Counter(){
  const {count,name}=useSelector(state=>({...state.counterReducer,...state.nameReducer}))
  const dispatch=useDispatch()
  function incrementCount(){
      dispatch({
        type:'INCREMENT_COUNT'
      })
  }
  function decrementCount(){
      dispatch({
        type:'DECREMENT_COUNT'
      })
  }
  return (
    <>
    <h2>Counter: {count}</h2>
    <button className="button" onClick={incrementCount}>+</button>
    <button className="button" onClick={decrementCount}>-</button>
    <div>Your name is: {name}</div>
    </>
  )
}

function Name(){
  const dispatch=useDispatch()
  function handleUpdateName(event){
      dispatch({
        type:'UPDATE_NAME',
        payload:event.target.value
      })
  }

  return (
    <div>
      <input type="text" placeholder="Input your name" onChange={handleUpdateName}/>      
    </div>
  )
}
export default App;

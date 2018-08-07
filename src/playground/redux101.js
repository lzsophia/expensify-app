import {createStore} from 'redux';

let result;
const add=(a,b)=>{
    result=a+b;
};
const countReducer=(state= {count:0}, action)=> {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count-action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default: return state;
    }
};
const store= createStore(countReducer);

store.dispatch({
    type: 'INCREMENT',
    incrementBy:10
});
store.dispatch({
    type: 'DECREMENT'
});
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});
unsubscribe();
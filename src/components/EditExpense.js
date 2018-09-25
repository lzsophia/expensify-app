import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, startRemoveExpense, removeExpense} from '../actions/expenses';
const EditExpensePage=(props)=>{
    console.log(props);
    return (
        <div>
            <ExpenseForm expense={props.expense}
            onSubmit={(expense)=>{
                // dispatch the action to edit the expense
                // redirect to the dashboard
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}/>
            <button onClick={()=>{
                props.startRemoveExpense({id: props.expense.id});
                props.history.push('/');
            }}>Remove</button>
        </div>
        );
};

const mapStateToProps=(state, props)=>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id===props.match.params.id;
        })
    };
};
const mapDispatchToProps=(dispatch, props)=>({
    editExpense: (id, expense)=>dispatch(editExpense(id, expense)),
    startRemoveExpense: (data)=>dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
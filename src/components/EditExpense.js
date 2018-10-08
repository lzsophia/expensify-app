import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
const EditExpensePage=(props)=>{
    console.log(props);
    return (
        <div>
            <div className="page-header">
                <div className="content_container">
                     <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content_container">
                <ExpenseForm expense={props.expense}
                    onSubmit={(expense)=>{
                    // dispatch the action to edit the expense
                    // redirect to the dashboard
                    props.startEditExpense(props.expense.id, expense);
                    props.history.push('/');
                }}/>
                <button onClick={()=>{
                    props.startRemoveExpense({id: props.expense.id});
                    props.history.push('/');
                }} className="button button--secondary">Remove Expense</button>
            </div>
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
    startEditExpense: (id, expense)=>dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data)=>dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
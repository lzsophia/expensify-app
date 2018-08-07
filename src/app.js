import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store=configureStore();
// add expense -> water bill
store.dispatch(addExpense({description: 'water bill', amount: 4500}));
// add expense -> gas bill
store.dispatch(addExpense({description: 'gas bill', createdAt: 1000}));
// add expense -> rent bill
store.dispatch(addExpense({description: 'rent bill', amount: 109500}));
// getVisibleExpense -> print visible ones to screen
const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));
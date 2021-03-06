import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
test('should setup remove expense action object',()=>{
    const action=removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup edit expense action object',()=>{
    const action=editExpense('123abc', {note: 'New note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note'
        }
    })
});

test('should setup add expense action object with provided values',()=>{
    const expenseData={
        description: 'RENT',
        note: 'Last month rent',
        createdAt: 10000,
        amount: 200000
    };
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values',()=>{
    const expenseData={
        description: '',
        note: '',
        createdAt: 0,
        amount: 0
    };
    const action=addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});


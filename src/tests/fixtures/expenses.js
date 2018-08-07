import moment from 'moment';
const expenses=[{
    id: '1',
    description: 'coffee',
    note: '',
    amount: 500,
    createdAt: 0
},
{
    id: '2',
    description: 'bread',
    note: '',
    amount: 200,
    createdAt: moment(0).subtract(4,'days').valueOf()
},{
    id: '3',
    description: 'rent',
    note: '',
    amount: 200000,
    createdAt: moment(0).add(4,'days').valueOf()
}];
export default expenses;
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from './Card';

function Expenses({ expenses }) {

    return (
        <Card className='expenses'>
            {
                expenses.map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}>
                    </ExpenseItem>
                })
            }
        </Card>
    )

}

export default Expenses;
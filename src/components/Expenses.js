import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {

    return (
        <div className='expenses'>
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
        </div>
    )

}

export default Expenses;
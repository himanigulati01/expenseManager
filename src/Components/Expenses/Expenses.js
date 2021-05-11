import './Expenses.css'
//import ExpenseItem from './ExpenseItem'
import ExpensesList from '../Expenses/ExpensesList'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('')

    const saveYearHandler = (year) =>{
        console.log(year)
        setfilteredYear(year)
    }
    const filteredItems = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear 
    })
    
    return (
    <Card className="expenses">
        <ExpensesFilter 
          onSaveYear = {saveYearHandler}  
          selectedYear = {filteredYear}/>
        <ExpensesChart expenses = {filteredItems}/>
        <ExpensesList items = {filteredItems}/>
    </Card> 
    )
}
export default Expenses
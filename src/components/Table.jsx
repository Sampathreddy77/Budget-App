import React from 'react'

const Table = ({expenses}) => {
  return (
    <div className='table'>
        <table>
            <thead>
                <tr>

                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense)=>(
                        <tr key={expense.id}>
                            {expense.name}
                            {/*< ExpenseItem />*/}
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default Table

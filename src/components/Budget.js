
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = event.target.value;

        // Only update if the value is a number and greater than or equal to 0
        if (!isNaN(value) && value >= 0) {
            setNewBudget(Number(value));
        }
    };

    return (
        <div className="alert alert-secondary">
            <span>Budget: £{budget}</span>
            <input 
                type="number" 
                step="10" 
                min="0" 
                value={newBudget} 
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;

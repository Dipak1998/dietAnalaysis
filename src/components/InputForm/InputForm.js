import React from 'react';
import './InputForm.css'

function InputForm({onSubmit,getValue,buttonClicked}) {
    return (
        <div className="input-form">
        <div className="text">
            <p>Enter an ingredient list list for what you are cooking,
            like "1 cup rice, 10 oz chickpeas", etc.Enter each ingredient on a new line.</p>
        </div>
        <div className="input-field">
        <textarea onChange={getValue}></textarea>
        </div>
        <div className="btn">
            <button onClick={onSubmit}>Analyze</button>
            {buttonClicked ?
                <button type="reset" onClick={() => window.location.reload(false)}>New Recipe</button>:
                ''}
            
        </div>
        
         
        </div>
    )
}

export default InputForm

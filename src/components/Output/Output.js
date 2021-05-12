import React from 'react';
import './Output.css';

function Output({data}) {
    console.log(data)
    return (
        <div className="output">
        { data.calories !== 0 ?

            <section className="performance-facts" id="performance-facts">
            <div className="performance-facts__header">
                <h1 className="performance-facts__title">Nutrition Facts</h1>
                <p><span id="lnumser">0</span> servings per container</p>
            </div>
            <table className="performance-facts__table">
                <thead>
                    <tr>
                        <th colSpan="3" className="amps">Amount Per Serving</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <th colSpan="2" id="lkcal-val-cal"><b>Calories</b></th>
                    <td className="nob">{data.calories}</td>
                </tr>
                <tr className="thick-row">
                    <td colSpan="3" className="small-info"><b>% Daily Value*</b></td>
                </tr>
                <tr>
                    <th colSpan="2"><b>Total Fat</b> {Math.ceil(data.totalNutrients.FAT.quantity)} {data.totalNutrients.FAT.unit}</th>
                    <td><b> {Math.ceil(data.totalDaily.FAT.quantity)}{data.totalDaily.FAT.unit}</b></td>
                </tr>
                <tr>
                    <td className="blank-cell"></td>
                    <th>Saturated Fat {Math.ceil(data.totalNutrients.FASAT.quantity)} {data.totalNutrients.FASAT.unit}</th>
                    <td><b>{Math.ceil(data.totalDaily.FASAT.quantity)}{data.totalDaily.FASAT.unit}</b></td>
                </tr>
                <tr>
                    <td className="blank-cell"></td>
                    <th>Trans Fat -</th>
                    <td></td>
                </tr>
                <tr>
                    <th colSpan="2"><b>Cholesterol</b> {Math.ceil(data.totalNutrients.CHOLE.quantity)} {data.totalNutrients.CHOLE.unit}</th>
                    <td><b>{Math.ceil(data.totalDaily.CHOLE.quantity)} {data.totalDaily.CHOLE.unit}</b></td>
                </tr>
                <tr>
                    <th colSpan="2"><b>Sodium</b> {Math.ceil(data.totalNutrients.NA.quantity)} {data.totalNutrients.NA.unit}</th>
                    <td><b>{Math.ceil(data.totalDaily.NA.quantity)} {data.totalDaily.NA.unit}</b></td>
                </tr>
                <tr>
                    <th colSpan="2"><b>Total Carbohydrate</b> {Math.ceil(data.totalNutrients.CHOCDF.quantity)} {data.totalNutrients.CHOCDF.unit}</th>
                    <td><b>{Math.ceil(data.totalDaily.CHOCDF.quantity)} {data.totalDaily.CHOCDF.unit}</b></td>
                </tr>
                <tr>
                    <td className="blank-cell"></td>
                    <th>Dietary Fiber -</th>
                    <td><b>-</b></td>
                </tr>
                <tr>
                    <td className="blank-cell"></td>
                    <th>Total Sugars -</th>
                    <td></td>
                </tr>
                <tr>
                    <td className="blank-cell"></td>
                    <th>Includes - Added Sugars</th>
                    <td></td>
                </tr>
                <tr className="thick-end">
                    <th colSpan="2"><b>Protein</b> {Math.ceil(data.totalNutrients.PROCNT.quantity)} {data.totalNutrients.PROCNT.unit}</th>
                    <td><b>{Math.ceil(data.totalDaily.PROCNT.quantity)} {data.totalDaily.PROCNT.unit}</b></td>
                </tr>
            </tbody>
    </table>
            <table className="performance-facts__table--grid">
                <tbody>
                    <tr>
                        <th>Vitamin D {Math.ceil(data.totalNutrients.VITD.quantity)} {data.totalNutrients.VITD.unit}</th>
                        <td><b>{Math.ceil(data.totalDaily.VITD.quantity)} {data.totalDaily.VITD.unit}</b></td>
                    </tr>
                    <tr>
                        <th>Calcium {Math.ceil(data.totalNutrients.CA.quantity)} {data.totalNutrients.CA.unit}</th>
                        <td><b>{Math.ceil(data.totalDaily.CA.quantity)} {data.totalDaily.CA.unit}</b></td>
                    </tr>
                    <tr>
                        <th>Iron {Math.ceil(data.totalNutrients.FE.quantity)} {data.totalNutrients.FE.unit}</th>
                        <td><b>{Math.ceil(data.totalDaily.FE.quantity)} {data.totalDaily.FE.unit}</b></td>
                    </tr>
                    <tr className="thin-end">
                        <th>Potassium {Math.ceil(data.totalNutrients.K.quantity)} {data.totalNutrients.K.unit}</th>
                        <td><b>{Math.ceil(data.totalDaily.K.quantity)} {data.totalDaily.K.unit}</b></td>
                    </tr>
                </tbody>
            </table>
           <p className="small-info" id="small-nutrition-info">*Percent Daily Values are based on a 2000 calorie diet</p>
</section>
        :
         <div className="input-error">
             <p>We cannot calculate the data for you. Please recheck your input data.
             Give the input as "1 cup Black Coffee"... </p>
         </div>
        }
           
        
        </div>
    )
} 

export default Output

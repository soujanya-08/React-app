import styled from "styled-components"

const RollDice=({currentDice, rollDice})=>{
    
    return(
        <DiceContainer>
        <div className="dice" onClick ={rollDice}>
        <img src={`/Dices/dice_${currentDice}.PNG`} alt="dice 1"/>
        </div>
        <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}
export default RollDice;

const DiceContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:48px;
    p{
    font-size:14px;}
    .dice{
    cursor:pointer;
    }
`
import styled from "styled-components";


const Rules=()=>{
    return(
        <RulesContainer>
            <div>
                <h2>How to play dice game</h2>
                <div class="text">
                    <p>Select any number</p>
                    <p>Click on Dice image</p>
                    <p>If number selected matches with the dice number you get same score as on dice{" "}</p>
                    <p>If the number doesn't match then score will reduce by 2</p>
                </div>
            </div>
        </RulesContainer>
    )
}
export default Rules;

const RulesContainer= styled.div`
max-width:800px;
margin:0 auto;
margin-top: 40px;
margin-bottom:12px;
border-radius:10px;
    background-color:#fbf1f1;
    padding:20px;
    h2{
    font-size:24px;
    }
    .text{
    margin-top:24px;
    }
`
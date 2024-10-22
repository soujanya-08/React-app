import styled from 'styled-components';

const TotalScore=({score})=>{
    return(
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
     
    )
}
export default TotalScore;

const ScoreContainer=styled.div`
text-align:center;
max-width:100px;
    h1{
    font-size:50px;
    line-height:50px;
    }
    p{
    font-size:14px;
    font-weight:500;}
`
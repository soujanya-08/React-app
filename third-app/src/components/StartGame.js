import styled from 'styled-components';
import {Button} from '../Styled/Button';

const StartGame = ({toggle})=>{
    return(
        <Container>
            <img src="/images/Dices.PNG" alt="dices image"/>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame;

const Container = styled.div`
    
    display:flex;
    height:100vh;
    align-items:center;
    margin:0 auto;
    .content h1{
    font-size:56px;
    }
`

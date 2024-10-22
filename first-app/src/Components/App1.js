import React, {Component} from 'react'


class App1 extends Component{

render(){
    return(
        <div>
            <header className='head-items'>
            <img src="/quote.png" width="100px"></img>
            <nav>
                <ul className='li-items'>
                    <li>Live</li>
                    <li>Love</li>
                    <li>Laugh</li>
                </ul>
            </nav>
            </header>
        <div id="content">
        <h1 id="head">Life Quotes</h1>
        <ul>
            <li>If you love life, don’t waste time, for time is what life is made up of.</li>
            <li>The way to get started is to quit talking and begin doing.</li>
            <li>If you cannot do great things, do small things in a great way.</li>
            <li>I find that the harder I work, the more luck I seem to have.</li>
            <li>It's the will, not the skill.</li>
        </ul>
        </div>
        <footer className="footer">
            <small>© 2024 svt development. All rights reserved.</small>
        </footer>
        </div>
    )
}
}
export default App1
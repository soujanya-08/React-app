
const Navigation = () => {
    return (
        <nav className="container">
            <div>
                <img src="./images/logo-Bottle.jpg" alt="logo of bottle" width="72px"></img>
            </div>
            <ul>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>Login</button>
        </nav>

    )
}
const Main =()=>{
    return(
    <main className="main-content container">
        <div className="content">
        <h1>WATER YOU WAITING FOR? 
            <br></br>DIVE IN!</h1>
        <p className="para">Our bottles are crafted to keep you hydrated and invigorated, no matter where life takes you. With every sip, you'll feel the purity and freshness that keeps you going. Embrace the flow and stay cool—refreshment is just a sip away.</p>
        <div className="main-btn">
            <button>Shop Now</button>
            <button className="sec-btn">Category</button>
        </div>
        <div className="shop">
            <p>Also available on</p>
        </div>
        <div className="images-icon">
        <img src="./images/social.png" width="40px"></img>
        </div>
        </div>
        <div className="img">
        <img src="./images/Water-Bottle.jpeg" width="500px" height="480px"></img>
        </div>
    </main>
    )
}
const App =()=>{
    return(
        <div>
           <Navigation/> 
           <Main/>
        </div>
    )
}
export default App
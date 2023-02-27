import "./HeroStyles.css";

function Hero(){
    return(<>
        <div className="hero">
            <div className="hero-text">
                <h1>Small steps for us, Big improvements for you!</h1>
                <p>Help is one click away</p>
                <a href="/" className="login-btn">LOGIN</a>
                <a href="/" className="register-btn">REGISTER</a>
            </div>
        </div>
    </>)
}

export default Hero;
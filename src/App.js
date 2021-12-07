import './App.css';
import pexels from './images/pexels.jpeg'

function App() {
  return (
    <>
      <div  className="container">
      <button>Contanct</button>

        <div id="banner-box">
          <div id="helloWorldContainer">
            <h1>Hello World</h1>
            <h1>I'm John Lopez.</h1>
            <p>Front-End Developer | Back-End Developer</p>
          </div>
        </div>

        <container id="aboutMeContainer">
        <img src={pexels}></img>
          <div id="aboutMeDiv">
          <p>My name is John Lopez. I m a 24 year old male from Colorado Springs, CO. I am currently a Full-Stack Developer.
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
           Lorem ipsum may be used as a placeholder before the final copy is
          </p>
          </div>
        </container>



      </div>    
    </>
  );
}

export default App;

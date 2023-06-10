import './Google.css';

function Google() {
  return (
    <div className="google">
    <h1>
      <span>G</span>
      <span>o</span>
      <span>o</span>
      <span>g</span>
      <span>l</span>
      <span>e</span>
      <span>!</span>
      <b></b>
    </h1> 
    <div>
     <p className="p1">Search the web using Google</p>
     <input type="text"/><br/>
     <button>Google Search</button>
      <button>I'm feeling lucky</button>
     <br/>
     <a href="#">More Google!</a>
      <p className="p2">Copyright© 1999 Google Inc.</p>
      </div>
  </div>
  );
}

export default Google;

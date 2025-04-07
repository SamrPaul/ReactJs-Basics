import './App.css';

function App() {
  let greet="Good morning"; //this is a javascript code which is not used inside the return statement , so it wont be visible in webpage
  let boldy=<b>This text is bold</b>; //bold text should not written inside quotes , else it would be printed as it is.
  return (
    <>
    <h3>Hello {greet}</h3> {/*javascript specific code is written in this curly brace, here -greet*/}
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Content</li>
    </nav>
    <div className="container">
      <p>{greet} {boldy} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit totam, reiciendis vitae sit est omnis quos amet cupiditate molestias quod. 
      
      </p>
    </div>
    </>
  );
}

export default App;

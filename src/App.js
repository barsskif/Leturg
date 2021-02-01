
import './App.css';
import vid from "./smoke.mp4"

function App() {

  const hendelClick = () =>{
    window.location.reload()
  }
  return (
    <>
<section className = "section" >
<video src = {vid} autoPlay  muted className = "vid">
</video>
  <h1 className= "title" onClick = { hendelClick} title= "Нажми для перезагрузки">
<span className = "chart">A</span>
<span className = "chart">n</span>
<span className = "chart">d</span>
<span className = "chart">r</span>
<span className = "chart">e</span>
<span className = "chart">y</span>
  </h1>
</section>

    </>
  );
}

export default App;

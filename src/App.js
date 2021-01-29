import "./App.css";
import Student from "./components/Student";

function App() {
  return (
    <div className="container-fluid">
      <h1 className="heading">Leadersboard</h1>
      <Student name="Ibad Saleem" Uni="FAST NUCES KHI" score={340} />
      <Student name="Ali Hamza Usmani" Uni="NED University" score={349} />
      <Student name="Ali Hussain" Uni="DHA SUFFA" score={340} />
      <Student name="Shah Tanzeel Ahmed" Uni="FAST NUCES KHI" score={340} />
    </div>
  );
}

export default App;

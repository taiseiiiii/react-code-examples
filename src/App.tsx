import { Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Demo</h1>
      <Link to="/drawer">Drawer Sample</Link>
    </div>
  );
}
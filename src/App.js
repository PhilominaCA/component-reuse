import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Card } from './Card';
import { cardDetail } from './cardDetail';
import { CompGrid } from './CompGrid';
import GitHubIcon from '@mui/icons-material/GitHub';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);


function App() {

  return (
    <div className="App">
<div className="head-div">
  <h3>Dashboard</h3>
  <a href="https://github.com/PhilominaCA/component-reuse.git" target="_blank"  rel="noreferrer">source code<GitHubIcon fontSize="small"/></a>
  </div>
<div className="cards">
{cardDetail.map(({title,value,icon,borderColor})=><Card title={title} value={value} icon={icon} 
borderColo={borderColor}/>)}
</div>
<div>
<CompGrid/>
    </div>
    </div>
  );
}

export default App;

import { AreaLineChart } from './AreaLineChart';
import { DoughnutChart } from './DoughnutChart';
import { Projectprogress } from './Projectprogress';
import { UnDrwDiv } from './UnDrwDiv';
import { Colorgrid } from './Colorgrid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Notes } from './Notes';
import { CompDiv } from "./CompDiv";

export function CompGrid() {
  const data = [
    {
      title: "Earnings Overview",
      line: <hr />,
      comp: <AreaLineChart />,
      icon: <MoreVertIcon sx={{ color: "#d1d3e2" }} />,
      name: "line-chart"
    },
    {
      title: "Revenue Sources",
      line: <hr />,
      comp: <DoughnutChart />,
      icon: <MoreVertIcon sx={{ color: "#d1d3e2" }} />,
      name: "doughnut-chart"
    },
    {
      title: "Projects",
      line: <hr />,
      comp: <Projectprogress />,
      icon: "",
      name: "proj-prog-div"
    },
    {
      title: "Illustrations",
      line: <hr />,
      comp: <UnDrwDiv />,
      icon: "",
      name: "undraw-div"
    },
    {
      title: "",
      line: "",
      comp: <Colorgrid />,
      icon: "",
      name: "color-grid"
    },
    {
      title: "Development Approach",
      line: <hr />,
      comp: <Notes />,
      icon: "",
      name: "notes-div"
    }
  ];
  return (<div>
    {data.map(({ title, line, comp, icon, name }) => <CompDiv title={title} line={line} comp={comp} icon={icon} name={name} />)}
  </div>);
}

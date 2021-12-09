import { ColorBox } from './ColorBox';

export function Colorgrid() {
  const data = [
    {
      title: "Primary",
      color: "#4e73df"
    },
    {
      title: "Success",
      color: "#1cc88a"
    },
    {
      title: "Info",
      color: "#36b9cc"
    },
    {
      title: "Warning",
      color: "#f6c23e"
    },
    {
      title: "Danger",
      color: "#e74a3b"
    },
    {
      title: "Secondary",
      color: "#858796"
    },
    {
      title: "Light",
      color: "#f8f9fc"
    },
    {
      title: "Dark",
      color: "#5a5c69"
    }
  ];
  return (<div className="color-boxes-div">
    {data.map(({ title, color }) => <ColorBox title={title} color={color} />)}
  </div>);
}

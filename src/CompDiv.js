export function CompDiv({ title, line, comp, icon, name }) {

  return (<div className={name}>
    <span className="title-icon-div"> {title}{icon}</span>
    {line}
    {comp}
  </div>);
}

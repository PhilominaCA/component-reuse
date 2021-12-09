
export function ColorBox({ title, color }) {
  const txtColor = "white";
  const codeColor = "rgba(255,255,255,.5)";

  return (<div className="color-box" style={{ backgroundColor: color }}>
    <span className="color-title" style={color === "#f8f9fc" ? { color: "#858796" } : { color: txtColor }}>{title}</span><br />
    <span className="color-code" style={color === "#f8f9fc" ? { color: "rgba(0,0,0,.5)" } : { color: codeColor }}>{color}</span>
  </div>);
}

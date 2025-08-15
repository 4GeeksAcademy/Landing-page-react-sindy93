export default function Card({ img, title, text, buttonText, buttonUrl }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
     <img
  src={img}
  className="card-img-top"
  alt={title}
  style={{ width: "100%", height: "300px", objectFit: "cover" }}
/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a 
  href={buttonUrl} 
  className="btn" 
  style={{ backgroundColor: "#553114", borderColor: "#553114", color: "white" }}>
  {buttonText}
</a>
      </div>
    </div>
  );
}
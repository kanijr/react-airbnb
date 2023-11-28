import "./index.css";

export default function Photo({ image, name }) {
  return <img src={image} alt={name} className="photo" />;
}

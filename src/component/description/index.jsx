import "./index.css";

import Heading from "../heading";

export default function Descripion({ title, children }) {
  return (
    <div className="description">
      <Heading>{title}</Heading>
      <p className="description__text">{children}</p>
    </div>
  );
}

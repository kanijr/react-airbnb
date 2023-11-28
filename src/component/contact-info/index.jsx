import Heading from "../heading";
import "./index.css";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__header">
        <img
          className="contact__image"
          src={image}
          height={80}
          width={80}
          alt=""
        />
        <div className="contact__block">
          <Heading>Господар - {name}</Heading>

          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>

            <span className="contact__sub-value">{response_time}</span>

            <span className="contact__sub-value">
              {response_rate}% percentage of response speed
            </span>
          </div>
        </div>
      </div>
      <p className="contact__info">{info}</p>
    </div>
  );
}

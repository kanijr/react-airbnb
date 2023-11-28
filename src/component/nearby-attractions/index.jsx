import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function NearbyAttractions({ attractions }) {
  return (
    <Box className="attractions" shadow>
      <Heading border>Додаткові властивості</Heading>

      <ul className="attractions__list">
        {attractions.map(({ id, name, link }) => (
          <ListItem key={id}>
            <a className="attractions__link" href={link}>
              {name}
            </a>
          </ListItem>
        ))}
      </ul>
    </Box>
  );
}

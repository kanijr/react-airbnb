import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import LogoBed from "./svg/bed.svg";
import LogoBedroom from "./svg/bedroom.svg";
import LogoGuest from "./svg/guest.svg";
import LogoBathRoom from "./svg/bathroom.svg";

export default function PropertiesDetails({ ...properties }) {
  return (
    <Box className="properties" shadow>
      <Heading border>Деталі властивості:</Heading>

      <List {...properties} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="properties__list">
      <ListItem imageSrc={LogoGuest}>
        <span>{guests} гості</span>
      </ListItem>

      <ListItem imageSrc={LogoBedroom}>
        <span>{bedrooms} спальня</span>
      </ListItem>

      <ListItem imageSrc={LogoBed}>
        <span>{beds} ліжко</span>
      </ListItem>

      <ListItem imageSrc={LogoBathRoom}>
        <span>{baths} ванна кімната</span>
      </ListItem>
    </ul>
  );
}

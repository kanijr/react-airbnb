import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import LogoPool from "./svg/pool.svg";
import LogoGym from "./svg/gym.svg";
import LogoBreakfast from "./svg/breakfast.svg";
import LogoWifi from "./svg/wifi.svg";
import LogoParking from "./svg/parking.svg";
import LogoPets from "./svg/pets.svg";
import LogoChild from "./svg/child.svg";
import LogoAirport from "./svg/airport-shuttle.svg";
import LogoConciergService from "./svg/concierg-service.svg";
import LogoRoomService from "./svg/room-service.svg";

export default function Amenities({ ...amenities }) {
  return (
    <Box className="amenities" shadow>
      <Heading border>Зручності</Heading>

      <List {...amenities} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="amenities__list">
      {hasPool && (
        <ListItem imageSrc={LogoPool}>
          <span>Басейн</span>
        </ListItem>
      )}
      {hasGym && (
        <ListItem imageSrc={LogoGym}>
          <span>Спортивний зал</span>
        </ListItem>
      )}
      {hasFreeBreakfast && (
        <ListItem imageSrc={LogoBreakfast}>
          <span>Безкоштовний сніданок</span>
        </ListItem>
      )}
      {hasFreeWiFi && (
        <ListItem imageSrc={LogoWifi}>
          <span>Безкоштовний Wi-Fi</span>
        </ListItem>
      )}
      {hasParking && (
        <ListItem imageSrc={LogoParking}>
          <span>Безкоштовний вуличний паркінг</span>
        </ListItem>
      )}
      {hasPetsAllowed && (
        <ListItem imageSrc={LogoPets}>
          <span>Дозволено розміщення з домашніми тваринами</span>
        </ListItem>
      )}
      {hasAirportShuttle && (
        <ListItem imageSrc={LogoAirport}>
          <span>Трансфер до/з аеропорту</span>
        </ListItem>
      )}
      {hasConciergeService && (
        <ListItem imageSrc={LogoConciergService}>
          <span>Консьєрж-сервіс</span>
        </ListItem>
      )}
      {hasRoomService && (
        <ListItem imageSrc={LogoRoomService}>
          <span>Обслуговування номерів</span>
        </ListItem>
      )}
      {hasChildFriendly && (
        <ListItem imageSrc={LogoChild}>
          <span>Підходить для дітей</span>
        </ListItem>
      )}
    </ul>
  );
}

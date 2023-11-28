import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function AditionalProperties({ ...properties }) {
  return (
    <Box className="aditional" shadow>
      <Heading border>Додаткові властивості</Heading>

      <List {...properties} />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  "check-in_instructions": instructions,
}) {
  return (
    <ul className="aditional__list">
      <ListItem title="Правила дому">
        <span>{house_rules}</span>
      </ListItem>
      <ListItem title="Правила дому">
        <span>{cancellation_policy}</span>
      </ListItem>
      <ListItem title="Правила дому">
        <span>{local_transportation}</span>
      </ListItem>
      <ListItem title="Правила дому">
        <span>{host_languages.join(", ")}</span>
      </ListItem>
      <ListItem title="Правила дому">
        <span>{special_offers}</span>
      </ListItem>
      <ListItem title="Правила дому">
        <span>{instructions}</span>
      </ListItem>
    </ul>
  );
}

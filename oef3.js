/**
 * Je krijg 2 variabelen
 * Als de grond droog is, en er wordt geen regen voorspeld dan moet er in de
 * console verschijnen: sproeiers aan
 * In het andere geval moet er in de console verschijnen: sproeiers uit
 */

const grondIsDroog = false;
const geenRegenVoorspeld = false;

grondIsDroog && geenRegenVoorspeld
  ? console.log("sproeiers aan")
  : console.log("sproeiers uit");

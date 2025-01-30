/**
 * Je beschikt over een startgetal en een eindgetal
 * Je verhoogt het startgetal telkens met zichzelf
 * Dit gebeurt zeker 1 keer.
 * Als het resultaat groter wordt dan het eindgetal stop deze loop.
 * Indien het startgetal groter is dan het eindgetal moet hij het slechts 1 keer doorlopen.
 *
 * vb:
 * startgetal = 4
 * eindgetal = 15
 *
 * in de console krijg ik
 * 4 + 4 = 8
 * 8 + 8 = 16
 *
 * vb2:
 * startgetal = 4
 * eindgetal = 3
 *
 * in de console krijg ik
 * 4 + 4 = 8
 */
let startgetal = 4;
const eindgetal = 17;
let som = startgetal + startgetal;

do {
  console.log(startgetal, " + ", startgetal, "= ", som);
  startgetal = som;
  som = startgetal + startgetal;
} while (som < eindgetal);

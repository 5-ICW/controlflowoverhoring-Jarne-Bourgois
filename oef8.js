/**
 * Op basis van een kerngetal (0 tot 10) (opgegeven in het programm) toon ik de tafel van 10 tot
 * aan dit getal
 *
 * Ik heb bv 5 als kerngetal
 * als resultaat krijg ik in de console
 *
 * 0 x 10 = 0
 * 1 x 10 = 10
 * 2 x 10 = 20
 * 3 x 10 = 30
 * 4 x 10 = 40
 * 5 x 10 = 50
 */

const kerngetal = 5;

for (let i = 0; i <= kerngetal; i++) {
  som = i * 10;
  console.log(i, "x 10 =", som);
}

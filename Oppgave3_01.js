// Statisk tekst som brukes til å søke i
const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = () => {
  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  //Bruker variabelen wordArray = text (selve arrayen).split for å splitte opp ordene slik at vi får en mer forståelig og mindre liste av ord, og ikke bokstaver.
  const wordArray = text.split(" ");
  let longestWord = wordArray[0];


  //prøvde å gjøre dette ved for løkke men fikk det ikke helt til, det beste jeg fikk til var at den skrev tallet 0, men for det meste ble det undefined..
  //Kilde: Inspirasjon fra løsningsforslag
  wordArray.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};
  // TODO: Velg første ord så du har noe å sammenlikne med
  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre

console.log(longestWord());

 //Kunne skrevet det ut i HTML via getElementById, tenkte å nevne det for sikkerhets skyld.

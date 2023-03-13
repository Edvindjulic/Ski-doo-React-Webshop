export interface Product {
  id: string;
  title: string;
  description: string;
  productImage: string;
  background: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

/**
 * function that returns a unique Id, both numbers and letters
 */
export const generateId = () => {
  const newId = Math.floor(1 + Math.random() * 0x1000)
    .toString(16)
    .substring(1);
  return newId;
};

export const products: Product[] = [
  {
    id: "1",
    title: "Ski-Doo Tundra",
    description:
      "Djup snö, hårda vinterförhållanden - det spelar ingen roll för Tundra LE. Med REV Gen4 plattformen kan föraren nu ta sig an allt med ultrasnabba köregenskaper, överlägsen bärförmåga och mångsidiga funktioner som alla drivs av pålitliga Rotax-motorer.",
    productImage:
      "https://www.ski-doo.com/content/dam/global/en/ski-doo/my24/studio/sport-utility/tundra/side/SKI-MY24-TUN-LE-600-EFI-85Hp-Black-000GDRA00-Studio-RSIDE-NA.png",
    background: 
    "https://www.ski-doo.com/content/skidoo/sv_se/modeller/arbete/tundra/_jcr_content/root/modelteaser.coreimg.png/1676661010557/ski-my24-tun-le-600-efi-85hp-black-000gdra00-studio-34fr-na.png"
    ,
    price: 124900,

  },
  {
    id: "2",
    title: "Ski-Doo MXZ",
    description:
      "Dynamisk ledprestanda med värdeorienterade funktioner och förtroendeingivande körning. En skoter full av skoj utan att plånboken töms.",
    productImage:
      "https://www.ski-doo.com/content/dam/global/en/ski-doo/my24/studio/trail/mxz/side/SKI-MY24-MXZ-X-RS-MOONT-Neo-Yellow-Studio-RSIDE-000UCRC00.png",
    
    background:
    "https://www.ski-doo.com/content/skidoo/sv_se/modeller/led/mxz/_jcr_content/root/modelteaser.coreimg.png/1676660962486/ski-my24-mxz-x-rs-moont-neo-yellow-studio-34fr-000ucrc00-01.png"
    ,
    price: 123900,

  },
  {
    id: "3",
    title: "Ski-Doo FreeRide",
    description:
      "Freeride klarar av att erövra extrema förhållanden i djupsnö och gör det med alldeles egen stil, och sticker ut i en värld där branta sluttningar och stora hopp är normen.",
    productImage:
      "https://www.ski-doo.com/content/dam/global/en/ski-doo/my24/studio/deep-snow/freeride/side/SKI-MY24-FREE-Standard-MOON-Neo-Mint-000VDRC00-Studio-RSIDE-NA.png",
    background:"https://www.ski-doo.com/content/skidoo/sv_se/modeller/djup-sno/freeride/_jcr_content/root/modelteaser.coreimg.png/1676660948435/ski-my24-free-standard-moon-neo-mint-000vdrc00-studio-34fr-na.png"
    ,
    
    price: 219900,

  },
  {
    id: "4",
    title: "Ski-Doo Renegade",
    description:
      "Framtagen för vinteräventyraren med längre drivband för bättre grepp och ökad komfort. Med två- och fyrtakts Rotax motorer finns det en Renegade för alla ledförhållanden.",
    productImage:
      "https://www.ski-doo.com/content/dam/global/en/ski-doo/my24/studio/trail/renegade/side/SKI-MY24-REN-X-RS-900-ACE-Turbo-R-Hyper-Silver-Studio-RSIDE-000DBRC00.png",
    background:
    "https://www.ski-doo.com/content/skidoo/sv_se/modeller/led/renegade/_jcr_content/root/modelteaser.coreimg.png/1676660957454/ski-my24-ren-x-rs-900-ace-turbo-r-black-studio-34fr-000darj00.png"
    ,
    price: 125900,

  },
  {
    id: "5",
    title: "Ski-Doo Expedition",
    description:
      "Ski-Doo Expedition-modellerna är otroligt mångsidiga och har en fantastisk kapacitet i en och samma skoter, både på och utanför leder. Jobba vid stugan ena timmen, starta ett nytt äventyr nästa timme."
      ,
    productImage:
      "https://www.ski-doo.com/content/dam/global/en/ski-doo/my24/studio/crossover/expedition/side/SKI-MY24-EXP-SE-850-ETEC-Terra-Green-000AGRM00-Studio-RSIDE-NA.png",
    background:"https://www.ski-doo.com/content/skidoo/sv_se/modeller/crossover/expedition/_jcr_content/root/modelteaser.coreimg.png/1676660984506/ski-my24-exp-le-900-ace-turbo-r-black-000awra00-studio-34fr-na.png"
    ,
    price: 165900,

  },
  {
    id: "6",
    title: "Ski-Doo Skandic",
    description:
      "Brutal styrka möter förfinad kapacitet med Skandic. Dess enorma dragkapacitet och stora bäryta gör svåra arbeten enkla och dess stora bärförmåga gör att du kan köra dit du vill.",
    productImage:
      "https://www.ski-doo.com/content/dam/global/en/ski-doo/my24/studio/sport-utility/skandic/side/SKI-MY24-SKA-LE-900-ACE-Black-000AHRA00-Studio-RSIDE-NA.png",
    background:"https://www.ski-doo.com/content/skidoo/sv_se/modeller/arbete/skandic/_jcr_content/root/modelteaser.coreimg.png/1676661017564/ski-my24-ska-le-900-ace-black-000ahra00-studio-34fr-na.png"
    ,
    price: 127900,

  },

];

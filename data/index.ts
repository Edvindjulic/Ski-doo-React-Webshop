export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
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
    image:
      "https://www.ski-doo.com/content/dam/global/en/ski-doo/my24/studio/sport-utility/tundra/side/SKI-MY24-TUN-LE-600-EFI-85Hp-Black-000GDRA00-Studio-RSIDE-NA.png",
    title: "Ski-Doo Tundra",
    description:
      "Djup snö, hårda vinterförhållanden - det spelar ingen roll för Tundra LE. Med REV Gen4 plattformen kan föraren nu ta sig an allt med ultrasnabba köregenskaper, överlägsen bärförmåga och mångsidiga funktioner som alla drivs av pålitliga Rotax-motorer.",
    price: 10000,
  },
  {
    id: "2",
    image:
      "https://www.ski-doo.com/content/dam/global/en/ski-doo/my24/studio/trail/mxz/side/SKI-MY24-MXZ-Sport-600-EFI-Neo-Yellow-Studio-RSIDE-000BHRB00.png",
    title: "MXZ Sport",
    description:
      "Dynamisk ledprestanda med värdeorienterade funktioner och förtroendeingivande körning. En skoter full av skoj utan att plånboken töms.",
    price: 123900,
  },
  {
    id: "3",
    image:
      "https://www.ski-doo.com/content/dam/global/en/ski-doo/my24/studio/deep-snow/freeride/spring-only/SKI-MY24-FREE-Standard-MOON-Neo-Mint-000VDRC00-Studio-RSIDE-NA-SpringOnly.png",
    title: "Ski-Doo FreeRide",
    description:
      "Freeride klarar av att erövra extrema förhållanden i djupsnö och gör det med alldeles egen stil, och sticker ut i en värld där branta sluttningar och stora hopp är normen.",
    price: 219900,
  },
];

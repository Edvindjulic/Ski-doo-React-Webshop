export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

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
];

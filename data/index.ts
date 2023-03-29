export interface Product {
  id: string;
  brand?: string;
  title: string;
  description: string;
  image: string;
  background?: string;
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
    brand: "Ski-Doo",
    title: "Tundra",
    description:
      "Tundra skotrarna är kända som mekaniska snöskor och har en smal design som ger en följsamhet unik för en arbetsskoter. Den perfekta enkla arbetslösningen till ett förmånligt pris.",
    image:
      "https://user-images.githubusercontent.com/77364209/226325839-3736baab-2f64-4bf9-adc4-00accf75408c.png",
    background:
      "https://user-images.githubusercontent.com/77364209/226326070-92da18c2-4f97-443d-b8ee-8321d8547109.png",
    price: 124900,
  },
  {
    id: "2",
    brand: "Ski-Doo",
    title: "MXZ",
    description:
      "MXZ skotrarna är inspirerade av tävlingsmodellerna och ger motocross-liknande köregenskaper och följsamhet med avancerade nyheter som körkvalitet och spännande Rotax motorer.",
    image:
      "https://user-images.githubusercontent.com/77364209/226326216-9c31b63a-8542-4bbf-a35d-735409aa3f4a.png",

    background:
      "https://user-images.githubusercontent.com/77364209/226326208-bf3f7715-ad3b-4336-a2da-3bd806d5ce03.png",
    price: 123900,
  },
  {
    id: "3",
    brand: "Ski-Doo",
    title: "FreeRide",
    description:
      "Freeride klarar av att erövra extrema förhållanden i djupsnö och gör det med alldeles egen stil, och sticker ut i en värld där branta sluttningar och stora hopp är normen.",
    image:
      "https://user-images.githubusercontent.com/77364209/226326358-36e0db32-aebc-4b0f-9214-67b4997bf8d9.png",
    background:
      "https://user-images.githubusercontent.com/77364209/226326355-83c18c3f-ef05-4888-962c-0cf95f40ac0b.png",
    price: 219900,
  },
  {
    id: "4",
    brand: "Ski-Doo",
    title: "Renegade",
    description:
      "Framtagen för vinteräventyraren med längre drivband för bättre grepp och ökad komfort. Med två- och fyrtakts Rotax motorer finns det en Renegade för alla ledförhållanden.",
    image:
      "https://user-images.githubusercontent.com/77364209/226326683-6bdb2e97-d464-4751-8205-fc43de372b6b.png",
    background:
      "https://user-images.githubusercontent.com/77364209/226326676-3856d6bd-f29b-445e-a4b5-ab160ba79a31.png",
    price: 125900,
  },
  {
    id: "5",
    brand: "Ski-Doo",
    title: "Expedition",
    description:
      "Ski-Doo Expedition-modellerna är otroligt mångsidiga och har en fantastisk kapacitet i en och samma skoter, både på och utanför leder. Jobba vid stugan ena timmen, starta ett nytt äventyr nästa timme.",
    image:
      "https://user-images.githubusercontent.com/77364209/226326823-dbaea32b-a1f9-4cbe-ac39-5ba9bf73c3b0.png",
    background:
      "https://user-images.githubusercontent.com/77364209/226326819-0f57a078-0f5d-48dd-8d12-de53f8991446.png",
    price: 165900,
  },
  {
    id: "6",
    brand: "Ski-Doo",
    title: "Skandic",
    description:
      "Brutal styrka möter förfinad kapacitet med Skandic. Dess enorma dragkapacitet och stora bäryta gör svåra arbeten enkla och dess stora bärförmåga gör att du kan köra dit du vill.",
    image:
      "https://user-images.githubusercontent.com/77364209/226326917-d77d4803-4aea-4794-9b86-360775dd217b.png",
    background:
      "https://user-images.githubusercontent.com/77364209/226326910-3b25b359-ab02-4d94-a541-02736800a1ac.png",
    price: 127900,
  },
];

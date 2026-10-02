import type { StaticImageData } from "next/image";
import photo01 from "./images/photo-01.jpg";
import photo02 from "./images/photo-02.jpg";
import photo03 from "./images/photo-03.jpg";
import photo04 from "./images/photo-04.jpg";
import photo05 from "./images/photo-05.jpg";
import photo06 from "./images/photo-06.jpg";
import photo07 from "./images/photo-07.jpg";
import photo08 from "./images/photo-08.jpg";
import photo09 from "./images/photo-09.jpg";
import photo10 from "./images/photo-10.jpg";
import photo11 from "./images/photo-11.jpg";
import photo12 from "./images/photo-12.jpg";
import photo13 from "./images/photo-13.jpg";
import photo14 from "./images/photo-14.jpg";
import photo15 from "./images/photo-15.jpg";
import photo16 from "./images/photo-16.jpg";

export interface Item {
  name: string;
  year: number;
  // Position on the dial: tick index 0–179, clockwise from the top
  // (45 = right, 90 = bottom, 135 = left). Keep entries in ascending order.
  degree: number;
  variant?: "medium" | "large";
  title: string;
  image: StaticImageData;
}

export interface Line {
  variant: Item["variant"];
  rotation: number;
  offsetX: number;
  offsetY: number;
  dataIndex: number | null;
}

export type Lines = Line[];
export type Data = Item[];

export const DATA: Data = [
  {
    name: "Project 01",
    year: 1990,
    degree: 3,
    variant: "large",
    title: "A short headline for project 01",
    image: photo01,
  },
  {
    name: "Project 02",
    year: 1992,
    degree: 10,
    variant: "medium",
    title: "A short headline for project 02",
    image: photo02,
  },
  {
    name: "Project 03",
    year: 1994,
    degree: 17,
    variant: "large",
    title: "A short headline for project 03",
    image: photo03,
  },
  {
    name: "Project 04",
    year: 1995,
    degree: 23,
    variant: "medium",
    title: "A short headline for project 04",
    image: photo04,
  },
  {
    name: "Project 05",
    year: 1996,
    degree: 31,
    variant: "medium",
    title: "A short headline for project 05",
    image: photo05,
  },
  {
    name: "Project 06",
    year: 2003,
    degree: 38,
    variant: "large",
    title: "A short headline for project 06",
    image: photo06,
  },
  {
    name: "Project 07",
    year: 2004,
    degree: 50,
    variant: "medium",
    title: "A short headline for project 07",
    image: photo07,
  },
  {
    name: "Project 08",
    year: 2006,
    degree: 58,
    variant: "large",
    title: "A short headline for project 08",
    image: photo08,
  },
  {
    name: "Project 09",
    year: 2007,
    degree: 66,
    variant: "medium",
    title: "A short headline for project 09",
    image: photo09,
  },
  {
    name: "Project 10",
    year: 2008,
    degree: 79,
    variant: "large",
    title: "A short headline for project 10",
    image: photo10,
  },
  {
    name: "Project 11",
    year: 2013,
    degree: 88,
    variant: "medium",
    title: "A short headline for project 11",
    image: photo11,
  },
  {
    name: "Project 12",
    year: 2017,
    degree: 99,
    variant: "large",
    title: "A short headline for project 12",
    image: photo12,
  },
  {
    name: "Project 13",
    year: 2019,
    degree: 112,
    variant: "medium",
    title: "A short headline for project 13",
    image: photo13,
  },
  {
    name: "Project 14",
    year: 2020,
    degree: 124,
    variant: "large",
    title: "A short headline for project 14",
    image: photo14,
  },
  {
    name: "Project 15",
    year: 2021,
    degree: 141,
    variant: "medium",
    title: "A short headline for project 15",
    image: photo15,
  },
  {
    name: "Project 16",
    year: 2024,
    degree: 158,
    variant: "large",
    title: "A short headline for project 16",
    image: photo16,
  },
];

export const loremIpsum = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque mollis mauris, eu condimentum massa tincidunt id. Vestibulum et consequat libero, at malesuada odio.",
  "Nam nec dapibus ligula. Donec aliquet convallis quam, id molestie felis vestibulum a. Duis at erat a risus posuere rhoncus vel at massa. Fusce fringilla diam quis est suscipit egestas.",
  "Cras rutrum, sem vitae convallis finibus, lacus risus dapibus erat, quis porta est mi et libero. Suspendisse volutpat fermentum felis, id pretium metus consequat sed.",
  "Sed euismod, erat sed efficitur eleifend, libero mi fringilla enim, ut facilisis risus dolor eget lectus. Integer eleifend sagittis odio, vitae convallis risus aliquam eget.",
  "Suspendisse sed nisi tristique, gravida lorem id, posuere lorem. Duis vehicula sapien nec lacinia vestibulum. Phasellus consequat ipsum vitae est congue, a mollis nunc vestibulum.",
  "Nulla in ipsum augue. Nulla facilisi. Nam imperdiet velit a risus volutpat, ac fringilla sapien dapibus. Maecenas dapibus laoreet facilisis.",
  "Etiam sit amet mi id leo eleifend viverra. Morbi ultrices ligula nec fringilla consectetur. Suspendisse ac justo non purus tempus fringilla non eu magna.",
  "Pellentesque luctus ornare imperdiet. Vivamus in odio tristique, rhoncus nibh at, placerat ipsum. Donec porta orci ex, ut dignissim quam pretium eleifend.",
  "Cras hendrerit lacus ac mi feugiat, non venenatis lorem congue. Ut eget diam ligula. Morbi eu commodo quam. Sed et lectus id mi facilisis dapibus.",
  "In viverra pretium cursus. Sed gravida, risus in consectetur feugiat, urna odio interdum metus, vitae dignissim augue purus ac neque.",
  "Vivamus ut pulvinar felis, in lacinia magna. Sed interdum lectus ante, sed feugiat enim pretium sit amet. Fusce turpis velit, tempor eu justo at, iaculis mollis est.",
  "Curabitur bibendum id sapien at interdum. Aliquam pharetra, est at pulvinar dignissim, eros massa dapibus eros, non interdum libero urna nec ligula.",
  "Nullam porttitor hendrerit nisl non viverra. Sed et feugiat eros. Nunc tempor fermentum dapibus. Nam id bibendum nunc, at condimentum augue.",
  "Proin laoreet turpis a ligula condimentum, eu facilisis eros aliquet. Donec at justo dignissim, molestie tellus quis, tristique ipsum.",
  "Sed sed tellus at lorem feugiat pulvinar ac eget metus. Curabitur id magna massa. Vestibulum suscipit ligula vitae justo elementum ultrices.",
  "Nam ex dui, venenatis at sagittis eu, eleifend a urna. Nunc suscipit lectus ac felis cursus, nec finibus quam ultricies.",
  "Phasellus ut iaculis enim. Praesent id facilisis neque. Maecenas libero nisl, aliquam nec ex suscipit, eleifend fringilla risus.",
  "Integer tempus semper pulvinar. Nullam bibendum elit vitae feugiat congue. Phasellus imperdiet, lacus a mollis congue, tortor ligula euismod tellus, id tristique dui erat eget tortor.",
  "Quisque tincidunt mauris nec libero lobortis, vel hendrerit velit viverra. Aliquam vestibulum turpis a leo efficitur fermentum.",
  "Fusce id lorem a enim varius maximus. Suspendisse potenti. Aenean bibendum turpis non maximus eleifend.",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In scelerisque quam eget eros consequat fermentum.",
  "Cras porttitor metus at enim aliquet pharetra. Donec mollis nisl nec dapibus aliquam. Aliquam facilisis pulvinar justo sed rutrum.",
  "Nullam aliquet scelerisque tincidunt. Quisque lectus nulla, convallis ac dignissim non, rhoncus id est.",
  "Praesent dapibus hendrerit fringilla. Nunc dictum pellentesque augue eget tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Vestibulum vehicula, turpis eget consequat vulputate, est dui tristique ipsum, sit amet ultricies urna urna vel tortor.",
  "Curabitur et risus mauris. Sed maximus enim ut erat elementum, quis condimentum neque commodo. Cras efficitur ac ex in fermentum.",
];

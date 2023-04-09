export interface IMovie {
  id?: number;
  title: string;
  released: string;
  shortDesc: string;
  longDesc: string;
}

const movies = [
  {
    id: 1,
    title: "Sagan om det genomskinliga vattnet",
    released: "1997",
    shortDesc:
      "I denna dokumentär-liknande film går vi tillbaka i tiden till första gången vatten upptäcktes. Vatten har ju alltid varit genomskinligt. Eller har det?",
    longDesc:
      "Tillbaka till en tid då människor inte hade blivit påkomna så fanns det redan vatten på vår jord. Till allas shock så har inte vatten som vi känner till det idag alltid varit genomskinligt. Det hade en väldigt unik färg, något som är svårt att namnsätta. Se vattnets evolution i denna informativa men ändå spännande dokumentär-liknande film",
  },
  {
    id: 2,
    title: "Den leende hunden",
    released: "2004",
    shortDesc: "Denna hund kan faktiskt le!",
    longDesc:
      "Det var en gång en familj som hade en, till synes, helt vanlig hund. Men så var inte fallet. Denna hund kunde le när han blev glad. Precis som oss! Följ med i denna komedi och se vad för spännand äventyr som väntar!",
  },
  {
    id: 3,
    title: "Tesla",
    released: "p90",
  },
];

export const renderAll = () => {
  return movies;
};

export const findById = (id: string) => {
  const parsedId = parseInt(id);

  const movie = movies.find((c) => c.id === parsedId);
  return movie;
};

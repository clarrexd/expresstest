export interface IMovie {
	id?: number;
	image: string;
	title: string;
	released: string;
	description: string;
}

const movies = [
	{
		id: 1,
		image: "../../../images/noimage.jpg",
		title: "Sagan om det genomskinliga vattnet",
		released: "1997",
		description:
			"Tillbaka till en tid då människor inte hade blivit påkomna så fanns det redan vatten på vår jord. Till allas shock så har inte vatten som vi känner till det idag alltid varit genomskinligt. Det hade en väldigt unik färg.",
	},
	{
		id: 2,
		image: "../../../images/noimage.jpg",
		title: "Den leende hunden",
		released: "2004",
		description:
			"Det var en gång en familj som hade en, till synes, helt vanlig hund. Men så var inte fallet. Denna hund kunde le när han blev glad. Precis som oss! Följ med i denna komedi och se vad för spännand äventyr som väntar!",
	},
	{
		id: 3,
		image: "../../../images/twow.jpeg",
		title: "The Wolf of Wall Street",
		released: "2014",
		description:
			"Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",
	},
	{
		id: 4,
		image: "../../../images/du.jpg",
		title: "Django Unchained",
		released: "2013",
		description:
			"When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.",
	},
	{
		id: 5,
		image: "../../../images/leon.jpg",
		title: "Léon: The Professional",
		released: "1995",
		description:
			"When 12-year-old Mathilda's family is killed, her neighbour Leon, who is a professional assassin, reluctantly takes her under his wing and teaches her the secrets of his trade.",
	},
	{
		id: 6,
		image: "../../../images/parasite.jpg",
		title: "Parasite",
		released: "2019",
		description:
			"The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
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

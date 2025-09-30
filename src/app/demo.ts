type BigCard = {
    id: number;
    title?: string;
    backgroundPath: string;
}


const card: BigCard = {
    id: 3,
    backgroundPath: "/",
};

console.log(card.title);

const { title } = card;

console.log(title);
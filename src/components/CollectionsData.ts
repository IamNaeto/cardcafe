interface collectionType{
    id: number;
    cardFront: string;
    cardBack: string;
    downloads: number;
    msg: number;
    seen: number;
}

export const collectionsData: collectionType[] = [
    {
        id: 1,
        cardFront : "/img/darkblue-front.png",
        cardBack: "/img/darkblue-back.png",
        downloads: 30,
        msg: 25,
        seen: 200
    },
    {
        id: 2,
        cardFront : "/img/pattern-front.png",
        cardBack: "/img/pattern-back.png",
        downloads: 30,
        msg: 25,
        seen: 200
    },
    {
        id: 3,
        cardFront : "/img/peach-front.png",
        cardBack: "/img/peach-back.png",
        downloads: 50,
        msg: 76,
        seen: 301
    },
    {
        id: 4,
        cardFront : "/img/darkpeach-front.png",
        cardBack: "/img/darkpeach-back.png",
        downloads: 70,
        msg: 34,
        seen: 560
    },
    {
        id: 5,
        cardFront : "/img/lightblue-front.png",
        cardBack: "/img/lightblue-back.png",
        downloads: 66,
        msg: 47,
        seen: 120
    },
    {
        id: 6,
        cardFront : "/img/orange-front.png",
        cardBack: "/img/orange-back.png",
        downloads: 12,
        msg: 100,
        seen: 128
    },
    {
        id: 7,
        cardFront : "/img/purple-front.png",
        cardBack: "/img/purple-back.png",
        downloads: 32,
        msg: 60,
        seen: 327
    },
    {
        id: 8,
        cardFront : "/img/red-front.png",
        cardBack: "/img/red-back.png",
        downloads: 86,
        msg: 12,
        seen: 100
    },
    {
        id: 9,
        cardFront : "/img/darkblue-front.png",
        cardBack: "/img/darkblue-back.png",
        downloads: 30,
        msg: 25,
        seen: 200
    },
]
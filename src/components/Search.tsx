import { User } from "firebase/auth";

interface props {
    type: string;
    user: any | User | null;
    dataType: string
}
const Search: React.FC<props> = ({ type, user, dataType }) => {

    let cardsTotal;
    const cards = user?.[dataType];
    if (cards) {
        const cardsKeys = Object.keys(cards);
        cardsTotal = cardsKeys.length;
    } else {
        cardsTotal = 0;
    }

    return (
        <main className="bg-[#fff] p-6 rounded-xl text-[#0F0F0F] flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-[16px] md:text-[18px] font-bold">All <span>{type}</span> Cards <span>({cardsTotal})</span></h1>

            <section className="w-full md:w-auto flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-6">
                <div className="grid gap-2 w-full md:w-auto">
                    <p className="text-[12px] md:text-[14px] font-medium text-center md:text-left">Quick search a card by name</p>
                    <input type="search" className="input pr-10" />
                </div>
                <button className="w-full md:w-auto bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white text-[14px] md:text-[16px]">Search</button>
            </section>
        </main>
    );
}

export default Search;
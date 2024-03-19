import { database } from "@/app/firebase/config";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";
import { usePathname } from "next/navigation";
import Pagination from "./Pagination";

// Interface for props passed to the component
interface props {
  title: string;
  cardType: string;
  user: any;
}

interface CardData {
  cardNumber: string | null;
  cardCVV: string | null;
  cardType: string;
  date: string;
}

const CardDetails: React.FC<props> = ({ title, cardType, user }) => {
  const [fetchedCards, setFetchedCards] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const pathName = usePathname()
  const isDashboardRoute = pathName === '/dashboard';

  // Fetch data based on cardType
  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true); // Set loading to true before fetching

      if (user) {
        const userRef = ref(database, `users/${user.uid}/${cardType}`);
        try {
          const snapshot = await get(userRef); // Fetch user's cards
          const data = snapshot.val(); // Get data as an object
          if (data) {
            const cardArray: CardData[] = Object.values(data) as CardData[]; // Explicitly cast to CardData[]
            setFetchedCards(cardArray);
          } else {
            setFetchedCards([]); // Set to empty array if no data
          }
        } catch (error) {
          // Handle errors appropriately (e.g., display error message)
          console.error(`Error fetching ${cardType.toLocaleLowerCase()}:`, error);
        } finally {
          setIsLoading(false); // Set loading to false after fetching
        }
      }
    };

    fetchCards(); // Call fetchCards on component mount
  }, [user, cardType]); // Re-run useEffect on user or cardType change

  // Calculate the actual index of each item in the entire list
  const calculateActualIndex = (currentIndex: number) => {
    return indexOfFirstCard + currentIndex + 1;
  };

  // Pagination logic
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const currentCards = fetchedCards.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="w-full grid gap-4 p-6 rounded-xl bg-white">
      <h1 className="text-[18px] md:text-[24px] font-bold">{title}</h1>

      {isLoading ? (
        <div className="w-full flex items-center justify-center">
          <LuLoader2
            className="animate-spin text-orange text-4xl font-semibold text-center"
          />
        </div>
      ) : fetchedCards.length === 0 ? (
        <div className="text-center py-4">No {title} Details Yet.</div>
      ) : (
        <div className="grid gap-4 overflow-x-scroll sm:overflow-hidden">
          <div className="text-[16px] md:text-[18px] font-bold flex items-center justify-between">
            <h1 className="w-[50px]">S/N</h1>
            <h1 className="w-[150px]">Card Name</h1>
            <h1 className="w-[100px]">Card CVV</h1>
            <h1 className="w-[200px]">Card Number</h1>
            <h1 className="w-[100px]">Date</h1>
          </div>
          {isDashboardRoute ? (
            fetchedCards.slice(-5).reverse().map((cardData, index) => (
              <div key={index} className="text-[14px] md:text-[16px] font-normal flex items-center justify-between">
                <h1 className="w-[50px] py-2">{index + 1}</h1>
                <h1 className="w-[150px] py-2">{cardData.cardType}</h1>
                <h1 className="w-[100px] py-2">{cardData.cardCVV}</h1>
                <h1 className="w-[200px] py-2">{cardData.cardNumber}</h1>
                <h1 className="w-[100px] py-2">{cardData.date}</h1>
              </div>
            ))
          ) : (
            currentCards.map((cardData, index) => (
              <div key={index} className="text-[14px] md:text-[16px] font-normal flex items-center justify-between">
                <h1 className="w-[50px] py-2">{calculateActualIndex(index)}</h1>
                <h1 className="w-[150px] py-2">{cardData.cardType}</h1>
                <h1 className="w-[100px] py-2">{cardData.cardCVV}</h1>
                <h1 className="w-[200px] py-2">{cardData.cardNumber}</h1>
                <h1 className="w-[100px] py-2">{cardData.date}</h1>
              </div>
            ))
          )}
        </div>
      )}
      {!isDashboardRoute && fetchedCards.length !== 0 && (
        <Pagination
          totalItems={fetchedCards.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </main>
  );
};

export default CardDetails;

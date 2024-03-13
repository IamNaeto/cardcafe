import { database } from "@/app/firebase/config";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { LuLoader2 } from "react-icons/lu";

// Interface for props passed to the component
interface props {
  title: string;
  type: string;
  cardType: string;
  user: any;
}

interface CardData {
    cardNumber: string | null;
    cardCVV: string | null;
    cardType: string;
    date: string;
  }

const CardDetails: React.FC<props> = ({ title, type, cardType, user }) => {
  // State variables
  const [fetchedCards, setFetchedCards] = useState<CardData[]>([]); // Array to store fetched cards
  const [isLoading, setIsLoading] = useState(true); // Loading state

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
            <h1 className="w-[200px]">{type}</h1>
          </div>
          {fetchedCards.map((cardData, index) => (
            <div key={index} className="text-[14px] md:text-[16px] font-normal flex items-center justify-between">
              <h1 className="w-[50px] py-2">{index + 1}</h1> {/* Use index for S/N */}
              <h1 className="w-[150px] py-2">{cardData.cardType}</h1>
              <h1 className="w-[100px] py-2">{cardData.cardCVV}</h1>
              <h1 className="w-[200px] py-2">{cardData.cardNumber}</h1>
              <h1 className="w-[200px] py-2">{cardData.date}</h1>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default CardDetails;

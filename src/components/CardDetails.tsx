interface props {
    title: string;
    type: string
}
const CardDetails: React.FC<props> = ({title, type}) => {
    interface cardDetailType {
        id: number;
        number: number;
        cardName: string;
        cardNumber: string;
        downloadedDate: string
    }

    const cardDetails: cardDetailType[] = [
        {
            id: 1,
            number: 1,
            cardName: "Master Card",
            cardNumber: "2034   2132   3453   2134",
            downloadedDate: "07/12/2022"

        },
        {
            id: 2,
            number: 2,
            cardName: "Visa",
            cardNumber: "2034   2132   3453   2134",
            downloadedDate: "07/12/2022"

        },
        {
            id: 3,
            number: 3,
            cardName: "Master Card",
            cardNumber: "2034   2132   3453   2134",
            downloadedDate: "07/12/2022"

        },
        {
            id: 4,
            number: 4,
            cardName: "Verve",
            cardNumber: "2034   2132   3453   2134",
            downloadedDate: "07/12/2022"

        },
        {
            id: 5,
            number: 5,
            cardName: "Verve",
            cardNumber: "2034   2132   3453   2134",
            downloadedDate: "07/12/2022"

        },
        {
            id: 6,
            number: 6,
            cardName: "Visa",
            cardNumber: "2034   2132   3453   2134",
            downloadedDate: "07/12/2022"

        },
    ]

    return ( 
        <main className="w-full grid gap-4 p-6 rounded-xl bg-white">
            <h1 className="text-[18px] md:text-[24px] font-bold">{title}</h1>

            <div className="grid gap-4 overflow-x-scroll sm:overflow-hidden">
                <div className="text-[16px] md:text-[18px] font-bold flex items-center justify-between">
                    <h1 className="w-[50px]">S/N</h1>
                    <h1 className="w-[150px]">Card Name</h1>
                    <h1 className="w-[200px]">Card Number</h1>
                    <h1 className="w-[200px]">{type}</h1>
                </div>
                {cardDetails.map((cardDetail, id) =>(
                <div key={id} className="text-[14px] md:text-[16px] font-normal flex items-center justify-between">
                    <h1 className="w-[50px] py-2">{cardDetail.number}</h1>
                    <h1 className="w-[150px] py-2">{cardDetail.cardName}</h1>
                    <h1 className="w-[200px] py-2">{cardDetail.cardNumber}</h1>
                    <h1 className="w-[200px] py-2">{cardDetail.downloadedDate}</h1>
                </div>
                ))}
            </div>

        </main>
     );
}
 
export default CardDetails;
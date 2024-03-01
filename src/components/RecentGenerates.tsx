const RecentGenerates = () => {
    interface recentGenType {
        id: number;
        number: number;
        cardName: string;
        cardNumber: string;
        downloadedDate: string
    }

    const recentGenData: recentGenType[] = [
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
            cardName: "Master Card",
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
            cardName: "Master Card",
            cardNumber: "2034   2132   3453   2134",
            downloadedDate: "07/12/2022"

        },
        {
            id: 5,
            number: 5,
            cardName: "Master Card",
            cardNumber: "2034   2132   3453   2134",
            downloadedDate: "07/12/2022"

        },
    ]

    return ( 
        <main className="w-full grid gap-4 p-4 rounded-xl bg-white">
            <h1 className="text-[18px] md:text-[24px] font-bold">Recent Generated Cards</h1>

            <div className="grid gap-4">
                <div className="text-[16px] md:text-[18px] font-bold flex items-center justify-between">
                    <h1 className="w-[50px]">S/N</h1>
                    <h1 className="w-[150px]">Card Name</h1>
                    <h1 className="w-[200px]">Card Number</h1>
                    <h1 className="w-[200px]">Downloaded Date</h1>
                </div>
                {recentGenData.map((recentGen, id) =>(
                <div key={id} className="text-[14px] md:text-[16px] font-normal flex items-center justify-between">
                    <h1 className="w-[50px]">{recentGen.number}</h1>
                    <h1 className="w-[150px]">{recentGen.cardName}</h1>
                    <h1 className="w-[200px]">{recentGen.cardNumber}</h1>
                    <h1 className="w-[200px]">{recentGen.downloadedDate}</h1>
                </div>
                ))}
            </div>

        </main>
     );
}
 
export default RecentGenerates;
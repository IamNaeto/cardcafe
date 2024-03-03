import Nav from "./Nav";
import Search from "./Search";
import CardDetails from "./CardDetails";

interface props {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>> ;
    title: string;
}

const GeneratedCardDetails: React.FC<props> = ({menu, setMenu}) => {
    return ( 
        <main className="relative left-0 ml-0  lg:ml-[230px] w-full min-h-screen lg:w-[85%] flex flex-col gap-5 px-[3%] py-4">
            <Nav menu={menu} setMenu={setMenu} title={"Generated Cards"} />
            <Search type={"Generated"} />
            <CardDetails title={"Generated Cards"} type={"Generated Date"} />
        </main>
     );
}
 
export default GeneratedCardDetails;
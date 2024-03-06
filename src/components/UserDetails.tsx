interface detailsProps {
    user: any
}
const UserDetails:React.FC<detailsProps> = ({user}) => {
    return (
        <main className="w-full xl:w-auto grid gap-4 bg-[#fff] p-10 rounded-xl text-[14px] md:text-[16px] font-medium">
            <h1 className="text-[18px] md:text-[24px] font-bold">User Details</h1>

            <form action="" className="grid gap-6 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label htmlFor="">First Name
                        <input type="text" value={user?.firstName} className="input" disabled/>
                    </label>

                    <label htmlFor="">Last Name
                        <input type="text" value={user?.lastName} className="input" disabled/>
                    </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label htmlFor="">Email Address
                        <input type="email" value={user?.email} className="input" disabled/>
                    </label>

                    <label htmlFor="">Phone Number
                        <input type="text" value={"+2348147371491"} className="input" disabled/>
                    </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label htmlFor="">Username
                        <input type="text" value={"Annabella"} className="input" disabled/>
                    </label>

                    <label htmlFor="">Residential Address
                        <input type="text" value={"Lagos, Nigeria"} className="input" disabled/>
                    </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Edit Profile</button>
                    <button className="bg-gradient-to-b from-orange to-yellow hover-orange hover:shadow-2xl hover:shadow-orange transition-all delay-150 px-5 py-3 rounded-md text-white">Save</button>

                </div>
            </form>
        </main>
    );
}

export default UserDetails;
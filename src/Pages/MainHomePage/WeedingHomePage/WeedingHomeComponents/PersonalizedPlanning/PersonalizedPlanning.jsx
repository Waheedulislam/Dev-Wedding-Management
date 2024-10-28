const PersonalizedPlanning = () => {
    return (
        <div className="mt-20 mb-28">
            <img
                src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/body_bird-e1658928223548-1.png"
                alt=""
                className="ml-12"

            />
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">

                <div className="lg:w-1/2 w-full flex flex-col justify-center items-start">
                    <p className="text-xl text-[#F4A492] my-4">Personalized Planning</p>
                    <h1 className="text-5xl font-semibold text-gray-800 my-4">
                        Features of Our <br /> Wedding and Event <br /> Planning Services
                    </h1>
                    <p className="text-xl text-gray-800 my-4">
                        Planning a wedding can be both exciting and overwhelming! Here’s a personalized approach to help you get started.
                    </p>
                    <div className="flex items-center gap-4 my-8">
                        <img src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-planning-video-icon.png" alt="" />
                        <h4 className="text-2xl text-[#F4A492] ">WATCH VIDEO</h4>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full grid md:grid-cols-2 grid-cols-1 justify-items-center gap-8">
                    {/* div-1 */}
                    <div className="flex flex-col justify-center  items-start">
                        <img
                            src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-planning-icon-1.png"
                            alt=""
                            className="w-12 h-1w-12 mb-4"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 my-4">Customized Planning</h3>
                            <p className=" text-gray-600 my-2">For a more customized wedding planning experience, let’s tailor it to your preferences.</p>
                        </div>
                    </div>
                    {/* div-2 */}
                    <div className="flex flex-col justify-center  items-start">
                        <img
                            src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-planning-icon-2.png"
                            alt=""
                            className="w-12 h-1w-12 mb-4"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 my-4">Experienced Professional</h3>
                            <p className=" text-gray-600 my-2">To find experienced professionals for your customized wedding planning, here’s a step-by-step approach.</p>
                        </div>
                    </div>
                    {/* div-3 */}
                    <div className="flex flex-col justify-center  items-start">
                        <img
                            src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-planning-icon-3.png"
                            alt=""
                            className="w-12 h-1w-12 mb-4"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 my-4">Vendor Management</h3>
                            <p className=" text-gray-600 my-2">Vendor management is a crucial part of wedding planning, ensuring that all the necessary services.</p>
                        </div>
                    </div>
                    {/* div-4 */}
                    <div className="flex flex-col justify-center  items-start">
                        <img
                            src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-planning-icon-4.png"
                            alt=""
                            className="w-12 h-12 mb-4"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 my-4">Timeline Creation</h3>
                            <p className=" text-gray-600 my-2">Creating a wedding timeline is essential for ensuring that everything runs smoothly on your big day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalizedPlanning;

import { motion } from "framer-motion";
const EventItems = () => {

    return (
        <div className="my-20">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Event Items</h2>
                <p className="max-w-lg w-full mx-auto my-4">
                    Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
                    ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
                </p>
            </div>
            <div className="grid grid-cols-12 gap-3   my-8">
                <div className="col-span-12 md:col-span-8 ">
                    <div className="grid grid-cols-12 gap-2 ">
                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}

                            className="bg-gray-200 flex flex-col justify-between p-4 col-span-6 rounded-md "
                        >
                            <img
                                className="w-full rounded-md "
                                src="https://plus.unsplash.com/premium_photo-1661541327117-19af15d76579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGV2ZW50JTIwaXRlbXN8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />

                            <h6 className="my-2">Event Items 1</h6>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}

                            className="bg-gray-200 flex flex-col justify-between p-4 col-span-6 rounded-md"
                        >
                            <img
                                className="w-full rounded-md"
                                src="https://images.unsplash.com/photo-1638740396066-e5186f6dd452?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50JTIwaXRlbXN8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />

                            <h6 className="my-2">Event Items 2</h6>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}

                            className="bg-gray-200 flex flex-col justify-between p-4 col-span-6 md:col-span-3 rounded-md "
                        >
                            <img
                                className="w-full rounded-md md:h-[90%] object-cover "
                                src="https://images.unsplash.com/photo-1638740396066-e5186f6dd452?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50JTIwaXRlbXN8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />

                            <h6 className="my-2">Event Items 5</h6>
                        </motion.div>
                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}

                            className="bg-gray-200 flex flex-col justify-between p-4 col-span-6 md:col-span-3  rounded-md "
                        >
                            <img
                                className="w-full rounded-md md:h-[90%] object-cover "
                                src="https://images.unsplash.com/photo-1638740394711-1b37092b70f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV2ZW50JTIwaXRlbXN8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />

                            <h6 className="my-2">Event Items 4</h6>
                        </motion.div>

                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",

                            }}

                            className="bg-gray-200 flex flex-col justify-between p-4 col-span-12  md:col-span-6  rounded-md "
                        >
                            <img
                                className="w-full rounded-md h-full object-cover"
                                src="https://images.unsplash.com/photo-1638740396066-e5186f6dd452?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50JTIwaXRlbXN8ZW58MHx8MHx8fDA%3D"
                                alt=""
                            />

                            <h6 className="my-2">Event Items 25</h6>
                        </motion.div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    className="bg-gray-200 flex flex-col justify-between p-4 col-span-12 md:col-span-4 rounded-md h-full">
                    <img
                        className="w-full rounded-md h-full object-cover"
                        src="https://images.unsplash.com/photo-1603802872032-8989a32ac93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnQlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                    />

                    <h6 className="my-2">Event Items 12</h6>
                </div>
            </div>
        </div>
    );
};

export default EventItems;

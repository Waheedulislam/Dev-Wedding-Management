import { Card, CardActionArea, CardContent, } from "@mui/material";

const Section = () => {
    return (
        <div className="relative  h-[540px] ">

            {/* Background image */}
            <div
                className="absolute inset-0 opacity-70 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://cdn0.weddingwire.com/article/7303/3_2/960/jpg/3037-civicphotos.jpeg')`
                }}
            />
            {/* Overlay color */}
            <div className="absolute inset-0 bg-gray-200 opacity-70" />

            {/* Content on top */}
            <div className="relative   px-2 justify-items-center items-center h-full gap-2 grid grid-cols-2  lg:grid-cols-4">

                {/* Card 1 */}
                <Card

                    sx={{
                        maxWidth: 380,
                        borderTopRightRadius: '20%', // Top-right rounded corner
                        borderBottomLeftRadius: '20%',// Bottom-left rounded corner
                        transition: 'background-color 0.3s'
                    }}
                >
                    <Card
                        sx={{
                            maxWidth: 380,
                            transition: 'background-color 0.3s'
                        }}
                    >
                        <CardActionArea className="flex flex-col items-center text-center ">

                            <CardContent >
                                <div className="text-center">
                                    <div className="flex items-center justify-center bg-[#9ACCCA] hover:bg-[#F4A492] rounded-full p-4 mt-4 lg:mx-14 mx-8 transition-colors duration-300">
                                        <img
                                            src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-counter-icon-1.png"
                                            alt="People Icon"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-[#9ACCCA] hover:text-[#F4A492] my-4 text-5xl font-bold mb-4 transition-colors duration-300">
                                            545<sup>+</sup>
                                        </h1>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p>PROJECTS DONE</p>
                                </div>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Card>
                {/* Card 2 */}
                <Card
                    sx={{
                        maxWidth: 380,
                        borderTopRightRadius: '20%', // Top-right rounded corner
                        borderBottomLeftRadius: '20%',// Bottom-left rounded corner
                        transition: 'background-color 0.3s'
                    }}
                >
                    <Card
                        sx={{
                            maxWidth: 380,
                            transition: 'background-color 0.3s'
                        }}
                    >
                        <CardActionArea className="flex flex-col items-center text-center">

                            <CardContent>
                                <div className="text-center">
                                    <div className="flex items-center justify-center bg-[#9ACCCA] hover:bg-[#F4A492] rounded-full p-4 mt-4 lg:mx-14 mx-8 transition-colors duration-300">
                                        <img
                                            src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-counter-icon-2.png"
                                            alt="People Icon"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-[#9ACCCA] hover:text-[#F4A492] my-4 text-5xl font-bold mb-4 transition-colors duration-300">
                                            90<sup>+</sup>
                                        </h1>
                                    </div>
                                </div>

                                <div className="text-center text-nowrap">
                                    <p>PEOPLE INVOLVED</p>
                                </div>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Card>
                {/* Card 3 */}
                <Card

                    sx={{
                        maxWidth: 380,
                        borderTopRightRadius: '20%', // Top-right rounded corner
                        borderBottomLeftRadius: '20%',// Bottom-left rounded corner
                        transition: 'background-color 0.3s'
                    }}
                >
                    <Card
                        sx={{
                            maxWidth: 380,
                            transition: 'background-color 0.3s'
                        }}
                    >
                        <CardActionArea className="flex flex-col items-center text-center ">

                            <CardContent>
                                <div className="text-center">
                                    <div className="flex items-center justify-center bg-[#9ACCCA] hover:bg-[#F4A492] rounded-full p-4 mt-4 lg:mx-12 mx-8 transition-colors duration-300">
                                        <img
                                            src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-counter-icon-3.png"
                                            alt="People Icon"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-[#9ACCCA] hover:text-[#F4A492] my-4 text-5xl font-bold mb-4 transition-colors duration-300">

                                            15<sup>+</sup>
                                        </h1>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p>COUNTRY WORK</p>
                                </div>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Card>
                {/* Card 4 */}
                <Card
                    sx={{
                        maxWidth: 380,
                        borderTopRightRadius: '20%', // Top-right rounded corner
                        borderBottomLeftRadius: '20%',// Bottom-left rounded corner
                        transition: 'background-color 0.3s'
                    }}
                >
                    <Card
                        sx={{
                            maxWidth: 380,
                            transition: 'background-color 0.3s'
                        }}
                    >
                        <CardActionArea className="flex flex-col items-center text-center">

                            <CardContent>
                                <div className="text-center">
                                    <div className="flex items-center justify-center bg-[#9ACCCA] hover:bg-[#F4A492] rounded-full p-4 mt-4 lg:mx-14 mx-8  transition-colors duration-300">
                                        <img
                                            src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-counter-icon-4.png"
                                            alt="People Icon"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-[#9ACCCA] hover:text-[#F4A492] my-4 text-5xl font-bold mb-4 transition-colors duration-300">

                                            17<sup>+</sup>
                                        </h1>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <p>AWARD WON</p>
                                </div>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Card>

                {/* Card 2 */}



            </div>
        </div>
    );
};

export default Section;

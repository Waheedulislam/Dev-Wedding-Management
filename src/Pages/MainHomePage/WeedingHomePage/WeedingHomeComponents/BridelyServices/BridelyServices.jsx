import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";


const BridelyServices = () => {
    return (
        <div className="bg-[#9ACCC9] bg-opacity-15  py-14 md:py-20 ">

            <div className=" sm:px-6 lg:px-8 mt-8">
                <div className="text-center ">
                    <p className="text-lg md:text-xl mb-2 text-[#F4A492]">Bridely Services</p>
                    <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        Bringing Your Dream <br /> Event to Life
                    </h1>
                </div>
                <div className="flex items-end justify-end  lg:-mb-40 -mb-48">
                    <img src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-servicest-green-circle-shape.png" alt="" />
                </div>
                {/* card-div  */}
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 justify-items-center items-center gap-4">


                        <Card
                            sx={{
                                maxWidth: 345,
                                borderTopRightRadius: '10%', // Top-right rounded corner
                                borderBottomLeftRadius: '10%', // Bottom-left rounded corner
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://designingmedia.com/bridely/wp-content/uploads/2024/03/services-img-1.jpg"
                                    alt="Wedding Planning"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        sx={{ my: 4, mx: 2 }} // Top and bottom margin of 8
                                    >
                                        Wedding Planning
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', my: 4, mx: 2 }}>
                                        Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus maiores alias conseuatur aut Molestiae non…
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>


                        {/* card-2  */}
                        <Card sx={{
                            maxWidth: 345,
                            borderTopRightRadius: '10%', // Top-right rounded corner
                            borderBottomLeftRadius: '10%', // Bottom-left rounded corner
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://designingmedia.com/bridely/wp-content/uploads/2024/03/services-img-2.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom
                                        variant="h5"
                                        component="div"
                                        sx={{ my: 4, mx: 2 }}>
                                        Corporate Events
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', my: 4, mx: 2 }}>
                                        Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus maiores alias conseuatur aut Molestiae non…
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        {/* card-3  */}
                        <Card sx={{
                            maxWidth: 345,
                            borderTopRightRadius: '10%', // Top-right rounded corner
                            borderBottomLeftRadius: '10%', // Bottom-left rounded corner
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://designingmedia.com/bridely/wp-content/uploads/2024/03/services-img-3.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom
                                        variant="h5"
                                        component="div"
                                        sx={{ my: 4, mx: 2 }}>
                                        Social Gatherings
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', my: 4, mx: 2 }}>
                                        Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus maiores alias conseuatur aut Molestiae non…
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>




                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="w-60  mt-14 rounded-full bg-[#9ACCC9] text-white font-semibold py-5   transition duration-300 hover:bg-[#F4A492]"
                    >
                        View All Services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BridelyServices;
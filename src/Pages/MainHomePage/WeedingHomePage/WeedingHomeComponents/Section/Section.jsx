import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const Section = () => {
    return (
        <div className="relative h-[500px] mt-20">

            {/* Background image */}
            <div
                className="absolute inset-0 opacity-70 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://cdn0.weddingwire.com/article/7303/3_2/960/jpg/3037-civicphotos.jpeg')`
                }}
            />
            {/* Overlay color */}
            <div className="absolute inset-0 bg-[#F4A492] opacity-70" />

            {/* Content on top */}
            <div className="relative  container mx-auto justify-center items-center h-full gap-8 grid grid-cols-2 lg:grid-cols-4">

                {/* Card 1 */}
                <Card
                    sx={{
                        maxWidth: 345,
                        transition: 'background-color 0.3s'
                    }}
                >
                    <Card
                        sx={{
                            maxWidth: 345,
                            transition: 'background-color 0.3s'
                        }}
                    >
                        <CardActionArea>
                            <div style={{ backgroundColor: '#9ACCCA', height: '140px' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-counter-icon-1.png"
                                    alt="People Involved"
                                    style={{ opacity: 0.9 }}
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    90+
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    PEOPLE INVOLVED
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Card>

                {/* Card 2 */}
                <Card
                    sx={{
                        maxWidth: 345,
                        transition: 'background-color 0.3s'
                    }}
                >
                    <CardActionArea>
                        <div style={{ backgroundColor: '#9ACCCA', height: '140px' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-counter-icon-2.png"
                                alt="People Involved"
                                style={{ opacity: 0.9 }}
                            />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                90+
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                PEOPLE INVOLVED
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                {/* Card 3 */}
                <Card
                    sx={{
                        maxWidth: 345,
                        transition: 'background-color 0.3s'
                    }}
                >
                    <CardActionArea>
                        <div style={{ backgroundColor: '#9ACCCA', height: '140px' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-counter-icon-3.png"
                                alt="Country Work"
                                style={{ opacity: 0.9 }}
                            />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                15+
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                COUNTRIES WORKED
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                {/* Card 4 */}
                <Card
                    sx={{
                        maxWidth: 345,
                        transition: 'background-color 0.3s',

                    }}
                >
                    <CardActionArea>
                        <div style={{ backgroundColor: '#9ACCCA', height: '140px' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-counter-icon-4.png"
                                alt="Awards Won"
                                style={{ opacity: 0.9 }}
                            />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                17+
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                AWARDS WON
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


            </div>
        </div>
    );
};

export default Section;

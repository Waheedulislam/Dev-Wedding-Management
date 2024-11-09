import { BookCopy, Microscope } from "lucide-react";

const UpcomingEvents = () => {
    return (
        <div className="container mx-auto px-2 flex flex-col md:flex-row-reverse gap-16  items-center justify-between my-20">



            <div>
                <h2 className="text-5xl font-bold lg:mb-20">Upcoming Events</h2>
                <p className="my-4">
                    Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
                    ornare viverra. Ultrices faucibus neque velit risus ac id lorem. Ut
                    posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
                    ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
                </p>
                <div className="bg-red-50 p-4">
                    <div className="flex gap-4 items-baseline">
                        <span>
                            <BookCopy />
                        </span>
                        <span>
                            <h4 className="mb-1">Golf Clubbers Annual Agenda</h4>
                            <p>
                                Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                                tortor in tellus dictum pellentesque.
                            </p>
                        </span>
                    </div>
                    <div className="my-5 border-y border-gray-200" />
                    <div className="flex gap-4 items-baseline">
                        <span>
                            <Microscope />
                        </span>
                        <span>
                            <h4 className="mb-1">Music Events at LA</h4>
                            <p>
                                Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                                tortor in tellus dictum pellentesque.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <img
                className="h-full w-full rounded-lg"
                src="https://media.istockphoto.com/id/1382269943/photo/group-of-diverse-business-people-on-panel-discussion.webp?b=1&s=170667a&w=0&k=20&c=q2zvoICKkWAun9dbCapjD99kZvHd2PnfF60CrjsoVII="
                alt="Diverse business people in panel discussion"
            />

        </div>
    );
};

export default UpcomingEvents;

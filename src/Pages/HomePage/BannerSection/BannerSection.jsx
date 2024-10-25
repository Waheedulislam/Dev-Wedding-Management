import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const BannerSection = () => {
    return (
        <div className="my-6 ">
            <div className="relative">
                <img
                    className="w-full h-[608px] object-cover"
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JvdXAlMjB0YWxrfGVufDB8fDB8fHww"
                    alt=""
                />
                <div className="absolute inset-0 w-full h-full bg-[#141427] opacity-60"></div>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0.7 }}
                    animate={{ scale: 0.95, opacity: 1 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "mirror",
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-40 border"
                >
                    <motion.div
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white p-2 rounded-full cursor-pointer"
                    >
                        <PlayCircle className="text-primary-color"></PlayCircle>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default BannerSection;

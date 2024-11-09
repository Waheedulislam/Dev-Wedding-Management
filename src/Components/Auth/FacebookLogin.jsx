import { Facebook } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const FacebookLogin = () => {
    return (
        <div>
            <button className=" w-full gap-2 mx-2" onClick={() => window.location.href = '/auth/google'}>
                <IconButton aria-label="Facebook" style={{ backgroundColor: '#4267B2', color: 'white' }} className="rounded-full shadow">
                    <Facebook />
                </IconButton>
            </button>
        </div>
    );
};

export default FacebookLogin;
import { Google } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const GoogleLogin = () => {
    return (
        <div>

            <button className="w-full  gap-2 mx-2" onClick={() => window.location.href = '/auth/google'}>
                <IconButton aria-label="Google" style={{ backgroundColor: '#DB4437', color: 'white' }} className="rounded-full shadow">
                    <Google />

                </IconButton>

            </button>

        </div>
    );
};

export default GoogleLogin;
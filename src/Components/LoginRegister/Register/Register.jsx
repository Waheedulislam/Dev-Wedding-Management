import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import GoogleLogin from '../../Auth/GoogleLogin';
import FacebookLogin from '../../Auth/FacebookLogin';

function Register() {
    return (
        <div className="flex h-screen mt-10 items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Register Now</h2>

                <form>
                    <div className="mb-6">
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#9ACCC9' },
                                    '&:hover fieldset': { borderColor: '#F4A492' },
                                    '&.Mui-focused fieldset': { borderColor: '#F4A492' }
                                }
                            }}
                        />
                    </div>

                    <div className="mb-6">
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#9ACCC9' },
                                    '&:hover fieldset': { borderColor: '#F4A492' },
                                    '&.Mui-focused fieldset': { borderColor: '#F4A492' }
                                }
                            }}
                        />
                    </div>

                    <div className="mb-6">
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            required
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#9ACCC9' },
                                    '&:hover fieldset': { borderColor: '#F4A492' },
                                    '&.Mui-focused fieldset': { borderColor: '#F4A492' }
                                }
                            }}
                        />
                    </div>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: '#9ACCC9', // Initial background color
                            color: 'black',
                            padding: '12px 0', // Increased padding for a larger button
                            '&:hover': {
                                backgroundColor: '#F4A492', // Hover background color
                                color: 'white', // Keep text color white on hover
                            },
                        }}
                    >
                        Register
                    </Button>
                </form>

                <p className="text-center text-gray-600 mt-6">Or sign in with</p>

                <div className="flex items-center gap-4 justify-center mt-4">
                    <GoogleLogin />
                    <FacebookLogin />
                </div>

                <p className="text-sm text-center text-gray-600 mt-6">
                    Already have an account? <Link to="/weeding/login" className="text-blue-500 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;

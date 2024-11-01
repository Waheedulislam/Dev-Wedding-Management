import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Auth/GoogleLogin";
import FacebookLogin from "../../Auth/FacebookLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../../api/api";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Data being sent:", data); // Check the data structure
    try {
      const response = await API.post("/auth/login", data);
      console.log("Response:", response); // Log the full response

      // Check if the response contains a token
      if (response.data.token) {
        toast.success("Login successful!", { autoClose: 2000 });
        localStorage.setItem("tokens", response.data.token);
        setTimeout(() => {
          navigate("/weeding/weedingHome"); // Redirect to home page after login
        }, 2000);
      } else {
        toast.error("Login failed. Please try again.", { autoClose: 3000 });
      }

      //     try {
      //       const response = await axios.post(
      //         "http://localhost:5000/api/auth/login",
      //         data
      //       );
      //       const { token } = response.data;
      //       localStorage.setItem("token", token);
      //       toast.success({
      //         message: "Login Successful",
      //         description: "Welcome back!",
      //       });
      //       navigate("/");
    } catch (error) {
      console.error("Full error response:", error.response); // Log complete error response
      toast.error(
        error.response?.data?.message || "Login failed. Please try again.",
        { autoClose: 3000 }
      );
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Login Now
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#9ACCC9" },
                  "&:hover fieldset": { borderColor: "#F4A492" },
                  "&.Mui-focused fieldset": { borderColor: "#F4A492" },
                },
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
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#9ACCC9" },
                  "&:hover fieldset": { borderColor: "#F4A492" },
                  "&.Mui-focused fieldset": { borderColor: "#F4A492" },
                },
              }}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#9ACCC9",
              color: "black",
              padding: "12px 0",
              "&:hover": {
                backgroundColor: "#F4A492",
                color: "white",
              },
            }}
          >
            Login
          </Button>
        </form>

        <p className="text-center text-gray-600 mt-6">Or sign in with</p>

        <div className="flex items-center gap-4 justify-center mt-4">
          <GoogleLogin />
          <FacebookLogin />
        </div>

        <p className="text-sm text-center text-gray-600 mt-6">
          Do not have an account?{" "}
          <Link
            to="/weeding/register"
            className="text-blue-500 hover:underline"
          >
            Register here
          </Link>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;

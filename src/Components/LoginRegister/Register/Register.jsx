import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Auth/GoogleLogin";
import FacebookLogin from "../../Auth/FacebookLogin";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../../api/api";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await API.post("/auth/register", data);
      console.log(response);

      if (response.data.message) {
        toast.success("Registration successful!", { autoClose: 2000 });
        setTimeout(() => {
          navigate("/weeding/login");
        }, 2000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Registration failed. Please try again.";
      console.error("Error:", errorMessage);
      toast.error(`Error: ${errorMessage}`, { autoClose: 3000 });
    }
  };

  return (
    <div className="flex h-screen mt-10 items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <ToastContainer /> {/* ToastContainer for displaying toasts */}
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Register Now
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
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
              label="Email"
              variant="outlined"
              fullWidth
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
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
            Register
          </Button>
        </form>
        <p className="text-center text-gray-600 mt-6">Or sign in with</p>
        <div className="flex items-center gap-4 justify-center mt-4">
          <GoogleLogin />
          <FacebookLogin />
        </div>
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/weeding/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

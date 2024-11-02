import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Auth/GoogleLogin";
import FacebookLogin from "../../Auth/FacebookLogin";
import { ToastContainer, toast } from "react-toastify"; // Import toast for notifications
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

function Login() {
  const { signIn, loading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("getting data", data);

    try {
      await signIn(data.email, data.password); // Ensure to pass email and password separately
      navigate("/weeding/weedingHome");
    } catch (error) {
      console.error("Full error response:", error.response);
      // Handle error, you can customize the error message based on your API response
      toast.error(
        "Failed to log in. Please check your credentials and try again."
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
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is invalid",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
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
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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

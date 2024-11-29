import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
// import GoogleLogin from "../../Auth/GoogleLogin";
// import FacebookLogin from "../../Auth/FacebookLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios"; // Added to fix the 'axios' is not defined error

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser, loading } = useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log("Form data submitted:", data); // Added console log for form data
    try {
      await createUser(data.name, data.email, data.password, data.imgSrc);
      toast.success("Registration successful!", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Registration failed. Please try again.";
      console.error("Error:", errorMessage); // Added console log for error message
      toast.error(`Error: ${errorMessage}`, { autoClose: 3000 });
    }
  };

  const uploadImageToImageBB = async (image) => {
    console.log("Uploading image to ImageBB:", image); // Added console log for image upload
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=97099935520e7352c4d76225795a2662`,
        formData
      );
      console.log("Image uploaded successfully:", response.data.data.url); // Added console log for successful image upload
      return response.data.data.url;
    } catch (error) {
      console.error("Image upload failed:", error); // Added console log for image upload failure
    }
  };

  const handleImageUpload = async (e) => {
    console.log("Image upload event:", e); // Added console log for image upload event
    const file = e.target.files[0];
    if (file) {
      try {
        const imageUrl = await uploadImageToImageBB(file);
        register("imgSrc", { value: imageUrl }); // Changed to use react-hook-form's register function
        console.log("Image URL registered:", imageUrl); // Added console log for registered image URL
      } catch (error) {
        console.error("Error uploading image:", error); // Added console log for error uploading image
        toast.error("Failed to upload image");
      }
    }
  };

  return (
    <div className="flex h-screen mt-10 items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <ToastContainer />
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
          <div className="mb-6">
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageUpload}
              className="file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
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
            disabled={loading}
          >
            Register
          </Button>
        </form>
        {/* <p className="text-center text-gray-600 mt-6">Or sign in with</p>
        <div className="flex items-center gap-4 justify-center mt-4">
          <GoogleLogin />
          <FacebookLogin />
        </div> */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import CancelIcon from "@mui/icons-material/Cancel";
import { AuthContext } from "../../../../Providers/AuthProvider";
import API from "../../../../api/api";
import { toast } from "react-toastify";


const PlanPayment = () => {
  const [meetLink, setMeetLink] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const { planId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  let planPrice = 0;

  if (planId === "BasicPlan") {
    planPrice = 599;
  } else if (planId === "StandardPlan") {
    planPrice = 799;
  } else {
    planPrice = 999
  }

  const handlePayment = async () => {

    if (!user) {
      navigate('/Login')
    } else {
      const response = API.post("/create-payment", {
        eventPlan: planId, // Send event plan array with product information
        planPrice: parseFloat(planPrice), // Send total price
        customerName: user.name, // Send User Name
        customerEmail: user.email, // Send User Email
      })
        .then((res) => {
          console.log("payment page 25:", res);
          const redirectUrl = res.data.paymentUrl;
          console.log(redirectUrl)

          //
          if (redirectUrl) {
            window.location.replace(redirectUrl);
          }
          // setLoader(false);
        })
        .catch((error) => {
          console.error("Error creating payment:", error);
          toast.error("There was an error processing your payment. Please try again.");
        });


      // Mock payment verification success
      console.log(response)
      const paymentSuccessful = true;
      // if (paymentSuccessful) {
      //   setIsPaid(true);
      //   // fetchMeetLink();
      // }
      if (paymentSuccessful) {
        setIsPaid(true);
        toast.success("Payment Successful! Redirecting...");
        setTimeout(() => {
          window.location.replace("http://localhost:5173/payment-success");
        }, 2000); // 2 সেকেন্ড অপেক্ষা করে রিডাইরেক্ট
      }

    }
  };
  // const fetchMeetLink = async () => {
  //   try {
  //     const response = await API.post("/meet",);
  //     console.log(response)
  //     if (response.data.meetLink) {
  //       setMeetLink(response.data.meetLink);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching Meet link:", error);
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center w-full  p-4 mt-[200px]">
      <div className="bg-white rounded-lg shadow-md p-6  max-w-md   ">
        <h1 className="text-2xl font-bold mb-4 text-center">Service Payment</h1>


        {planId === "BasicPlan" && (
          <div className="group relative flex flex-col items-center bg-white border border-transparent rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 w-full md:w-80 lg:w-96 p-8 hover:border-pink-500  bg-clip-padding bg-gradient-to-tr from-pink-100 to-transparent">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic</h3>
            <div className="relative p-4 border-2 border-pink-400 rounded-full bg-white shadow-lg mb-4">
              <div className="flex items-end justify-center space-x-1">
                <span className="text-4xl font-bold text-pink-500">$</span>
                <span className="text-5xl font-bold text-gray-800">599</span>
                <span className="text-xl font-semibold text-gray-700">.99</span>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-center px-4">
              Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 text-sm text-left  pl-5 list-none">
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Full-service Wedding Planning And Coordination
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Unlimited Consultations
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Design And Decor Assistance
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Guest Management Services
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Vendor Management And Negotiations
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Rehearsal Dinner Coordination
              </li>
            </ul>
          </div>
        )}
        {planId === "StandardPlan" && (
          <div className="group relative flex flex-col items-center bg-white border border-transparent rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 w-full md:w-80 lg:w-96 p-8 hover:border-pink-500 bg-clip-padding bg-gradient-to-tr from-transparent to-pink-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Standard</h3>
            <div className="relative p-4 border-2 border-pink-400 rounded-full bg-white shadow-lg mb-4">
              <div className="flex items-end justify-center space-x-1">
                <span className="text-4xl font-bold text-pink-500">$</span>
                <span className="text-5xl font-bold text-gray-800">799</span>
                <span className="text-xl font-semibold text-gray-700">.99</span>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-center px-4">
              Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 text-sm text-left  pl-5 list-none">
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Full-service Wedding Planning And Coordination
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Unlimited Consultations
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Design And Decor Assistance
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Guest Management Services
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Vendor Management And Negotiations
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Rehearsal Dinner Coordination
              </li>
            </ul>
          </div>
        )}
        {planId === "PremiumPlan" && (
          <div className="group relative flex flex-col items-center bg-white border border-transparent rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 w-full md:w-80 lg:w-96 p-8 hover:border-pink-500 bg-clip-padding bg-gradient-to-b from-pink-100 to-transparent">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium</h3>
            <div className="relative p-4 border-2 border-pink-400 rounded-full bg-white shadow-lg mb-4">
              <div className="flex items-end justify-center space-x-1">
                <span className="text-4xl font-bold text-pink-500">$</span>
                <span className="text-5xl font-bold text-gray-800">999</span>
                <span className="text-xl font-semibold text-gray-700">.99</span>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-center px-4">
              Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 text-sm text-left  pl-5 list-none">
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Full-service Wedding Planning And Coordination
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Unlimited Consultations
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Design And Decor Assistance
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Guest Management Services
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Vendor Management And Negotiations
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Rehearsal Dinner Coordination
              </li>
            </ul>
          </div>
        )}

        <p className="text-gray-600 mb-6 text-center mt-[40px]">
          Pay for our service to receive a Meet link.
        </p>

        {!isPaid ? (
          <button
            onClick={handlePayment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Pay Now
          </button>
        ) : (
          <>
            {meetLink ? (
              <a
                href={meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-center block mt-4"
              >
                Join Google Meet
              </a>
            ) : (
              <p>Loading meeting link...</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PlanPayment;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, RefreshCcw, ArrowLeft } from 'lucide-react';

export default function ErrorPage({ statusCode = 404 }) {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  const errorMessages = {
    404: 'Oops! This page seems to have eloped.',
    500: 'Oh no! Our wedding planner hit a snag.',
    default: 'Something went wrong with our wedding plans.',
  };

  const message = errorMessages[statusCode] || errorMessages.default;

  return (
    <div className="min-h-screen bg-gradient-to-b text-center from-pink-100 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-6">
        <div className="mb-6">
          <div className="relative w-full h-full mx-auto">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/152/173/large/temporary-closed-404-error-animation-construction-hanging-signboard-empty-state-4k-concept-footage-with-alpha-channel-transparency-colorful-page-not-found-flash-message-for-ui-ux-web-design-video.jpg"
              alt="Broken wedding rings"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Error {statusCode}</h1>
        <p className="text-xl text-gray-600 mb-6">{message}</p>
        <p className="text-sm text-gray-500 mb-6">
          Don't worry, we'll get you back to planning your perfect day in {countdown} seconds.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center px-4 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center px-4 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-100"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}

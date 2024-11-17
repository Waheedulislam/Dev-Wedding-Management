import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                {/* Header */}
                <div className="text-center p-6">
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h1 className="text-2xl font-bold text-green-700">Payment Successful!</h1>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <p className="text-center text-gray-600">
                        Your transaction has been completed successfully.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                        <div className="flex justify-between">
                            <span className="font-medium">Transaction ID:</span>
                            <span className="text-gray-600">TXN123456789</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Amount Paid:</span>
                            <span className="text-gray-600">৳5,000.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Payment Method:</span>
                            <span className="text-gray-600">Credit Card</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Date:</span>
                            <span className="text-gray-600">Nov 16, 2024</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 flex flex-col items-center space-y-4">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                        Return to Homepage
                    </button>
                    <img
                        src="/placeholder.svg?height=30&width=120"
                        alt="SSL Commerz Logo"
                        className="h-8"
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;

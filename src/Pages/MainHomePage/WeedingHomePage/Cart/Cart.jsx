import { useState } from 'react';
import { Minus, Plus, X, ShoppingCart, Heart } from 'lucide-react';

export default function WeddingCart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Wedding Venue', price: 5000, quantity: 1, image: '/placeholder.svg?height=100&width=100' },
        { id: 2, name: 'Catering Service', price: 2500, quantity: 1, image: '/placeholder.svg?height=100&width=100' },
        { id: 3, name: 'Wedding Dress', price: 1500, quantity: 1, image: '/placeholder.svg?height=100&width=100' },
    ]);

    const similarProducts = [
        { id: 4, name: 'Wedding Cake', price: 500, image: '/placeholder.svg?height=200&width=200' },
        { id: 5, name: 'Floral Arrangements', price: 800, image: '/placeholder.svg?height=200&width=200' },
        { id: 6, name: 'Photography Package', price: 2000, image: '/placeholder.svg?height=200&width=200' },
        { id: 7, name: 'DJ Services', price: 1000, image: '/placeholder.svg?height=200&width=200' },
    ];

    const weddingComponents = [
        { id: 8, name: 'Invitations', price: 300, image: '/placeholder.svg?height=150&width=150' },
        { id: 9, name: 'Wedding Rings', price: 1500, image: '/placeholder.svg?height=150&width=150' },
        { id: 10, name: 'Bridal Accessories', price: 500, image: '/placeholder.svg?height=150&width=150' },
        { id: 11, name: 'Groom\'s Suit', price: 1000, image: '/placeholder.svg?height=150&width=150' },
        { id: 12, name: 'Wedding Favors', price: 200, image: '/placeholder.svg?height=150&width=150' },
        { id: 13, name: 'Transportation', price: 800, image: '/placeholder.svg?height=150&width=150' },
    ];

    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
            ).filter(item => item.quantity > 0)
        );
    };

    const addToCart = (item) => {
        setCartItems(items => {
            const existingItem = items.find(i => i.id === item.id);
            if (existingItem) {
                return items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            } else {
                return [...items, { ...item, quantity: 1 }];
            }
        });
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen mt-16 bg-gradient-to-b from-pink-50 to-white p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                    <ShoppingCart className="mr-2" />
                    Your Wedding Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {cartItems.length === 0 ? (
                            <div className="text-center p-8 bg-white border rounded-lg shadow-md">
                                <p className="text-xl text-gray-600">Your cart is empty. Start adding items to plan your perfect day!</p>
                            </div>
                        ) : (
                            <>
                                {cartItems.map(item => (
                                    <div key={item.id} className="mb-4 bg-white border rounded-lg shadow-md p-4 flex items-center">
                                        <img src={item.image} alt={item.name} width={100} height={100} className="rounded-md" />
                                        <div className="ml-4 flex-grow">
                                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                            <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                className="bg-gray-200 p-2 rounded-full"
                                                onClick={() => updateQuantity(item.id, -1)}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) - item.quantity)}
                                                className="w-16 mx-2 text-center"
                                            />
                                            <button
                                                className="bg-gray-200 p-2 rounded-full"
                                                onClick={() => updateQuantity(item.id, 1)}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <button
                                            className="bg-gray-200 p-2 rounded-full ml-4"
                                            onClick={() => updateQuantity(item.id, -item.quantity)}
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                            </>
                        )}


                        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Wedding Components</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {weddingComponents.map(component => (
                                <div key={component.id} className="bg-white border rounded-lg shadow-md">
                                    <div className="p-4">
                                        <img src={component.image} alt={component.name} width={150} height={150} className="rounded-md mb-2 mx-auto" />
                                        <h3 className="font-semibold text-center">{component.name}</h3>
                                        <p className="text-gray-600 text-center">${component.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between gap-4 p-4">
                                        <button
                                            className="bg-gray-200 flex items-center gap-2 px-2 rounded-lg"
                                        >
                                            <Heart className="h-4 w-4 " />
                                            Save
                                        </button>
                                        <button
                                            className="bg-black text-white py-1 px-4 rounded-lg transition duration-300 hover:bg-gray-800"
                                            onClick={() => addToCart(component)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Similar Products</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {similarProducts.map(product => (
                                <div key={product.id} className="bg-white border rounded-lg shadow-md">
                                    <div className="p-4">
                                        <img src={product.image} alt={product.name} width={200} height={200} className="rounded-md mb-2" />
                                        <h3 className="font-semibold text-lg">{product.name}</h3>
                                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between p-4">
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="w-full bg-black text-white py-2 rounded-lg transition duration-300 "
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8 bg-white border rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between mb-2">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="border-t border-gray-200 mt-4 pt-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xl font-semibold text-gray-800">Total:</span>
                                    <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <button className="w-full bg-black text-white py-2 rounded-lg transition duration-300 hover:bg-gray-800">
                                Proceed to Checkout
                            </button>
                            <p className="text-sm text-gray-600 mt-4">
                                Taxes and additional fees may apply. Final total will be calculated at checkout.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

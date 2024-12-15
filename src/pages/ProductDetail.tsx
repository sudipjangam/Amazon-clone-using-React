import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, Calendar } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Product } from '../types';
import { formatDate } from '../utils/date';

export function ProductDetail() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);

  React.useEffect(() => {
    // In a real app, fetch from API using id
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          ...data,
          images: [
            data.image,
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
            'https://images.unsplash.com/photo-1585298723682-7115561c51b7'
          ],
          deliveryEstimate: {
            date: formatDate(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)),
            isPrime: true
          },
          specifications: {
            'Brand': 'Example Brand',
            'Model': 'XYZ123',
            'Color': 'Black',
            'Material': 'Premium Quality',
            'Warranty': '1 Year'
          }
        });
      });
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-white rounded-lg overflow-hidden">
            <img
              src={product.images?.[selectedImage] || product.image}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-yellow-400' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} - View ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating.rate)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating.count} ratings
            </span>
          </div>

          <div className="border-t border-b py-4">
            <div className="text-3xl font-bold">${product.price}</div>
            {product.deliveryEstimate && (
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <span>
                    Delivery estimate:{' '}
                    <span className="font-semibold">
                      {product.deliveryEstimate.date}
                    </span>
                  </span>
                </div>
                {product.deliveryEstimate.isPrime && (
                  <div className="flex items-center space-x-2 text-sm text-blue-600">
                    <Truck className="w-4 h-4" />
                    <span>Prime Delivery</span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-yellow-400 text-gray-900 py-3 px-4 rounded-md hover:bg-yellow-500 font-medium"
            >
              Add to Cart
            </button>
            <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 font-medium">
              Buy Now
            </button>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-4">About this item</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications || {}).map(([key, value]) => (
                <div key={key}>
                  <dt className="text-sm text-gray-600">{key}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>1 Year Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4" />
              <span>Free Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
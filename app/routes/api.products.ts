import { json } from '@remix-run/node';

export function loader() {

  const products = [
      {
        "id": 1,
        "name": "Wireless Headphones",
        "price": 99.99,
        "description": "High-quality wireless headphones with noise cancellation and long battery life."
      },
      {
        "id": 2,
        "name": "Smartwatch",
        "price": 149.99,
        "description": "Water-resistant smartwatch with heart rate monitoring and fitness tracking features."
      },
      {
        "id": 3,
        "name": "Mechanical Keyboard",
        "price": 79.99,
        "description": "RGB backlit mechanical keyboard with customizable keys and ergonomic design."
      },
      {
        "id": 4,
        "name": "Gaming Mouse",
        "price": 59.99,
        "description": "High-precision gaming mouse with adjustable DPI and programmable buttons."
      },
      {
        "id": 5,
        "name": "4K Monitor",
        "price": 299.99,
        "description": "27-inch 4K UHD monitor with ultra-thin bezels and vibrant color display."
      }
    ];
    return json({products});
}
  
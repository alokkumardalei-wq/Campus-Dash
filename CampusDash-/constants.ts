
import { Product, Category } from './types';

export const CATEGORIES: Category[] = ['All', 'Munchies', 'Tech', 'Stationery', 'Hygiene'];

// Helper to generate IDs
let idCounter = 1;
const getId = () => (idCounter++).toString();

export const PRODUCTS: Product[] = [
  // --- MUNCHIES (30 Items) ---
  {
    id: getId(),
    name: 'Spicy Red Chips',
    price: 40,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=400',
    tag: 'Best Seller',
    description: 'Extra spicy, extra crunchy.',
    stock: 4
  },
  {
    id: getId(),
    name: 'Classic Salted Chips',
    price: 35,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1640958905846-e92ea71bdfdf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsdGVkJTIwY2xhc3NzaWMlMjBjaGlwc3xlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Essential',
    stock: 0
  },
  {
    id: getId(),
    name: 'Cream & Onion Chips',
    price: 40,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1599493356626-9fdbdabfd9bd?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stock: 24
  },
  {
    id: getId(),
    name: 'Cheese Balls Pouch',
    price: 30,
    category: 'Munchies',
    image: 'https://plus.unsplash.com/premium_photo-1673160177248-7172a3642a2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNoZWVzZSUyMGJhbGxzJTIwcG91Y2h8ZW58MHx8MHx8fDA%3D',
    stock: 15
  },
  {
    id: getId(),
    name: 'Nacho Crisps Cheese',
    price: 60,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&q=80&w=400',
    tag: 'Best Seller',
    stock: 8
  },
  {
    id: getId(),
    name: 'Instant Noodles Masala',
    price: 25,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400',
    tag: 'Exam Fuel',
    stock: 50
  },
  {
    id: getId(),
    name: 'Cup Noodles Spicy',
    price: 65,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=400',
    tag: 'Essential',
    stock: 12
  },
  {
    id: getId(),
    name: 'Chicken Cup Noodles',
    price: 70,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Dark Chocolate Bar',
    price: 100,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1646168932800-e48f378d37bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGNob2NvbGF0ZSUyMGJhcnxlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Exam Fuel',
    stock: 30
  },
  {
    id: getId(),
    name: 'Milk Chocolate Silk',
    price: 150,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=400',
    stock: 25
  },
  {
    id: getId(),
    name: 'Peanut Energy Bar',
    price: 40,
    category: 'Munchies',
    image: 'https://media.istockphoto.com/id/174896084/photo/granola-bars.webp?a=1&b=1&s=612x612&w=0&k=20&c=O6BJ5gWxO-3VejbFXTlV5fBe3rS9OUJhJDPzUpIxewo=',
    stock: 40
  },
  {
    id: getId(),
    name: 'Protein Bar Choco',
    price: 80,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1610450949065-1f2841536c88?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlfGVufDB8fDB8fHww',
    tag: 'New',
    stock: 15
  },
  {
    id: getId(),
    name: 'Volt Energy Drink',
    price: 110,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1754816073033-e75577901460?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZvbHQlMjBlbmVyZ3klMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Exam Fuel',
    stock: 6
  },
  {
    id: getId(),
    name: 'Cola Can 330ml',
    price: 40,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
    stock: 35
  },
  {
    id: getId(),
    name: 'Lemon Soda',
    price: 35,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Mango Juice Box',
    price: 20,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1636196738725-02cbfce43a24?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stock: 45
  },
  {
    id: getId(),
    name: 'Iced Tea Lemon',
    price: 55,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400',
    stock: 10
  },
  {
    id: getId(),
    name: 'Salted Peanuts',
    price: 20,
    category: 'Munchies',
    image: 'https://plus.unsplash.com/premium_photo-1664527307810-63c15cb57346?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FsdGVkJTIwcGVhbnV0c3xlbnwwfHwwfHx8MA%3D%3D',
    stock: 25
  },
  {
    id: getId(),
    name: 'Roasted Almonds',
    price: 200,
    category: 'Munchies',
    image: 'https://plus.unsplash.com/premium_photo-1722686451471-a4d114dfcd66?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9hc3RlZCUyMGFsbW9uZHN8ZW58MHx8MHx8fDA%3D',
    stock: 12
  },
  {
    id: getId(),
    name: 'Cashew Nuts',
    price: 250,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1594900689460-fdad3599342c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzZXclMjBudXRzfGVufDB8fDB8fHww',
    stock: 18
  },
  {
    id: getId(),
    name: 'Butter Cookies',
    price: 50,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400',
    stock: 30
  },
  {
    id: getId(),
    name: 'Choco Chip Cookies',
    price: 60,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1651351978830-99b7125c3ef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2NvJTIwY2hpcCUyMGNvb2tpZXN8ZW58MHx8MHx8fDA%3D',
    tag: 'Best Seller',
    stock: 5
  },
  {
    id: getId(),
    name: 'Digestive Biscuits',
    price: 45,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1699723521107-bb297f2642ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnZXN0aXZlJTIwYmlzY3VpdHN8ZW58MHx8MHx8fDA%3D',
    stock: 22
  },
  {
    id: getId(),
    name: 'Oreo Roll',
    price: 35,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&q=80&w=400',
    stock: 40
  },
  {
    id: getId(),
    name: 'Butter Popcorn',
    price: 80,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1661655103032-0337e3fc63a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwcG9wY29ybnxlbnwwfHwwfHx8MA%3D%3D',
    stock: 15
  },
  {
    id: getId(),
    name: 'Caramel Popcorn',
    price: 120,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=400',
    stock: 12
  },
  {
    id: getId(),
    name: 'Gummy Bears',
    price: 90,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=400',
    stock: 20
  },
  {
    id: getId(),
    name: 'Chewing Gum Mint',
    price: 10,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1576644461179-ddd318c669e4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hld2lvbmclMjBndW0lMjBtaW50fGVufDB8fDB8fHww',
    stock: 100
  },
  {
    id: getId(),
    name: 'Mint Candy Roll',
    price: 20,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=400',
    stock: 60
  },
  {
    id: getId(),
    name: 'Cold Coffee Bottle',
    price: 65,
    category: 'Munchies',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=60',
    tag: 'Exam Fuel',
    stock: 8
  },

  // --- TECH (30 Items) ---
  {
    id: getId(),
    name: 'Type-C Fast Cable',
    price: 299,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1762421814866-1cfb462a5932?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHlwZSUyMGMlMjBjYWJsZXxlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Essential',
    stock: 20
  },
  {
    id: getId(),
    name: 'Lightning iPhone Cable',
    price: 349,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1738520420654-87cd2ad005d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlnaHRpbmclMjBpcGhvbmUlMjBjYWJsZXxlbnwwfHwwfHx8MA%3D%3D',
    stock: 15
  },
  {
    id: getId(),
    name: 'Micro-USB Cable',
    price: 199,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1760708825913-65a50b3dc39b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWljcm8lMjB1c2IlMjBjYWJsZXxlbnwwfHwwfHx8MA%3D%3D',
    stock: 10
  },
  {
    id: getId(),
    name: '20W Adapter',
    price: 599,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1760706403194-ee213aa9b323?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MjBXJTIwYWRhcHRlcnxlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Best Seller',
    stock: 8
  },
  {
    id: getId(),
    name: 'Wired Earphones',
    price: 399,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWQlMjBlYXJwaG9uZXN8ZW58MHx8MHx8fDA%3D',
    stock: 12
  },
  {
    id: getId(),
    name: 'TWS Basic Pods',
    price: 999,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D',
    stock: 5
  },
  {
    id: getId(),
    name: 'Wireless Mouse',
    price: 699,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Best Seller',
    stock: 18
  },
  {
    id: getId(),
    name: 'Gaming Mouse',
    price: 1299,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D',
    stock: 7
  },
  {
    id: getId(),
    name: 'Mousepad Standard',
    price: 199,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1700451960095-c37c0b388624?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91c2VwYWR8ZW58MHx8MHx8fDA%3D',
    stock: 25
  },
  {
    id: getId(),
    name: 'XL Gaming Mat',
    price: 499,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=60',
    stock: 10
  },
  {
    id: getId(),
    name: '32GB Pen Drive',
    price: 450,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1709660850064-0ec82e1a6b5d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVuZHJpdmV8ZW58MHx8MHx8fDA%3D',
    stock: 15
  },
  {
    id: getId(),
    name: '64GB Pen Drive',
    price: 650,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1726837308560-cb371e1cbb16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVuZHJpdmV8ZW58MHx8MHx8fDA%3D',
    stock: 12
  },
  {
    id: getId(),
    name: 'Power Bank 10000mAh',
    price: 1499,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1594843665794-446ce915d840?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww',
    tag: 'Essential',
    stock: 6
  },
  {
    id: getId(),
    name: 'USB-C Hub',
    price: 1299,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1616578273461-3a99ce422de6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwYyUyMGh1YnxlbnwwfHwwfHx8MA%3D%3D',
    stock: 5
  },
  {
    id: getId(),
    name: 'AA Batteries (4pk)',
    price: 120,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1704895336495-bdad8efe8d4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWElMjBiYXR0ZXJpZXN8ZW58MHx8MHx8fDA%3D',
    stock: 30
  },
  {
    id: getId(),
    name: 'AAA Batteries (4pk)',
    price: 120,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1723507297320-2366db25341e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWFhJTIwYmF0dGVyaWVzfGVufDB8fDB8fHww',
    stock: 25
  },
  {
    id: getId(),
    name: 'Laptop Stand',
    price: 899,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1623251606108-512c7c4a3507?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc3RhbmR8ZW58MHx8MHx8fDA%3D',
    stock: 8
  },
  {
    id: getId(),
    name: 'Phone Stand',
    price: 299,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=60',
    stock: 15
  },
  {
    id: getId(),
    name: 'Screen Cleaner Kit',
    price: 250,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1626297375254-046647900b70?w=800&auto=format&fit=crop&q=60',
    stock: 20
  },
  {
    id: getId(),
    name: 'Bluetooth Speaker',
    price: 1499,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
    stock: 6
  },
  {
    id: getId(),
    name: 'AUX Cable 1.5m',
    price: 149,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1759526684474-6fafc3ad42f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV4JTIwY2FibGV8ZW58MHx8MHx8fDA%3D',
    stock: 12
  },
  {
    id: getId(),
    name: 'Ethernet Cable 5m',
    price: 399,
    category: 'Tech',
    image: 'https://m.media-amazon.com/images/I/610wYftcf5L.jpg',
    tag: 'Exam Fuel',
    stock: 10
  },
  {
    id: getId(),
    name: 'OTG Adapter C',
    price: 99,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?w=800&auto=format&fit=crop&q=60',
    stock: 15
  },
  {
    id: getId(),
    name: 'Webcam Cover',
    price: 99,
    category: 'Tech',
    image: 'https://m.media-amazon.com/images/I/61UeSedtwEL.jpg',
    stock: 25
  },
  {
    id: getId(),
    name: 'Cable Organizers',
    price: 199,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1623949556303-b0d17d198863?w=800&auto=format&fit=crop&q=60',
    stock: 18
  },
  {
    id: getId(),
    name: 'Ring Light Mini',
    price: 499,
    category: 'Tech',
    image: 'https://m.media-amazon.com/images/I/51q8y-lRpbL.jpg',
    stock: 8
  },
  {
    id: getId(),
    name: 'Keyboard Protector',
    price: 249,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=800&auto=format&fit=crop&q=60',
    stock: 12
  },
  {
    id: getId(),
    name: 'Phone Grip/Holder',
    price: 149,
    category: 'Tech',
    image: 'https://m.media-amazon.com/images/I/61HRvRAnyXL.jpg',
    stock: 30
  },
  {
    id: getId(),
    name: 'USB LED Light',
    price: 120,
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&auto=format&fit=crop&q=60',
    tag: 'Exam Fuel',
    stock: 15
  },
  {
    id: getId(),
    name: 'HDMI Cable 2m',
    price: 350,
    category: 'Tech',
    image: 'https://plus.unsplash.com/premium_photo-1671017656975-9bde40e8d1ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGRtaSUyMGNhYmxlfGVufDB8fDB8fHww',
    stock: 10
  },

  // --- STATIONERY (30 Items) ---
  {
    id: getId(),
    name: 'Exam Prep Notebook',
    price: 120,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1611571741792-edb58d0ceb67?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXhtYSUyMHByZXAlMjBub3RlYm9va3xlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Exam Fuel',
    stock: 50
  },
  {
    id: getId(),
    name: 'Spiral A4 Register',
    price: 150,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1677170044634-7b373ea20a64?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YTQlMjBub3RlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D',
    tag: 'Essential',
    stock: 60
  },
  {
    id: getId(),
    name: 'A5 Pocket Diary',
    price: 90,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/2191089132/photo/empty-vertical-sketchbook-mockup-on-pink-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=gcF7fuguGL4JyAsTzxpyvFl3zhTBRzOQ30jPMujVv7A=',
    stock: 25
  },
  {
    id: getId(),
    name: 'Premium Gel Pens (3)',
    price: 150,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1704742801011-d3621a9ed930?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByZW1pdW0lMjBnZWwlMjBwZW5zfGVufDB8fDB8fHww',
    tag: 'Best Seller',
    stock: 35
  },
  {
    id: getId(),
    name: 'Ball Pens (Pack of 5)',
    price: 50,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1632822338787-3c08158a8d32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbGwlMjBwZW5zJTIwJTIwcGFja3xlbnwwfHwwfHx8MA%3D%3D',
    stock: 45
  },
  {
    id: getId(),
    name: 'Highlighters Neon (4)',
    price: 120,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1567727014928-5f4aa30c4c15?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVvbiUyMGhpZ2h0bGlnaHRlcnMlMjBwZW58ZW58MHx8MHx8fDA%3D',
    stock: 20
  },
  {
    id: getId(),
    name: 'Sticky Notes Yellow',
    price: 60,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/175399708/photo/blank-note.webp?a=1&b=1&s=612x612&w=0&k=20&c=qzd17O4wkhnwny2meuLFugV1CVKD0EMpMGgN-87E9_8=',
    tag: 'Essential',
    stock: 40
  },
  {
    id: getId(),
    name: 'Sticky Notes Neon',
    price: 70,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/1162110961/photo/neon-colorful-sticky-note-paper-and-pen-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=RiVuWMsdKn4D53D7ys0wHXQ_dz8hU034ZA5dAmy5llY=',
    stock: 25
  },
  {
    id: getId(),
    name: 'Permanent Marker',
    price: 25,
    category: 'Stationery',
    image: 'https://plus.unsplash.com/premium_photo-1753378869545-435ab5bad355?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVybWFuZW50JTIwbWFya2VyJTIwcGVufGVufDB8fDB8fHww',
    stock: 30
  },
  {
    id: getId(),
    name: 'Whiteboard Marker',
    price: 30,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/1181059054/photo/magnetic-whiteboard-pen-markers.webp?a=1&b=1&s=612x612&w=0&k=20&c=JdSNY2KXjHJS8bzwPICH4UbANqnyzVd1VbNOyfk9w6s=',
    stock: 30
  },
  {
    id: getId(),
    name: 'Mechanical Pencil',
    price: 40,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1713455645544-cf9d2a0d213a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVjaGFuaWNhbCUyMHBlbmNpbHxlbnwwfHwwfHx8MA%3D%3D',
    stock: 25
  },
  {
    id: getId(),
    name: 'Pencil Lead 0.7mm',
    price: 20,
    category: 'Stationery',
    image:'https://media.istockphoto.com/id/1328633700/photo/pencil-lead.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yer-h8F9jj6GmuuaxBTvvXFmD5tbMDo508RDOjy9HqY=',
    stock: 50
  },
  {
    id: getId(),
    name: 'Premium Eraser',
    price: 15,
    category: 'Stationery',
    image: 'https://plus.unsplash.com/premium_photo-1727558768347-eefa5276de9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJlbWl1bSUyMGVyYXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    stock: 100
  },
  {
    id: getId(),
    name: 'Metal Ruler 30cm',
    price: 40,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1590019012497-b44f1aaa40d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV0YWwlMjBydWxlcnxlbnwwfHwwfHx8MA%3D%3D',
    stock: 40
  },
  {
    id: getId(),
    name: 'Geometry Box',
    price: 150,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/2090719709/photo/lipstick-and-eye-and-lip-makeup-pen-pencil-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=CCJzutT_-dzByMeXZdpTQVd0uZBawnXSXoD0v8oPLp4=',
    stock: 15
  },
  {
    id: getId(),
    name: 'Glue Stick 15g',
    price: 35,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/1400234538/photo/open-paper-glue-stick-with-cap-on-blue-background-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=ezg5FD3WA8Nhmuz2CrXakNNhAsRFvjPcHMUCETLBCaM=',
    stock: 20
  },
  {
    id: getId(),
    name: 'Super Glue',
    price: 10,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1640223321014-8659ca225cba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VwZXIlMjBnbHVlJTIwdHViZXxlbnwwfHwwfHx8MA%3D%3D',
    stock: 30
  },
  {
    id: getId(),
    name: 'Clear Tape',
    price: 20,
    category: 'Stationery',
    image: 'https://plus.unsplash.com/premium_photo-1683309562561-fe49c248c51b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFwZXxlbnwwfHwwfHx8MA%3D%3D',
    stock: 40
  },
  {
    id: getId(),
    name: 'Mini Stapler',
    price: 60,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1592121998877-e28f92ef1c13?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWluaSUyMHN0YXBsZXJ8ZW58MHx8MHx8fDA%3D',
    stock: 15
  },
  {
    id: getId(),
    name: 'Stapler Pins Box',
    price: 15,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/1222375922/photo/staples-in-the-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=tYpu99oa9qOOAv8IjLS0ZsCEn1m6GUxkXRacCjP1BBc=',
    stock: 50
  },
  {
    id: getId(),
    name: 'Paper Clips (Color)',
    price: 30,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1668435075104-0e993cd60ba7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFwZXIlMjBjbGlwc3xlbnwwfHwwfHx8MA%3D%3D',
    stock: 30
  },
  {
    id: getId(),
    name: 'Binder Clips Large',
    price: 40,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1581289761977-a543e3dd6c86?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpbmRlciUyMGNsaXBzJTIwbGFyZ2V8ZW58MHx8MHx8fDA%3D',
    stock: 25
  },
  {
    id: getId(),
    name: 'A4 Ruled Sheets',
    price: 80,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/2244642536/photo/open-copybook-on-light-blue-background-top-view-school-stationery.webp?a=1&b=1&s=612x612&w=0&k=20&c=oEZmam1Q5g5Ff0YXCRj9ScrbSoNgVbmRFWWoUx3C2Q8=',
    stock: 100
  },
  {
    id: getId(),
    name: 'A4 Blank Sheets',
    price: 80,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1622006816279-9281a5308e5d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YTQlMjBibGFuayUyMHNoZWV0c3xlbnwwfHwwfHx8MA%3D%3D',
    stock: 80
  },
  {
    id: getId(),
    name: 'Scissors',
    price: 60,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1668853060178-2d53667b7345?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Npc3NvcnN8ZW58MHx8MHx8fDA%3D',
    stock: 15
  },
  {
    id: getId(),
    name: 'Correction Pen',
    price: 40,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1600531597946-f9b1d7b0f486?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycmVjdGlvbiUyMHBlbnxlbnwwfHwwfHx8MA%3D%3D',
    stock: 25
  },
  {
    id: getId(),
    name: 'Plastic Folder A4',
    price: 20,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=60',
    stock: 60
  },
  {
    id: getId(),
    name: 'Stick File',
    price: 15,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/2173054384/photo/blank-empty-plain-solid-dark-vibrant-red-maroon-coloured-glowing-textured-effect-rough-rustic.webp?a=1&b=1&s=612x612&w=0&k=20&c=fC7W0E2WtMLhtyhd2zLRXivCGCazfw5dDTOEK3dGUp4=',
    stock: 60
  },
  {
    id: getId(),
    name: 'Calculator Basic',
    price: 350,
    category: 'Stationery',
    image: 'https://media.istockphoto.com/id/153657122/photo/caculator.webp?a=1&b=1&s=612x612&w=0&k=20&c=GX-NB00zMhvRTWr5OKIOICs--pOEWIlqpKp8ypaxIOA=',
    stock: 10
  },
  {
    id: getId(),
    name: 'Sketch Pens Set',
    price: 80,
    category: 'Stationery',
    image: 'https://images.unsplash.com/photo-1601311911926-dbdae16e54c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNrZXRjaCUyMHBlbnMlMjBzZXR8ZW58MHx8MHx8fDA%3D',
    stock: 12
  },
  ]


  
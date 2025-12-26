export const PRODUCT_CATEGORIES = {
  HOODIES: 'hoodies',
  TSHIRTS: 't-shirts',
  JEANS: 'jeans',
  CARGOES: 'cargoes',
  OVERSIZED_TSHIRTS: 'oversized-t-shirts',
  BEIGE_JEANS: 'beige-jeans',
}

export const PRODUCT_TYPES = {
  BASIC: 'basic',
  CORE: 'core',
  PREMIUM: 'premium',
}

export const PRODUCT_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export const PRODUCT_COLORS = [
  'Black',
  'White',
  'Red',
  'Blue',
  'Green',
  'Gray',
  'Beige',
  'Navy',
]

export const MENU_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Collections', path: '/collections' },
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Wish List', path: '/wishlist' },
]

export const SOCIAL_MEDIA_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  youtube: 'https://youtube.com',
}

export const SLIDER_IMAGES = [
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop',
    title: 'New Collection',
    subtitle: 'Discover the Latest Trends',
    buttonText: 'Shop Now',
  },
  {
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop',
    title: 'Premium Quality',
    subtitle: 'Elevate Your Style',
    buttonText: 'Explore',
  },
  {
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&fit=crop',
    title: 'Summer Sale',
    subtitle: 'Up to 50% Off',
    buttonText: 'Shop Sale',
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop',
    title: 'Street Style',
    subtitle: 'Urban Fashion Essentials',
    buttonText: 'Explore Now',
  },
  {
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop',
    title: 'Winter Collection',
    subtitle: 'Stay Warm in Style',
    buttonText: 'Shop Winter',
  },
]

export const FEATURED_CATEGORIES = [
  {
    id: 1,
    name: 'Hoodies',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&auto=format',
    category: 'hoodies',
    description: 'Comfortable & Stylish',
  },
  {
    id: 2,
    name: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&auto=format',
    category: 't-shirts',
    description: 'Classic & Versatile',
  },
  {
    id: 3,
    name: 'Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&auto=format',
    category: 'jeans',
    description: 'Perfect Fit',
  },
  {
    id: 4,
    name: 'Cargoes',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop&auto=format',
    category: 'cargoes',
    description: 'Functional & Trendy',
  },
  {
    id: 5,
    name: 'Oversized T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&auto=format',
    category: 'oversized-t-shirts',
    description: 'Relaxed & Modern',
  },
  {
    id: 6,
    name: 'Beige Jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&auto=format&sat=-40',
    category: 'beige-jeans',
    description: 'Elegant & Chic',
  },
]

export const SAMPLE_PRODUCTS = [
  // Hoodies - Different colorful images
  { id: 1, name: 'Basic Hoodie', category: 'hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556906918-a2d271901798?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop&auto=format'], price: 2999, originalPrice: 3999, sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White', 'Red'], type: 'basic', sku: 'ZEN-HD-001', description: 'Premium quality hoodie with comfortable fit and modern design.' },
  { id: 7, name: 'Core Hoodie', category: 'hoodies', image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=500&h=500&fit=crop&auto=format', price: 3999, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Red', 'Gray'], type: 'core' },
  { id: 8, name: 'Premium Hoodie', category: 'hoodies', image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=500&fit=crop&auto=format', price: 4999, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Red', 'Navy'], type: 'premium' },
  
  // T-Shirts - Different colorful images
  { id: 2, name: 'Basic T-Shirt', category: 't-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop', price: 999, sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White', 'Blue'], type: 'basic' },
  { id: 9, name: 'Core T-Shirt', category: 't-shirts', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop', price: 1499, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Blue', 'Red'], type: 'core' },
  { id: 10, name: 'Premium T-Shirt', category: 't-shirts', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=500&fit=crop', price: 1999, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Blue', 'Navy'], type: 'premium' },
  
  // Jeans - Different colorful images
  { id: 11, name: 'Basic Jeans', category: 'jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop', price: 2499, sizes: ['S', 'M', 'L', 'XL'], colors: ['Blue', 'Black'], type: 'basic' },
  { id: 3, name: 'Core Jeans', category: 'jeans', image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500&h=500&fit=crop', price: 3499, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Blue', 'Black', 'Gray'], type: 'core' },
  { id: 12, name: 'Premium Jeans', category: 'jeans', image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500&h=500&fit=crop', price: 4499, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Blue', 'Black', 'Navy'], type: 'premium' },
  
  // Cargoes - Different colorful images
  { id: 4, name: 'Basic Cargoes', category: 'cargoes', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop&auto=format', price: 1999, sizes: ['S', 'M', 'L', 'XL'], colors: ['Beige', 'Black', 'Green'], type: 'basic' },
  { id: 13, name: 'Core Cargoes', category: 'cargoes', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&h=500&fit=crop&auto=format', price: 2999, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Beige', 'Black', 'Green', 'Gray'], type: 'core' },
  { id: 14, name: 'Premium Cargoes', category: 'cargoes', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop&auto=format', price: 3999, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Beige', 'Black', 'Green', 'Navy'], type: 'premium' },
  
  // Oversized T-Shirts - Different colorful images
  { id: 15, name: 'Basic Oversized T-Shirt', category: 'oversized-t-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&auto=format', price: 1299, sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Gray'], type: 'basic' },
  { id: 16, name: 'Core Oversized T-Shirt', category: 'oversized-t-shirts', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop&auto=format', price: 1799, sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Gray', 'Red'], type: 'core' },
  { id: 5, name: 'Premium Oversized T-Shirt', category: 'oversized-t-shirts', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=500&fit=crop&auto=format', price: 2299, sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Gray', 'Navy'], type: 'premium' },
  
  // Beige Jeans - More variety with different images
  { id: 17, name: 'Basic Beige Jeans', category: 'beige-jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop&auto=format&sat=-50', images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop&auto=format&sat=-50', 'https://images.unsplash.com/photo-1582418702059-97ebaf8e0d3b?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=800&fit=crop&auto=format'], price: 2799, originalPrice: 3499, sizes: ['S', 'M', 'L', 'XL'], colors: ['Beige', 'Tan'], type: 'basic', sku: 'ZEN-BJ-001', description: 'Classic beige jeans with perfect fit and comfortable fabric.' },
  { id: 6, name: 'Core Beige Jeans', category: 'beige-jeans', image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=800&fit=crop&auto=format'], price: 3799, originalPrice: 4499, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Beige', 'Tan', 'Cream'], type: 'core', sku: 'ZEN-BJ-002', description: 'Premium beige jeans with modern fit and stylish design.' },
  { id: 18, name: 'Premium Beige Jeans', category: 'beige-jeans', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop&auto=format&sat=-20', images: ['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&auto=format&sat=-20', 'https://images.unsplash.com/photo-1582418702059-97ebaf8e0d3b?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=800&fit=crop&auto=format'], price: 4799, originalPrice: 5999, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Beige', 'Tan', 'Cream', 'Khaki'], type: 'premium', sku: 'ZEN-BJ-003', description: 'Luxury beige jeans with premium quality and elegant finish.' },
  
  // Additional Hoodie Variants - More types with different images
  { id: 19, name: 'Classic Zip Hoodie', category: 'hoodies', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop&auto=format'], price: 3299, originalPrice: 3999, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Gray', 'Navy'], type: 'basic', sku: 'ZEN-HD-002', description: 'Classic zip-up hoodie with front pockets and comfortable fit.' },
  { id: 20, name: 'Pullover Hoodie', category: 'hoodies', image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556906918-a2d271901798?w=800&h=800&fit=crop&auto=format'], price: 3499, originalPrice: 4299, sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Red'], type: 'core', sku: 'ZEN-HD-003', description: 'Comfortable pullover hoodie perfect for casual wear.' },
  { id: 21, name: 'Graphic Print Hoodie', category: 'hoodies', image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556906918-a2d271901798?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&auto=format'], price: 4499, originalPrice: 5499, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Red', 'Navy'], type: 'premium', sku: 'ZEN-HD-004', description: 'Stylish hoodie with unique graphic print design.' },
  { id: 22, name: 'Oversized Hoodie', category: 'hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556906918-a2d271901798?w=800&h=800&fit=crop&auto=format'], price: 3799, originalPrice: 4599, sizes: ['L', 'XL', 'XXL'], colors: ['Black', 'Gray', 'Beige'], type: 'core', sku: 'ZEN-HD-005', description: 'Trendy oversized hoodie for a relaxed street style look.' },
  { id: 35, name: 'Fleece Lined Hoodie', category: 'hoodies', image: 'https://images.unsplash.com/photo-1620799140195-3d5ba0b8e63d?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1620799140195-3d5ba0b8e63d?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop&auto=format'], price: 4199, originalPrice: 5199, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Navy', 'Gray'], type: 'premium', sku: 'ZEN-HD-006', description: 'Warm fleece-lined hoodie perfect for cold weather.' },
  { id: 36, name: 'Crop Hoodie', category: 'hoodies', image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556906918-a2d271901798?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&auto=format'], price: 3599, originalPrice: 4399, sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White', 'Pink'], type: 'core', sku: 'ZEN-HD-007', description: 'Trendy crop hoodie for a modern street style look.' },
  
  // Additional T-Shirt Variants - More types
  { id: 23, name: 'V-Neck T-Shirt', category: 't-shirts', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop'], price: 1199, originalPrice: 1499, sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'White', 'Navy'], type: 'basic', sku: 'ZEN-TS-002', description: 'Classic V-neck t-shirt with comfortable fit.' },
  { id: 24, name: 'Polo T-Shirt', category: 't-shirts', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop'], price: 1799, originalPrice: 2299, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Navy', 'Red'], type: 'core', sku: 'ZEN-TS-003', description: 'Stylish polo t-shirt perfect for smart casual occasions.' },
  { id: 25, name: 'Graphic T-Shirt', category: 't-shirts', image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop'], price: 1599, originalPrice: 1999, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Gray'], type: 'premium', sku: 'ZEN-TS-004', description: 'Trendy graphic print t-shirt with unique designs.' },
  { id: 37, name: 'Henley T-Shirt', category: 't-shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop'], price: 1399, originalPrice: 1799, sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Navy', 'Gray'], type: 'basic', sku: 'ZEN-TS-005', description: 'Classic henley t-shirt with button placket detail.' },
  { id: 38, name: 'Long Sleeve T-Shirt', category: 't-shirts', image: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop'], price: 1699, originalPrice: 2199, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'White', 'Navy', 'Red'], type: 'core', sku: 'ZEN-TS-006', description: 'Comfortable long sleeve t-shirt for all seasons.' },
  { id: 39, name: 'Ringer T-Shirt', category: 't-shirts', image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop'], price: 1499, originalPrice: 1899, sizes: ['S', 'M', 'L', 'XL'], colors: ['White', 'Black', 'Navy'], type: 'premium', sku: 'ZEN-TS-007', description: 'Vintage-style ringer t-shirt with contrasting collar and cuffs.' },
  
  // Additional Jeans Variants - More types
  { id: 26, name: 'Slim Fit Jeans', category: 'jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&h=800&fit=crop'], price: 2799, originalPrice: 3499, sizes: ['S', 'M', 'L', 'XL'], colors: ['Blue', 'Black'], type: 'basic', sku: 'ZEN-JN-002', description: 'Slim fit jeans with modern cut and comfortable stretch.' },
  { id: 27, name: 'Skinny Jeans', category: 'jeans', image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&h=800&fit=crop'], price: 3199, originalPrice: 3999, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Blue', 'Black', 'Gray'], type: 'core', sku: 'ZEN-JN-003', description: 'Trendy skinny jeans with perfect fit.' },
  { id: 28, name: 'Relaxed Fit Jeans', category: 'jeans', image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&h=800&fit=crop'], price: 2999, originalPrice: 3799, sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Blue', 'Black'], type: 'premium', sku: 'ZEN-JN-004', description: 'Comfortable relaxed fit jeans for everyday wear.' },
  { id: 40, name: 'Straight Leg Jeans', category: 'jeans', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop'], price: 2899, originalPrice: 3599, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Blue', 'Black', 'Indigo'], type: 'basic', sku: 'ZEN-JN-005', description: 'Classic straight leg jeans with timeless style.' },
  { id: 41, name: 'Tapered Jeans', category: 'jeans', image: 'https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&h=800&fit=crop'], price: 3399, originalPrice: 4199, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Blue', 'Black', 'Gray'], type: 'core', sku: 'ZEN-JN-006', description: 'Modern tapered jeans with contemporary fit.' },
  { id: 42, name: 'Wide Leg Jeans', category: 'jeans', image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&h=500&fit=crop', images: ['https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&h=800&fit=crop', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop'], price: 3699, originalPrice: 4599, sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Blue', 'Black'], type: 'premium', sku: 'ZEN-JN-007', description: 'Trendy wide leg jeans for a bold fashion statement.' },
  
  // Additional Cargoes Variants - More types
  { id: 29, name: 'Slim Cargoes', category: 'cargoes', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop&auto=format'], price: 2299, originalPrice: 2899, sizes: ['S', 'M', 'L', 'XL'], colors: ['Beige', 'Black', 'Green'], type: 'basic', sku: 'ZEN-CG-002', description: 'Slim fit cargo pants with functional pockets.' },
  { id: 30, name: 'Tapered Cargoes', category: 'cargoes', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop&auto=format'], price: 2699, originalPrice: 3399, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Beige', 'Black', 'Olive'], type: 'core', sku: 'ZEN-CG-003', description: 'Tapered cargo pants with modern silhouette.' },
  { id: 31, name: 'Wide Leg Cargoes', category: 'cargoes', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop&auto=format'], price: 3199, originalPrice: 3999, sizes: ['M', 'L', 'XL', 'XXL'], colors: ['Beige', 'Black', 'Khaki'], type: 'premium', sku: 'ZEN-CG-004', description: 'Trendy wide leg cargo pants for street style.' },
  { id: 43, name: 'Jogger Cargoes', category: 'cargoes', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop&auto=format'], price: 2499, originalPrice: 3099, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Gray', 'Navy'], type: 'basic', sku: 'ZEN-CG-005', description: 'Comfortable jogger-style cargo pants with elastic cuffs.' },
  { id: 44, name: 'Cargo Shorts', category: 'cargoes', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&h=800&fit=crop&auto=format'], price: 1999, originalPrice: 2499, sizes: ['S', 'M', 'L', 'XL'], colors: ['Beige', 'Black', 'Olive'], type: 'core', sku: 'ZEN-CG-006', description: 'Stylish cargo shorts perfect for summer wear.' },
  
  // Additional Oversized T-Shirt Variants - More types
  { id: 32, name: 'Oversized V-Neck', category: 'oversized-t-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=800&fit=crop&auto=format'], price: 1499, originalPrice: 1899, sizes: ['L', 'XL', 'XXL'], colors: ['Black', 'White', 'Gray'], type: 'basic', sku: 'ZEN-OT-002', description: 'Comfortable oversized V-neck t-shirt.' },
  { id: 33, name: 'Oversized Graphic', category: 'oversized-t-shirts', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=800&fit=crop&auto=format'], price: 1999, originalPrice: 2499, sizes: ['L', 'XL', 'XXL'], colors: ['Black', 'White', 'Red'], type: 'core', sku: 'ZEN-OT-003', description: 'Oversized t-shirt with bold graphic prints.' },
  { id: 34, name: 'Oversized Longline', category: 'oversized-t-shirts', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=800&fit=crop&auto=format'], price: 2199, originalPrice: 2799, sizes: ['L', 'XL', 'XXL'], colors: ['Black', 'Gray', 'Navy'], type: 'premium', sku: 'ZEN-OT-004', description: 'Longline oversized t-shirt for extended coverage.' },
  { id: 45, name: 'Oversized Drop Shoulder', category: 'oversized-t-shirts', image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop&auto=format'], price: 1799, originalPrice: 2299, sizes: ['L', 'XL', 'XXL'], colors: ['Black', 'White', 'Gray'], type: 'basic', sku: 'ZEN-OT-005', description: 'Oversized t-shirt with trendy drop shoulder design.' },
  { id: 46, name: 'Oversized Pocket Tee', category: 'oversized-t-shirts', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop&auto=format', images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop&auto=format', 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=800&fit=crop&auto=format'], price: 1899, originalPrice: 2399, sizes: ['L', 'XL', 'XXL'], colors: ['Black', 'Navy', 'Gray'], type: 'core', sku: 'ZEN-OT-006', description: 'Oversized t-shirt with chest pocket detail.' },
]


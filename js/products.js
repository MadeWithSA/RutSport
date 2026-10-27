// 60 sports products for Rut Sport
const PRODUCTS = [
  {
    id: 1,
    name: { uz: "Nike Air Max 270", ru: "Nike Air Max 270", en: "Nike Air Max 270" },
    description: {
      uz: "Yengil va qulay yugurish poyabzali. Kunlik foydalanish uchun ideal.",
      ru: "Лёгкие и удобные беговые кроссовки. Идеальны для ежедневного использования.",
      en: "Lightweight and comfortable running shoes. Perfect for everyday wear."
    },
    price: 1299000,
    oldPrice: 1599000,
    category: "shoes",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Black", "White", "Red"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 24
  },
  {
    id: 2,
    name: { uz: "Adidas Ultraboost 22", ru: "Adidas Ultraboost 22", en: "Adidas Ultraboost 22" },
    description: {
      uz: "Yuqori energiya qaytarish bilan professional yugurish poyabzali.",
      ru: "Профессиональные беговые кроссовки с высокой энергоотдачей.",
      en: "Professional running shoes with high energy return."
    },
    price: 1899000,
    oldPrice: 2199000,
    category: "shoes",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Black", "Blue", "Grey"],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 18
  },
  {
    id: 3,
    name: { uz: "Puma RS-X", ru: "Puma RS-X", en: "Puma RS-X" },
    description: {
      uz: "Retro uslubdagi zamonaviy krossovkalar.",
      ru: "Современные кроссовки в ретро-стиле.",
      en: "Modern sneakers in retro style."
    },
    price: 999000,
    oldPrice: 1299000,
    category: "shoes",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["White", "Black", "Pink"],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 32
  },
  {
    id: 4,
    name: { uz: "New Balance 574", ru: "New Balance 574", en: "New Balance 574" },
    description: {
      uz: "Klassik va qulay kundalik poyabzal.",
      ru: "Классическая и удобная повседневная обувь.",
      en: "Classic and comfortable everyday shoes."
    },
    price: 1099000,
    oldPrice: null,
    category: "shoes",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["Grey", "Navy", "Green"],
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 27
  },
  {
    id: 5,
    name: { uz: "Asics Gel-Kayano 29", ru: "Asics Gel-Kayano 29", en: "Asics Gel-Kayano 29" },
    description: {
      uz: "Stabil yugurish uchun professional poyabzal.",
      ru: "Профессиональная обувь для стабильного бега.",
      en: "Professional shoes for stable running."
    },
    price: 1699000,
    oldPrice: 1999000,
    category: "shoes",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Blue", "Black"],
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 15
  },
  {
    id: 6,
    name: { uz: "Under Armour HOVR", ru: "Under Armour HOVR", en: "Under Armour HOVR" },
    description: {
      uz: "Innovatsion amortizatsiya texnologiyasi.",
      ru: "Инновационная технология амортизации.",
      en: "Innovative cushioning technology."
    },
    price: 1399000,
    oldPrice: 1599000,
    category: "shoes",
    sizes: ["41", "42", "43", "44", "45"],
    colors: ["Black", "White"],
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop",
    rating: 4.5,
    stock: 21
  },
  {
    id: 7,
    name: { uz: "Nike Mercurial Vapor", ru: "Nike Mercurial Vapor", en: "Nike Mercurial Vapor" },
    description: {
      uz: "Professional futbol butsilari.",
      ru: "Профессиональные футбольные бутсы.",
      en: "Professional football boots."
    },
    price: 2199000,
    oldPrice: 2499000,
    category: "shoes",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Orange", "Black", "White"],
    image: "https://images.unsplash.com/photo-1511886929837-354d827aaeb6?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 12
  },
  {
    id: 8,
    name: { uz: "Adidas Predator", ru: "Adidas Predator", en: "Adidas Predator" },
    description: {
      uz: "Nazorat va aniqlik uchun futbol butsilari.",
      ru: "Футбольные бутсы для контроля и точности.",
      en: "Football boots for control and precision."
    },
    price: 1999000,
    oldPrice: null,
    category: "shoes",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Black", "Red"],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 19
  },
  {
    id: 9,
    name: { uz: "Reebok Nano X3", ru: "Reebok Nano X3", en: "Reebok Nano X3" },
    description: {
      uz: "CrossFit va trening uchun universal poyabzal.",
      ru: "Универсальная обувь для кроссфита и тренировок.",
      en: "Universal shoes for CrossFit and training."
    },
    price: 1199000,
    oldPrice: 1499000,
    category: "shoes",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Black", "Grey", "Blue"],
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 28
  },
  {
    id: 10,
    name: { uz: "Salomon Speedcross 5", ru: "Salomon Speedcross 5", en: "Salomon Speedcross 5" },
    description: {
      uz: "Tog' va trail yugurish uchun poyabzal.",
      ru: "Обувь для горного и трейлового бега.",
      en: "Shoes for mountain and trail running."
    },
    price: 1599000,
    oldPrice: 1799000,
    category: "shoes",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Black", "Green", "Red"],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 14
  },
  {
    id: 11,
    name: { uz: "Nike Dri-FIT Futbolka", ru: "Футболка Nike Dri-FIT", en: "Nike Dri-FIT T-Shirt" },
    description: {
      uz: "Nafas oladigan material, terini quritadi.",
      ru: "Дышащий материал, отводит влагу.",
      en: "Breathable material, moisture-wicking."
    },
    price: 349000,
    oldPrice: 449000,
    category: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Blue", "Red"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 50
  },
  {
    id: 12,
    name: { uz: "Adidas Training Shorts", ru: "Шорты Adidas Training", en: "Adidas Training Shorts" },
    description: {
      uz: "Qulay va yengil trening shortlari.",
      ru: "Удобные и лёгкие тренировочные шорты.",
      en: "Comfortable and lightweight training shorts."
    },
    price: 299000,
    oldPrice: null,
    category: "clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Grey"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop",
    rating: 4.5,
    stock: 45
  },
  {
    id: 13,
    name: { uz: "Under Armour Hoodie", ru: "Худи Under Armour", en: "Under Armour Hoodie" },
    description: {
      uz: "Issiq va qulay sport xudi.",
      ru: "Тёплое и удобное спортивное худи.",
      en: "Warm and comfortable sports hoodie."
    },
    price: 699000,
    oldPrice: 899000,
    category: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 33
  },
  {
    id: 14,
    name: { uz: "Puma Sport Bras", ru: "Спортивный топ Puma", en: "Puma Sports Bra" },
    description: {
      uz: "Ayollar uchun qulay sport top.",
      ru: "Удобный спортивный топ для женщин.",
      en: "Comfortable sports bra for women."
    },
    price: 249000,
    oldPrice: 349000,
    category: "clothing",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Pink", "Purple"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 40
  },
  {
    id: 15,
    name: { uz: "Nike Pro Compression", ru: "Компрессионные тайтсы Nike Pro", en: "Nike Pro Compression Tights" },
    description: {
      uz: "Muskul qo'llab-quvvatlovchi kompression tayts.",
      ru: "Компрессионные тайтсы с поддержкой мышц.",
      en: "Muscle-supporting compression tights."
    },
    price: 549000,
    oldPrice: 699000,
    category: "clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy"],
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa78283?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 29
  },
  {
    id: 16,
    name: { uz: "Adidas Track Pants", ru: "Спортивные брюки Adidas", en: "Adidas Track Pants" },
    description: {
      uz: "Klassik sport shimlari.",
      ru: "Классические спортивные брюки.",
      en: "Classic sports track pants."
    },
    price: 449000,
    oldPrice: null,
    category: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey"],
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop",
    rating: 4.5,
    stock: 38
  },
  {
    id: 17,
    name: { uz: "The North Face Jacket", ru: "Куртка The North Face", en: "The North Face Jacket" },
    description: {
      uz: "Sovuq havo uchun issiq sport kurtkasi.",
      ru: "Тёплая спортивная куртка для холодной погоды.",
      en: "Warm sports jacket for cold weather."
    },
    price: 1899000,
    oldPrice: 2299000,
    category: "clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red", "Blue"],
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 16
  },
  {
    id: 18,
    name: { uz: "Columbia Softshell", ru: "Софтшелл Columbia", en: "Columbia Softshell" },
    description: {
      uz: "Shamol va yomg'irdan himoya qiluvchi softshell.",
      ru: "Софтшелл, защищающий от ветра и дождя.",
      en: "Softshell protecting from wind and rain."
    },
    price: 1299000,
    oldPrice: 1499000,
    category: "clothing",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Green", "Grey"],
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 22
  },
  {
    id: 19,
    name: { uz: "Nike Academy Jersey", ru: "Футбольная форма Nike Academy", en: "Nike Academy Jersey" },
    description: {
      uz: "Professional futbol formasi.",
      ru: "Профессиональная футбольная форма.",
      en: "Professional football jersey."
    },
    price: 599000,
    oldPrice: 799000,
    category: "clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Red"],
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195eb6?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 35
  },
  {
    id: 20,
    name: { uz: "Adidas 3-Stripes Pants", ru: "Брюки Adidas 3-Stripes", en: "Adidas 3-Stripes Pants" },
    description: {
      uz: "Ikonik 3 chiziqli sport shimlari.",
      ru: "Культовые спортивные брюки с 3 полосками.",
      en: "Iconic 3-stripes sports pants."
    },
    price: 499000,
    oldPrice: 599000,
    category: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy"],
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa78283?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 41
  },
  {
    id: 21,
    name: { uz: "Wilson NBA Basketbol", ru: "Баскетбольный мяч Wilson NBA", en: "Wilson NBA Basketball" },
    description: {
      uz: "Rasmiy NBA o'lchamidagi basketbol to'pi.",
      ru: "Официальный баскетбольный мяч размера NBA.",
      en: "Official NBA size basketball."
    },
    price: 449000,
    oldPrice: 549000,
    category: "equipment",
    sizes: ["7"],
    colors: ["Orange"],
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 30
  },
  {
    id: 22,
    name: { uz: "Adidas Champions League", ru: "Мяч Adidas Champions League", en: "Adidas Champions League Ball" },
    description: {
      uz: "UEFA Chempionlar ligasi rasmiy to'pi.",
      ru: "Официальный мяч Лиги чемпионов УЕФА.",
      en: "Official UEFA Champions League ball."
    },
    price: 599000,
    oldPrice: 799000,
    category: "equipment",
    sizes: ["5"],
    colors: ["White"],
    image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 25
  },
  {
    id: 23,
    name: { uz: "Spalding TF-1000", ru: "Баскетбольный мяч Spalding TF-1000", en: "Spalding TF-1000 Basketball" },
    description: {
      uz: "Professional basketbol to'pi.",
      ru: "Профессиональный баскетбольный мяч.",
      en: "Professional basketball."
    },
    price: 399000,
    oldPrice: null,
    category: "equipment",
    sizes: ["7"],
    colors: ["Orange"],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 28
  },
  {
    id: 24,
    name: { uz: "Yonex Badminton Racket", ru: "Ракетка для бадминтона Yonex", en: "Yonex Badminton Racket" },
    description: {
      uz: "Yengil va kuchli badminton raketkasi.",
      ru: "Лёгкая и прочная ракетка для бадминтона.",
      en: "Lightweight and strong badminton racket."
    },
    price: 899000,
    oldPrice: 1099000,
    category: "equipment",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 18
  },
  {
    id: 25,
    name: { uz: "Wilson Tennis Racket", ru: "Теннисная ракетка Wilson", en: "Wilson Tennis Racket" },
    description: {
      uz: "Professional tennis raketkasi.",
      ru: "Профессиональная теннисная ракетка.",
      en: "Professional tennis racket."
    },
    price: 1299000,
    oldPrice: 1599000,
    category: "equipment",
    sizes: ["One Size"],
    colors: ["Black", "Red"],
    image: "https://images.unsplash.com/photo-1617083934555-ac7a4b0c4e3e?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 14
  },
  {
    id: 26,
    name: { uz: "Dumbbell Set 20kg", ru: "Набор гантелей 20 кг", en: "Dumbbell Set 20kg" },
    description: {
      uz: "Uy treningi uchun sozlanuvchi gantel to'plami.",
      ru: "Регулируемый набор гантелей для домашних тренировок.",
      en: "Adjustable dumbbell set for home workouts."
    },
    price: 799000,
    oldPrice: 999000,
    category: "equipment",
    sizes: ["20kg"],
    colors: ["Black"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 20
  },
  {
    id: 27,
    name: { uz: "Yoga Mat Premium", ru: "Коврик для йоги Premium", en: "Premium Yoga Mat" },
    description: {
      uz: "Qalin va sirpanmaydigan yoga gilami.",
      ru: "Толстый нескользящий коврик для йоги.",
      en: "Thick non-slip yoga mat."
    },
    price: 249000,
    oldPrice: 349000,
    category: "equipment",
    sizes: ["One Size"],
    colors: ["Purple", "Blue", "Green", "Pink"],
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 55
  },
  {
    id: 28,
    name: { uz: "Resistance Bands Set", ru: "Набор резинок для фитнеса", en: "Resistance Bands Set" },
    description: {
      uz: "5 ta turli kuchlilikdagi rezina to'plami.",
      ru: "Набор из 5 резинок разной жёсткости.",
      en: "Set of 5 resistance bands of different strengths."
    },
    price: 199000,
    oldPrice: 299000,
    category: "equipment",
    sizes: ["Set"],
    colors: ["Multi"],
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop",
    rating: 4.5,
    stock: 60
  },
  {
    id: 29,
    name: { uz: "Jump Rope Pro", ru: "Скакалка Pro", en: "Pro Jump Rope" },
    description: {
      uz: "Tezlik va chidamlilik uchun professional sakrash arqoni.",
      ru: "Профессиональная скакалка для скорости и выносливости.",
      en: "Professional jump rope for speed and endurance."
    },
    price: 149000,
    oldPrice: null,
    category: "equipment",
    sizes: ["Adjustable"],
    colors: ["Black", "Red"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 48
  },
  {
    id: 30,
    name: { uz: "Foam Roller", ru: "Массажный ролик", en: "Foam Roller" },
    description: {
      uz: "Muskullarni tiklash uchun foam roller.",
      ru: "Массажный ролик для восстановления мышц.",
      en: "Foam roller for muscle recovery."
    },
    price: 179000,
    oldPrice: 249000,
    category: "equipment",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f14f?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 35
  },
  {
    id: 31,
    name: { uz: "Nike Air Force 1", ru: "Nike Air Force 1", en: "Nike Air Force 1" },
    description: {
      uz: "Klassik oq krossovkalar, har qanday uslubga mos.",
      ru: "Классические белые кроссовки, подходящие к любому стилю.",
      en: "Classic white sneakers that match any style."
    },
    price: 1199000,
    oldPrice: 1399000,
    category: "shoes",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["White", "Black"],
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 42
  },
  {
    id: 32,
    name: { uz: "Converse Chuck Taylor", ru: "Converse Chuck Taylor", en: "Converse Chuck Taylor" },
    description: {
      uz: "Afsonaviy klassik krossovkalar.",
      ru: "Легендарные классические кеды.",
      en: "Legendary classic sneakers."
    },
    price: 699000,
    oldPrice: 849000,
    category: "shoes",
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
    colors: ["White", "Black", "Red"],
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 50
  },
  {
    id: 33,
    name: { uz: "Vans Old Skool", ru: "Vans Old Skool", en: "Vans Old Skool" },
    description: {
      uz: "Skateboarding uchun klassik poyabzal.",
      ru: "Классическая обувь для скейтбординга.",
      en: "Classic skateboarding shoes."
    },
    price: 799000,
    oldPrice: null,
    category: "shoes",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    colors: ["Black", "Navy", "Checkered"],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 37
  },
  {
    id: 34,
    name: { uz: "Jordan 1 Retro", ru: "Jordan 1 Retro", en: "Jordan 1 Retro" },
    description: {
      uz: "Ikonik basketbol krossovkalari.",
      ru: "Культовые баскетбольные кроссовки.",
      en: "Iconic basketball sneakers."
    },
    price: 2499000,
    oldPrice: 2999000,
    category: "shoes",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Red/Black", "Blue/White"],
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 8
  },
  {
    id: 35,
    name: { uz: "Hoka Clifton 9", ru: "Hoka Clifton 9", en: "Hoka Clifton 9" },
    description: {
      uz: "Maksimal amortizatsiya bilan yugurish poyabzali.",
      ru: "Беговые кроссовки с максимальной амортизацией.",
      en: "Running shoes with maximum cushioning."
    },
    price: 1799000,
    oldPrice: 1999000,
    category: "shoes",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Blue", "Grey", "Black"],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 17
  },
  {
    id: 36,
    name: { uz: "Brooks Ghost 15", ru: "Brooks Ghost 15", en: "Brooks Ghost 15" },
    description: {
      uz: "Yumshoq va silliq yugurish tajribasi.",
      ru: "Мягкий и плавный беговой опыт.",
      en: "Soft and smooth running experience."
    },
    price: 1599000,
    oldPrice: null,
    category: "shoes",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Black", "Blue", "Pink"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 23
  },
  {
    id: 37,
    name: { uz: "Lululemon Align Leggings", ru: "Леггинсы Lululemon Align", en: "Lululemon Align Leggings" },
    description: {
      uz: "Yuqori sifatli yoga va trening leggings.",
      ru: "Высококачественные леггинсы для йоги и тренировок.",
      en: "High-quality yoga and training leggings."
    },
    price: 899000,
    oldPrice: 1099000,
    category: "clothing",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Burgundy"],
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa78283?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 26
  },
  {
    id: 38,
    name: { uz: "Gymshark Seamless", ru: "Бесшовный топ Gymshark", en: "Gymshark Seamless Top" },
    description: {
      uz: "Choksiz va qulay sport top.",
      ru: "Бесшовный и удобный спортивный топ.",
      en: "Seamless and comfortable sports top."
    },
    price: 449000,
    oldPrice: 549000,
    category: "clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Green"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 34
  },
  {
    id: 39,
    name: { uz: "Patagonia Better Sweater", ru: "Свитер Patagonia Better", en: "Patagonia Better Sweater" },
    description: {
      uz: "Ekologik toza materialdan issiq sviter.",
      ru: "Тёплый свитер из экологичных материалов.",
      en: "Warm sweater made from eco-friendly materials."
    },
    price: 1499000,
    oldPrice: 1799000,
    category: "clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Grey", "Green"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 19
  },
  {
    id: 40,
    name: { uz: "Nike Tech Fleece", ru: "Nike Tech Fleece", en: "Nike Tech Fleece" },
    description: {
      uz: "Yengil va issiq texnologik flis.",
      ru: "Лёгкий и тёплый технологичный флис.",
      en: "Lightweight and warm technical fleece."
    },
    price: 999000,
    oldPrice: 1299000,
    category: "clothing",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 31
  },
  {
    id: 41,
    name: { uz: "Garmin Forerunner 255", ru: "Garmin Forerunner 255", en: "Garmin Forerunner 255" },
    description: {
      uz: "Professional yugurish soati GPS bilan.",
      ru: "Профессиональные беговые часы с GPS.",
      en: "Professional running watch with GPS."
    },
    price: 3499000,
    oldPrice: 3999000,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "White"],
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 12
  },
  {
    id: 42,
    name: { uz: "Apple Watch Ultra", ru: "Apple Watch Ultra", en: "Apple Watch Ultra" },
    description: {
      uz: "Ekstremal sport uchun eng yaxshi soat.",
      ru: "Лучшие часы для экстремального спорта.",
      en: "Best watch for extreme sports."
    },
    price: 8999000,
    oldPrice: null,
    category: "accessories",
    sizes: ["49mm"],
    colors: ["Titanium"],
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop",
    rating: 4.9,
    stock: 7
  },
  {
    id: 43,
    name: { uz: "Fitbit Charge 6", ru: "Fitbit Charge 6", en: "Fitbit Charge 6" },
    description: {
      uz: "Fitnes treker va soat.",
      ru: "Фитнес-трекер и часы.",
      en: "Fitness tracker and watch."
    },
    price: 1499000,
    oldPrice: 1799000,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "Blue", "Pink"],
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
    rating: 4.5,
    stock: 28
  },
  {
    id: 44,
    name: { uz: "Oakley Holbrook", ru: "Очки Oakley Holbrook", en: "Oakley Holbrook Sunglasses" },
    description: {
      uz: "Sport va kundalik foydalanish uchun ko'zoynak.",
      ru: "Очки для спорта и повседневного использования.",
      en: "Sunglasses for sports and everyday use."
    },
    price: 1299000,
    oldPrice: 1599000,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "Brown"],
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 22
  },
  {
    id: 45,
    name: { uz: "Nike Cap Heritage86", ru: "Кепка Nike Heritage86", en: "Nike Heritage86 Cap" },
    description: {
      uz: "Klassik sport kepkasi.",
      ru: "Классическая спортивная кепка.",
      en: "Classic sports cap."
    },
    price: 249000,
    oldPrice: 349000,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "White", "Navy", "Red"],
    image: "https://images.unsplash.com/photo-1588850561407-ed78cbaac84b?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 65
  },
  {
    id: 46,
    name: { uz: "Hydro Flask 32oz", ru: "Бутылка Hydro Flask 32oz", en: "Hydro Flask 32oz" },
    description: {
      uz: "Issiqlikni saqlovchi sport shishasi.",
      ru: "Термобутылка для спорта.",
      en: "Insulated sports water bottle."
    },
    price: 449000,
    oldPrice: 549000,
    category: "accessories",
    sizes: ["32oz"],
    colors: ["Black", "Blue", "Green", "Pink"],
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 40
  },
  {
    id: 47,
    name: { uz: "Nike Backpack Brasilia", ru: "Рюкзак Nike Brasilia", en: "Nike Brasilia Backpack" },
    description: {
      uz: "Keng va qulay sport ryukzagi.",
      ru: "Вместительный и удобный спортивный рюкзак.",
      en: "Spacious and comfortable sports backpack."
    },
    price: 549000,
    oldPrice: 699000,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "Navy", "Grey"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 33
  },
  {
    id: 48,
    name: { uz: "Adidas Gym Bag", ru: "Спортивная сумка Adidas", en: "Adidas Gym Bag" },
    description: {
      uz: "Trening uchun qulay sumka.",
      ru: "Удобная сумка для тренировок.",
      en: "Convenient bag for training."
    },
    price: 399000,
    oldPrice: null,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "Navy"],
    image: "https://images.unsplash.com/photo-1548036328-c085554fba75?w=500&h=500&fit=crop",
    rating: 4.5,
    stock: 29
  },
  {
    id: 49,
    name: { uz: "Under Armour Socks 3-Pack", ru: "Носки Under Armour 3 пары", en: "Under Armour Socks 3-Pack" },
    description: {
      uz: "Sport uchun qulay paypoqlar to'plami.",
      ru: "Набор удобных спортивных носков.",
      en: "Set of comfortable sports socks."
    },
    price: 149000,
    oldPrice: 199000,
    category: "accessories",
    sizes: ["M", "L"],
    colors: ["Black", "White", "Grey"],
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 80
  },
  {
    id: 50,
    name: { uz: "Polarized Sports Goggles", ru: "Поляризационные очки для спорта", en: "Polarized Sports Goggles" },
    description: {
      uz: "Chang'i va snowboard uchun himoya ko'zoynagi.",
      ru: "Защитные очки для лыж и сноуборда.",
      en: "Protective goggles for skiing and snowboarding."
    },
    price: 699000,
    oldPrice: 899000,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "Orange"],
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 15
  },
  {
    id: 51,
    name: { uz: "Kettlebell 16kg", ru: "Гиря 16 кг", en: "Kettlebell 16kg" },
    description: {
      uz: "Kuch treningi uchun cho'yan gira.",
      ru: "Чугунная гиря для силовых тренировок.",
      en: "Cast iron kettlebell for strength training."
    },
    price: 449000,
    oldPrice: 549000,
    category: "equipment",
    sizes: ["16kg"],
    colors: ["Black"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 20
  },
  {
    id: 52,
    name: { uz: "Pull-Up Bar Doorway", ru: "Турник в дверной проём", en: "Doorway Pull-Up Bar" },
    description: {
      uz: "Eshik uchun o'rnatiladigan turnik.",
      ru: "Турник, устанавливаемый в дверной проём.",
      en: "Pull-up bar for doorway installation."
    },
    price: 299000,
    oldPrice: 399000,
    category: "equipment",
    sizes: ["Adjustable"],
    colors: ["Black"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop",
    rating: 4.5,
    stock: 25
  },
  {
    id: 53,
    name: { uz: "Ab Wheel Roller", ru: "Ролик для пресса", en: "Ab Wheel Roller" },
    description: {
      uz: "Qorin mushaklari uchun roller.",
      ru: "Ролик для тренировки мышц пресса.",
      en: "Roller for abs training."
    },
    price: 129000,
    oldPrice: 179000,
    category: "equipment",
    sizes: ["One Size"],
    colors: ["Black", "Red"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop",
    rating: 4.4,
    stock: 45
  },
  {
    id: 54,
    name: { uz: "Medicine Ball 5kg", ru: "Медицинский мяч 5 кг", en: "Medicine Ball 5kg" },
    description: {
      uz: "Funktsional trening uchun tibbiy to'p.",
      ru: "Медицинский мяч для функциональных тренировок.",
      en: "Medicine ball for functional training."
    },
    price: 249000,
    oldPrice: null,
    category: "equipment",
    sizes: ["5kg"],
    colors: ["Black", "Red"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 30
  },
  {
    id: 55,
    name: { uz: "Speed Ladder", ru: "Координационная лестница", en: "Speed Ladder" },
    description: {
      uz: "Tezlik va koordinatsiya uchun zinapoya.",
      ru: "Лестница для развития скорости и координации.",
      en: "Ladder for speed and coordination development."
    },
    price: 179000,
    oldPrice: 249000,
    category: "equipment",
    sizes: ["One Size"],
    colors: ["Yellow", "Blue"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop",
    rating: 4.5,
    stock: 22
  },
  {
    id: 56,
    name: { uz: "Boxing Gloves 12oz", ru: "Боксёрские перчатки 12 oz", en: "Boxing Gloves 12oz" },
    description: {
      uz: "Professional boks qo'lqoplari.",
      ru: "Профессиональные боксёрские перчатки.",
      en: "Professional boxing gloves."
    },
    price: 499000,
    oldPrice: 649000,
    category: "equipment",
    sizes: ["12oz"],
    colors: ["Black", "Red", "Blue"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500&h=500&fit=crop",
    rating: 4.7,
    stock: 18
  },
  {
    id: 57,
    name: { uz: "Punching Bag 30kg", ru: "Боксёрская груша 30 кг", en: "Punching Bag 30kg" },
    description: {
      uz: "Uy uchun boks grushasi.",
      ru: "Боксёрская груша для дома.",
      en: "Boxing bag for home use."
    },
    price: 899000,
    oldPrice: 1199000,
    category: "equipment",
    sizes: ["30kg"],
    colors: ["Black", "Red"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500&h=500&fit=crop",
    rating: 4.6,
    stock: 10
  },
  {
    id: 58,
    name: { uz: "Cycling Helmet", ru: "Велосипедный шлем", en: "Cycling Helmet" },
    description: {
      uz: "Xavfsiz va yengil velosiped shlemi.",
      ru: "Безопасный и лёгкий велосипедный шлем.",
      en: "Safe and lightweight cycling helmet."
    },
    price: 449000,
    oldPrice: 599000,
    category: "accessories",
    sizes: ["M", "L"],
    colors: ["Black", "White", "Red"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    rating: 4.8,
    stock: 27
  },
  {
    id: 59,
    name: { uz: "Swim Goggles Pro", ru: "Очки для плавания Pro", en: "Pro Swim Goggles" },
    description: {
      uz: "Suv o'tkazmaydigan suzish ko'zoynagi.",
      ru: "Водонепроницаемые очки для плавания.",
      en: "Waterproof swimming goggles."
    },
    price: 199000,
    oldPrice: 299000,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "Blue", "Clear"],
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=500&fit=crop",
    rating: 4.5,
    stock: 40
  },
  {
    id: 60,
    name: { uz: "Fitness Tracker Band", ru: "Фитнес-браслет", en: "Fitness Tracker Band" },
    description: {
      uz: "Yurak urishi va qadamlar uchun fitnes braslet.",
      ru: "Фитнес-браслет для пульса и шагов.",
      en: "Fitness band for heart rate and steps."
    },
    price: 349000,
    oldPrice: 449000,
    category: "accessories",
    sizes: ["One Size"],
    colors: ["Black", "Pink", "Blue"],
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
    rating: 4.4,
    stock: 55
  }
];

const CATEGORIES = {
  all: { uz: "Barchasi", ru: "Все", en: "All" },
  shoes: { uz: "Poyabzal", ru: "Обувь", en: "Shoes" },
  clothing: { uz: "Kiyim", ru: "Одежда", en: "Clothing" },
  equipment: { uz: "Jihozlar", ru: "Инвентарь", en: "Equipment" },
  accessories: { uz: "Aksessuarlar", ru: "Аксессуары", en: "Accessories" }
};

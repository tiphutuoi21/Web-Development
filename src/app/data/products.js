export const products = [
  {
    id: 1,
    name: "Figure Naruto",
    price: 500000,
    originalPrice: 600000,
    discount: 17,
    category: "anime",
    image: "/placeholder-image.svg",
    description: "Mô hình Naruto cao 20cm, chất liệu PVC cao cấp.",
    inStock: true,
    features: [
      "Cao 20cm",
      "Chất liệu PVC cao cấp",
      "Chi tiết sắc nét",
      "Có thể thay đổi tư thế"
    ]
  },
  {
    id: 2,
    name: "Figure Luffy",
    price: 450000,
    originalPrice: null,
    discount: null,
    category: "anime",
    image: "/placeholder-image.svg",
    description: "Mô hình Monkey D. Luffy từ One Piece, thiết kế sinh động.",
    inStock: true,
    features: [
      "Cao 18cm",
      "Chất liệu PVC",
      "Thiết kế sinh động",
      "Phụ kiện đi kèm"
    ]
  },
  {
    id: 3,
    name: "Figure Goku Super Saiyan",
    price: 750000,
    originalPrice: 850000,
    discount: 12,
    category: "anime",
    image: "/placeholder-image.svg",
    description: "Mô hình Son Goku ở trạng thái Super Saiyan, rất ấn tượng.",
    inStock: true,
    features: [
      "Cao 25cm",
      "Chất liệu PVC cao cấp",
      "LED tích hợp",
      "Hiệu ứng ánh sáng"
    ]
  },
  {
    id: 4,
    name: "Figure Spider-Man",
    price: 650000,
    originalPrice: null,
    discount: null,
    category: "marvel",
    image: "/placeholder-image.svg",
    description: "Mô hình Spider-Man chính hãng Marvel với chi tiết hoàn hảo.",
    inStock: true,
    features: [
      "Cao 22cm",
      "Chất liệu PVC",
      "Khớp cử động",
      "Phụ kiện web"
    ]
  },
  {
    id: 5,
    name: "Figure Link - Zelda",
    price: 800000,
    originalPrice: 900000,
    discount: 11,
    category: "game",
    image: "/placeholder-image.svg",
    description: "Mô hình Link từ game The Legend of Zelda: Breath of the Wild.",
    inStock: false,
    features: [
      "Cao 23cm",
      "Chất liệu PVC cao cấp",
      "Phụ kiện Master Sword",
      "Khiên Hylian"
    ]
  },
  {
    id: 6,
    name: "Figure Iron Man Mark 85",
    price: 1200000,
    originalPrice: null,
    discount: null,
    category: "marvel",
    image: "/placeholder-image.svg",
    description: "Mô hình Iron Man Mark 85 từ Avengers: Endgame với áo giáp chi tiết.",
    inStock: true,
    features: [
      "Cao 30cm",
      "Chất liệu ABS + PVC",
      "LED tích hợp",
      "Khớp cử động"
    ]
  }
];

export const categories = [
  { id: 'anime', name: 'Anime', count: 3 },
  { id: 'game', name: 'Game', count: 1 },
  { id: 'marvel', name: 'Marvel', count: 2 }
];
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 FigureShop. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-300 transition-colors">
            Về chúng tôi
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            Liên hệ
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            Chính sách bảo hành
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            Điều khoản sử dụng
          </a>
        </div>
      </div>
    </footer>
  );
}
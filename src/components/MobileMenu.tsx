
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-navy hover:text-gold transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300">
            <div className="flex justify-end p-4">
              <button onClick={closeMenu} className="text-navy">
                <X size={24} />
              </button>
            </div>
            <nav className="px-4">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="block py-2 text-navy hover:text-gold transition-colors"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products" 
                    className="block py-2 text-navy hover:text-gold transition-colors"
                    onClick={closeMenu}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="block py-2 text-navy hover:text-gold transition-colors"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}

export default MobileMenu


import { useState } from "react"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  className?: string
}

const SearchBar = ({ onSearch, placeholder = "Search products...", className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value) // Real-time search
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy outline-none"
        />
      </div>
    </form>
  )
}

export default SearchBar

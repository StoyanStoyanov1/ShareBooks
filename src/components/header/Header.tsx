import { Button } from "@/components/ui/button"

export default function Header () {
    return (
        <header className="bg-gray-800 text-white p-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Share-Books</h1>
      <nav className="flex space-x-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
    )
}
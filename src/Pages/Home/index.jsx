import { useContext, useState, useMemo } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import CartSummary from '../../Components/CartSummary'
import { ShoppingCartContext } from '../../Context'

const Home = () => {
  const context = useContext(ShoppingCartContext)
  const [searchTerm, setSearchTerm] = useState('')

  // Filter items based on search term
  const filteredItems = useMemo(() => {
    if (!searchTerm) return context.items
    return context.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [context.items, searchTerm])

  return (
    <Layout>
      {/* Header */}
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Featured Products</h1>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* Products Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg px-4 md:px-0">
        {filteredItems.length > 0 ? (
          filteredItems.map(product => <Card key={product.id} product={product} />)
        ) : (
          <div className="col-span-4 text-center py-4 text-gray-500">
            No products found matching your search
          </div>
        )}
      </div>

      {/* Cart Summary */}
      <CartSummary />
    </Layout>
  )
}

export default Home

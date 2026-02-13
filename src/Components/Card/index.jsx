import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import PropTypes from 'prop-types'

const Card = ({ product }) => {
  const context = useContext(ShoppingCartContext)

  const handleAddToCart = (event) => {
    event.stopPropagation()
    context.addToCart(product)
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some(item => item.id === id)

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2">
          <CheckIcon className="h-4 w-4 text-white" />
        </div>
      )
    }

    return (
      <div
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 hover:bg-gray-100"
        onClick={handleAddToCart}
      >
        <PlusIcon className="h-4 w-4 text-black" />
      </div>
    )
  }

  return (
    <div
      className="bg-white cursor-pointer w-full max-w-[280px] mx-auto h-60 rounded-lg hover:shadow-lg transition-shadow relative"
      onClick={() => alert(`Product: ${product.title}\nPrice: $${product.price}`)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <img
          className="w-full h-full object-contain rounded-lg"
          src={product.images[0]}
          alt={product.title}
        />
        {renderIcon(product.id)}
      </figure>

      <p className="flex justify-between px-2 items-center">
        <span className="text-sm font-light truncate">{product.title}</span>
        <span className="text-lg font-medium">${product.price}</span>
      </p>
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
  }).isRequired
}

export default Card

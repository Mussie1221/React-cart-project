import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'

const App = () => {
  return (
    <ShoppingCartProvider>
      <div className="min-h-screen bg-gray-100">
        <Home />
      </div>
    </ShoppingCartProvider>
  )
}

export default App

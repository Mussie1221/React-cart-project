import PropTypes from "prop-types"
const Layout = ({children}) => {
    return (
        <div className="flex flex-col items-center mt-20 px-4 md:px-0 py-2">
            {children}
        </div>
    )
}
// Prop validation
Layout.propTypes = {
  children: PropTypes.node.isRequired, // <-- children can be any renderable React content
}
export default Layout
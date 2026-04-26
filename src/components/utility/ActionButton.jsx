
const ActionButton = ({children, variant, onClick, ariaLabel}) => {

    const baseStyles = "flex items-center gap-1 font-normal transition-colors duration-200 active:scale-95";
    const variantStyles = {
        edit: "text-purple hover:text-purple-light",
        delete: "text-pink hover:text-pink-light",
        reply: "text-purple hover:text-purple-light",
    }


  return (
    <button type="button" className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick} aria-label={ariaLabel}>
        {children}
    </button>
  )
}

export default ActionButton
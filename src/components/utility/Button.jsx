

const Button = ({ children, onClick }) => {

    const baseStyles = 'uppercase bg-purple text-white font-light py-3 px-6 rounded hover:bg-purple-light rounded transition-colors duration-200 active:scale-95';
    


  return (
    <button type="button" className={`${baseStyles}`} aria-label={children === "Send" ? "Send comment" : children === "Reply" ? "Reply to comment" : "Update comment"} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
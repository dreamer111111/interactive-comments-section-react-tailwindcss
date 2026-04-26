const ScoreControl = ({ score, onUpVote, onDownVote, userVote }) => {
  const btnClasses = "text-purple-light hover:text-purple transition-all duration-200 px-2 pb-1 text-2xl active:scale-125";

  return (
    <div className="inline-flex flex-row md:flex-col items-center justify-between bg-grey-lightest py-2 px-1 rounded-xl min-w-10 md:min-h-25">
      <button 
        type="button"
        onClick={onUpVote}
        aria-label="Increase score"
        className={`${btnClasses} ${userVote === 'up' ? 'text-purple font-bold' : ''}`}
      >
        +
      </button>
      
      <span className="font-bold text-purple text-md">
        {score}
      </span>
      
      <button 
        type="button"
        onClick={onDownVote}
        aria-label="Decrease score"
        className={`${btnClasses} ${userVote === 'down' ? 'text-purple font-bold' : ''}`}
      >
        -
      </button>
    </div>
  );
}
export default ScoreControl
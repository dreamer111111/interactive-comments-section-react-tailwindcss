import ScoreControl from "../utility/ScoreControl";
import ActionButton from "../utility/ActionButton";

const CommentCard = ({ comment, isCurrentUser }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-col md:flex-row gap-4 items-start">
      {/* Score Control - Moves to bottom on mobile via flex order or Grid */}
      <div className="order-2 md:order-1">
        <ScoreControl score={comment.score} />
      </div>

      <div className="flex-1 order-1 md:order-2 w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <img src={comment.user.image.png} alt="" className="w-8 h-8" />
            <span className="font-bold text-grey-dark">{comment.user.username}</span>
            {isCurrentUser && (
              <span className="bg-purple text-white text-xs px-2 py-0.5 rounded-sm">you</span>
            )}
            <span className="text-grey-light">{comment.createdAt}</span>
          </div>
          
          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex gap-4">
            {isCurrentUser ? (
              <>
                <ActionButton variant="delete" ariaLabel="Delete">Delete</ActionButton>
                <ActionButton variant="edit" ariaLabel="Edit">Edit</ActionButton>
              </>
            ) : (
              <ActionButton variant="reply" ariaLabel="Reply">Reply</ActionButton>
            )}
          </div>
        </div>

        {/* Content */}
        <p className="text-grey-light leading-6">
          {comment.replyingTo && (
            <span className="text-purple font-bold mr-2">@{comment.replyingTo}</span>
          )}
          {comment.content}
        </p>
      </div>

      {/* Action Buttons (Mobile - shown at bottom) */}
      <div className="md:hidden order-3 flex justify-end w-full -mt-10">
         <ActionButton variant="reply" ariaLabel="Reply">Reply</ActionButton>
      </div>
    </div>
  );
};

export default CommentCard;
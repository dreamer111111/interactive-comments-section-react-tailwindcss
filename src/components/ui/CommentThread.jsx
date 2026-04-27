import CommentCard from "./CommentCard";

const CommentThread = ({ comment, currentUser, setData }) => {
  const hasReplies = comment.replies && comment.replies.length > 0;

  return (
    <div className="flex flex-col gap-4 mb-4">
      {/* The main comment card */}
      <CommentCard 
        comment={comment} 
        isCurrentUser={currentUser.username === comment.user.username} 
        setData={setData}
      />

      {/* The Replies Section */}
      {hasReplies && (
        <div className="flex flex-row">
          {/* Vertical Line Container */}
          <div className="w-1 md:w-20 flex justify-center">
            <div className="w-0.5 bg-grey-lighter h-full"></div>
          </div>

          {/* Map through replies */}
          <div className="flex flex-col gap-4 w-full">
            {comment.replies.map((reply) => (
              <CommentCard 
                key={reply.id} 
                comment={reply} 
                isCurrentUser={currentUser.username === reply.user.username}
                setData={setData}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentThread;
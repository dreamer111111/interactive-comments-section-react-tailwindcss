import { useState } from 'react';
import dataJSON from './data.json'; 
import CommentThread from './components/ui/CommentThread.jsx';

const App = () => {
  // Initialize state with the JSON data
  const [data, setData] = useState(dataJSON);

  return (
    <main className="min-h-screen bg-grey-lightest py-8 px-4 md:py-16">
      <section className="max-w-182.5 mx-auto flex flex-col gap-5">
        
        {/* Loop through comments */}
        {data.comments.map((comment) => (
          <CommentThread 
            key={comment.id} 
            comment={comment} 
            currentUser={data.currentUser} 
            setData={setData}
          />
        ))}

    
        <div className="bg-white p-4 rounded-lg mt-2">
          <p className="text-grey-light italic text-center">
            New Comment Input Component will go here...
          </p>
        </div>

      </section>
    </main>
  );
};

export default App;
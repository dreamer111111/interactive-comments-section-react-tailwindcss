
import './index.css'

const App = () => {
  return (
    <div className='bg-white'>
      <h1 className='font-bold text-lg text-grey-dark'>amyrobson</h1>
      <p className='text-grey-light font-normal'>1 month ago</p>
      <p className='text-grey-light font-light'>Impressive! Though it seems the drag feature</p>
      <button className='flex flex-col items-center gap-1 bg-grey-lightest p-1 rounded'>
        <span aria-label='Increase-score' className='text-grey-light hover:text-grey-dark'>+</span>
        <span className='font-bold text-purple'>12</span>
        <span aria-label='Decrease-score' className='text-grey-light hover:text-grey-dark cursor-pointer hover:font-bold'>-</span>
      </button>
      <button className='font-normal text-pink hover:text-pink-light'>Delete</button>
      <button className='font-normal text-purple hover:text-purple-light'>Reply</button>
      <button className='font-normal text-purple hover:text-purple-light'>edit</button>
      <span className='font-bold text-purple'>@ramsesmiron</span>
      <span className='bg-purple p-0.5 rounded text-white'>you</span>
    </div>
  )
}

export default App
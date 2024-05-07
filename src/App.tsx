import ImgSlider from './ImgSlider.tsx'
import image1 from './assets/overlord-cover.jpg'
import image2 from './assets/youjo-senki-cover.png'
import image3 from './assets/venti-cover.jpg'

const images = [
  {url: image1, title: "overlord"}, 
  {url: image2, title: "tanya"},
  {url: image3, title: "venti"}
]

function App() {
  return (
    <>
      <div className='w-full m-auto'>
        <ImgSlider images={images}/>
      </div>
    </>
  )
}

export default App

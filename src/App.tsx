import ImgSlider from './ImgSlider.tsx'
import image1 from './assets/overlord-cover.jpg'
import image2 from './assets/youjo-senki-cover.png'
import image3 from './assets/venti-cover.jpg'

const images = [
  {url: image1, title: "Overlord"}, 
  {url: image2, title: "Youjo Senki"},
  {url: image3, title: "Genshin Impact"}
]

function App() {
  return (
    <div className='m-3'>
      <ImgSlider images={images}/>
    </div>
  )
}

export default App

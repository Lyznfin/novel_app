import image1 from './assets/overlord-cover.jpg'
import image2 from './assets/youjo-senki-cover.png'
import image3 from './assets/venti-cover.jpg'

const images = [
  {url: image1, title: "Overlord", description: "In 21st century, world entered a new stage of VR games, and “YGGDRASIL” is considered top of all MMORPG. But, After announcing that all its servers will be off, the internet game “YGGDRASIL” is shut down, or so was supposed to happen. For some reason, the player character did not log out some time after the server was closed. NPCs start to become sentient. A normal youth who loves gaming in the real world seemed to have been transported into ..."}, 
  {url: image2, title: "Youjo Senki", description: "On the front line of the war, there’s a little girl. Blond hair, blue eyes and porcelain white skin, she commands the army with lisping voice. Her name is Tanya Degurechaff. But in reality, she is one of Japan’s most elite salarymen, reborn as a little girl after angering a mysterious being X who calls himself “God.” And this little girl, who prioritize over anything else efficiency and her own career, will become the most ..."},
  {url: image3, title: "Genshin Impact", description: "Heheheha"}
]

import productData from './data.tsx'

import ImgSlider from './components/ImgSlider.tsx'
import Navbar from './components/Navbar.tsx'
import Card from './components/Card.tsx'

function App() {
  return (
    <div className='max-w-full w-full'>
        <Navbar/>
        <ImgSlider images={images}/>
      <div className="mx-16 mt-10 recomendation">
      {
        productData.map(value => (
          <Card key={value.id} name={value.name} image={value.image} status={value.status} rating={value.rating} />   
        ))
      }
      </div>
    </div>
  )
}

export default App

import './CSS/Error404.css';
import './CSS/CustomeProperties.css';
import Image404 from './Image/404.webp'

function Error404() {
  return (
    <main className="notfound-container">
      <img src={Image404} alt="Page not found" className='image-notfound' />
    </main>
  )
}

export default Error404;
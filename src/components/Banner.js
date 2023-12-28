import '../styles/Banner.css'
import logo from '../assets/leaf+1.png'
import Recommandation from './Recommandation'

function Banner(){
   const title = "la maison jungle"
   return (
   <div className="lmj-banner">
      <div className='lmj-banner-row'> 
        <img src={logo} alt="la maison jungle" className="lmj-logo"/>
        <h1 className="lmj-title">{title}</h1>
      </div>
        <Recommandation/>
   </div>)
}

export default Banner
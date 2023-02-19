import '../Style/Banner.css'
import logo from '../asset/logo.png'


 function Banner()
 {
    return  (
        <div className="imj-banner">
            <img src={logo} alt='La maison jungle' className='imj-logo' />
            <h1>La maison jungle</h1>  
        </div>
    )
 }  
        
export default Banner  
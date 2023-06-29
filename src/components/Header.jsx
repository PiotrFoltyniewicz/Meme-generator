import icon from '../assets/logo.svg'

export default function Header(){
    return(
        <header className='header'>
            <div class='header--leftWrapper'>
                <img src={icon} className='header--icon'/>
                <h2 className='header--title'>Meme generator</h2>
            </div>
            <p className='header--sideText'>React Course - Project 3</p>
        </header>
    )

}
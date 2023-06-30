export default function Meme(){
    return (
        <form className='meme' method='get'>
            <div className="meme--inputWrapper">
                <input className='meme--input' type='text' placeholder='Upper Text'/>
                <input className='meme--input' type='text' placeholder='Bottom Text'/>
            </div>
            <button className='meme--button'>Get a new meme image</button>
        </form>
    )
}
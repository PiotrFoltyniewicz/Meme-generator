import memesData from '../memesData'
import {useState} from 'react';

export default function Meme(){

    const [memeUrl, setMemeUrl] = useState('');

    function getMeme(){
        const memesArray = memesData.data.memes;
        const url = memesArray[Math.floor(Math.random() * memesArray.length)].url;
        setMemeUrl(url);
    }

    return (
        <div className='meme' method='get'>
            <div className="meme--inputWrapper">
                <input className='meme--input' type='text' placeholder='Upper Text'/>
                <input className='meme--input' type='text' placeholder='Bottom Text'/>
            </div>
            <button className='meme--button' onClick={getMeme}>Get a new meme image</button>
            <img src={memeUrl} className='meme--imageOut'/>
        </div>
    )
}
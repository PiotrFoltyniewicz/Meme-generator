import {useState, useEffect} from 'react';

export default function Meme(){

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemes, setAllMemes] = useState(null)

    useEffect(() =>{
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const url = allMemes[Math.floor(Math.random() * allMemes.length)].url;
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className='main'>
            <div className="main--inputWrapper">
                <input 
                    className='main--input' 
                    type='text' 
                    placeholder='Upper Text' 
                    name='topText' 
                    onChange={handleChange} 
                    value={meme.topText}
                />
                <input 
                    className='main--input' 
                    type='text' 
                    placeholder='Bottom Text' 
                    name='bottomText'
                    onChange={handleChange} 
                    value={meme.bottomText}
                />
            </div>
            <button className='main--button' onClick={getMemeImage}>Get a new meme image</button>
            <div className='meme'>
                <img src={meme.randomImage} className='meme--image'/>
                <h2 className='meme--topText'>{meme.topText}</h2>
                <h2 className='meme--bottomText'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}
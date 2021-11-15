import React from 'react';
import './hero.scss'

export default function Hero() {
    return (
        <div className="hero">
            <div className="heroWatch">
                <div>
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div>
                    <img src={'https://occ-0-3587-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd'} alt="netflix offical"></img>
                </div>
            </div>
            <div className="heroDownload">
                <div>
                    <img src={'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'} alt="netflix offical"></img>
                </div>
                <div>
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favorites easily and always have something to watch.</p>
                </div>    
            </div>
            <div>
                <div>
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
        </div>
    )
}

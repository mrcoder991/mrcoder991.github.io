import React from 'react'

const LandingPage = () => {
  return (
    // <!-- ************* landing page *****************************-->
        <section className="image-holder snap-item">
            <h1 className="big-title" data-speed="0">Hi<span className="span1">,
                </span> I am<br/>
                a <span className="typing-text"></span>
                <span className="dot">.</span>
            </h1>

            <img src="https://ik.imagekit.io/nmtrlmn4bwh/MyPortfolio/background" className="background translate"
                data-speed="0.1" alt=""/>
            <img src="https://ik.imagekit.io/nmtrlmn4bwh/MyPortfolio/layer.png" className="mountain translate"
                data-speed="-0.2" alt=""/>
            <img src="https://ik.imagekit.io/nmtrlmn4bwh/MyPortfolio/foreground.png" className="foreground translate"
                data-speed="-0.25" alt=""/>
        </section>
  )
}

export default LandingPage
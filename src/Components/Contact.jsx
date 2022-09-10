import React from 'react'

const Contact = () => {
  return (
    // <!-- ******************** contact ************************ -->
        <section className="contact-section flex-container snap-item" id="contact">
            <h2 className="section-heading">Let's get in contact <span> !</span></h2>
            <div className="flex-container contact-holder">
                <div className="contact-details">
                    <i className="fa fa-user"><a href="#"> Uday Girhepunje</a></i><br/>
                    <i className="fas fa-envelope"><a href="#"> udaygirhepunje41@gmail.com</a></i><br/>
                    <i className="fas fa-compass"><a href="#"> Pune, India</a></i>

                    <div className="icons">
                        <a href="https://github.com/mrcoder991" target="_blank"><i className="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/uday-girhepunje-6958a21b8/" target="_blank"><i
                                className="fa fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/uday_699/" target="_blank"><i
                                className="fa fa-instagram"></i></a>
                        <a href="https://twitter.com/UdayGirhepunje" target="_blank"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100009394355759" target="_blank"><i
                                className="fa fa-facebook"></i></a>
                        <a href="mailto:udaygirhepunje41@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="https://airform.io/udaygirhepunje41@gmail.com" id="contact-form" method="post">
                        <h3>Contact me</h3>
                        <div className="input-div">
                            <input type="text" id="name" name="name" placeholder="" required/>
                            <span></span>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-div">
                            <input type="email" id="email" name="email" placeholder="" required/>
                            <span></span>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-div">
                            <input type="number" id="phone" name="phone" maxLength="10" placeholder="" required/>
                            <span></span>
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-div">
                            <input type="text" id="subject" name="subject" placeholder="" required/>
                            <span></span>
                            <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="input-div">
                            <textarea name="message" id="messege" rows="5" placeholder=" "></textarea><br/>
                            <span className="textarea-span"></span>
                            <label className="textarea-label" htmlFor="message">Messege</label>
                        </div>
                        <div className="pass">
                            <button type="submit" form="contact-form" value="Submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Contact
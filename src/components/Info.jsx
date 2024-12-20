function Info() {
    const expDifference = new Date() - new Date("2022-10-03T00:00:00+05:30");
    const expNum = expDifference / (365 * 24 * 60 * 60 * 1000);
    return (
        <section className="info-section">
            <div className="intro-wrapper">
                <h1 className="welcome-text">Welcome</h1>
                <div className='w_0_1_wrapper'>
                    <div style={{ width: '65%' }}>
                        <p className="about-me">
                        Hi, I'm Tarun Saini, a Full Stack Developer with over {expNum.toFixed(1)} years of experience based in India. I am passionate about crafting innovative web solutions and coding dynamic applications that make an impact.
                        </p>
                    </div>
                    <div className="img-wrapper">
                        <img src="/img/me.jpg" alt="its-me" height="180px"/>
                    </div>
                </div>

                <div className="social-media-wrapper">
                    <div>
                        <a href="https://github.com/tarunsaini45"  target="_blank" rel="noopener noreferrer">
                            <img src="/img/github.svg" alt="" />
                        </a>
                    </div>
                    <div>
                    <a href= "mailto: tarunsaini.iitd@gmail.com">
                        <img src="/img/mail.svg" alt="mail-image" />
                    </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Info;
import "./intro.css";
import ddk from "../../src/img/ddk.png";
const Intro = () =>
{
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-hello">Hello, my name is</h2>
                    <h1 className="i-name">
                        <div className="i-firstname">
                            <div className="i-name-letter">C</div>
                            <div className="i-name-letter">h</div>
                            <div className="i-name-letter">r</div>
                            <div className="i-name-letter">i</div>
                            <div className="i-name-letter">s</div>
                            <div></div>
                        </div>
                        <div className="i-lastname">
                            <div className="i-name-letter">G</div>
                            <div className="i-name-letter">u</div>
                            <div className="i-name-letter">n</div>
                            <div className="i-name-letter">t</div>
                            <div className="i-name-letter">e</div>
                            <div className="i-name-letter">r</div>
                        </div>
                    </h1>
                    <div className="i-titles">
                        <div className="i-titles-wrapper">
                            <div className="i-titles-item">Software Engineer</div>
                            <div className="i-titles-item">Web Developer</div>
                            <div className="i-titles-item">Guitarist</div>
                            <div className="i-titles-item">Gamer</div>
                            <div className="i-titles-item">Mechanic</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et. Convallis aenean et tortor at risus viverra adipiscing at. Massa massa ultricies mi quis hendrerit dolor magna. Molestie at elementum eu facilisis sed odio.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={ddk} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;
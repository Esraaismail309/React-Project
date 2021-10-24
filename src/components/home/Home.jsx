import myImg from "./../../assets/imgs/WhatsApp Image 2021-06-26 at 3.28.58 PM (1).jpeg"
import "./home.css"
function Home() {
    return (<div className="vh-100 bg-light">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-5 ms-5">
                    <h4 className="text-muted">HELLO ... I am</h4>
                    <h1 className="my-3">Esraa Ismail Hussien</h1>
                    <h4 className="text-muted mb-4">Front-End Developer and I have experience
                        the following tools </h4>
                    <img src="https://th.bing.com/th/id/R.f679a97b6d643a59f638181233e4c364?rik=VqjiXwl2oh%2bZTw&pid=ImgRaw&r=0" alt="" className="" />
                    <img src="https://th.bing.com/th/id/R.75e4d6d5a0f6b8f4e4030f9b00511ca7?rik=HQXwM3U9lYDRog&pid=ImgRaw&r=0" alt="" />
                    <img src="https://i1.wp.com/www.duomimikry.de/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500" alt="" />
                    <img src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="" />
                    <img src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png" alt="" />
                    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="" />
                </div>
                <div className="col-md-5">
                    <img src={myImg} className="w-75 mt-5 rounded-circle" alt="profile image" />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Home
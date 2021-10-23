import myImg from "./../../assets/imgs/WhatsApp Image 2021-06-26 at 3.28.58 PM (1).jpeg"
function Home() {
    return (<div className="vh-100 bg-light">
       <div className="container">
           <div className="row justify-content-between align-items-center">
               <div className="col-md-4 ms-5">
                   <h4 className="text-muted">HELLO ... I am</h4>
                   <h1 className="my-4">Esraa Ismail Hussien</h1>
                   <h4 className="text-muted">Front-End Developer</h4>
               </div>
               <div className="col-md-6">
                   <img src={myImg} className="w-75 mt-5 rounded-circle" alt="profile image" />
               </div>
           </div>
       </div>
       </div>
    )
}
export default Home
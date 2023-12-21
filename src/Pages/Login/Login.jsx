import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
// import loginimg from '../../assets/image/banner/login.jpg'

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e =>{
    e.preventDefault();
    // console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    signIn(email,password)
    .then(result =>{
      console.log(result.user)
      navigate(location?.state ? location?.state : '/');
    })
    .catch(error=>{
      console.error(error)
    })
  }
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        googleSignIn().then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : '/');
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
         {/* <img src={loginimg} alt="login" /> */}
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
               
            <button  className="btn btn-outline btn-success font-bold lg:text-xl px-8 mt-4 mb-4">Login</button>
              <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success font-bold lg:text-xl px-8 mt-4 mb-4">Login With Google</button>
            <p>New User? Please <Link className=" text-red-600 font-bold" to='/register'>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

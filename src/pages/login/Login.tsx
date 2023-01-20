import './login.scss'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Chizoba Messenger</h1>
          <p>
          Welcome to Chizoba social media app! Connect with friends and family, share updates, and stay in the loop. Sign in to access your personalized feed and join the conversation today.
          </p>
          <span>Do you have an account?</span>
          <Link to='/register'>
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Pasword' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
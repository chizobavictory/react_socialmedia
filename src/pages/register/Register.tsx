import "./register.scss";
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Chizoba Messenger</h1>
          <p>
            Welcome to Chizoba social media app! We're excited to have you join our community. 
            It only takes a few seconds to sign up, Let's get started!
          </p>
          <span>Already have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

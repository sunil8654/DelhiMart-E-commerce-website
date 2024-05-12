import { GoogleOAuthProvider , GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import "./Google.css"


const Google = () => {

   

  return (
    <div className="google">
      <header className="App-header">
        <h1>SignUp to Gmail</h1>
      
          <GoogleOAuthProvider   clientId="675734654754-ovpjdu6a5i0ernadrp5nqofggnv2iaa7.apps.googleusercontent.com" className="gid">
                        <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse.credential);

                  console.log(decoded);
                }}
               
              />
            </GoogleOAuthProvider>
      
      </header>
    </div>
  );
}





export default Google;



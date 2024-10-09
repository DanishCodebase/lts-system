import { useState, useEffect } from "react"; 
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation after login
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = ({url="https://cyan-hamster-479122.hostingersite.com/"}) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To handle errors
  const navigate = useNavigate(); // To navigate after login

  
  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 1 day in milliseconds

  // Check if the token is valid
  const isTokenValid = () => {
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const now = new Date().getTime();

    if (!token || !tokenExpiration) {
      return false; // No token or expiration set
    }

    if (now > tokenExpiration) {
      // Token has expired, clear it from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      localStorage.removeItem("userRole"); // Also remove user role
      return false;
    }

    return true; // Token is still valid
  };

  // Automatically navigate if token is still valid and based on the user's role
  useEffect(() => {
    if (isTokenValid()) {
      const userRole = localStorage.getItem("userRole"); // Retrieve the stored user role

      // Automatically navigate based on the user's role
      switch (userRole) {
        case "sales":
          navigate("/sales");
          break;
        case "operations":
          navigate("/operations");
          break;
        case "admin":
          navigate("/admin");
          break;
        default:
          setError("Unauthorized role");
          break;
      }
    }
  }, []);

  async function login(e) {
    e.preventDefault();
    setError(""); // Reset any previous errors

    try {
      const res = await axios.post(
        url + "api/v1/signin",
        {
          userId: userId,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure request is JSON
          },
        }
      );

      console.log("Login Response:", res);

      const { token, redirect } = res.data;

      if (token) {
        const now = new Date().getTime();
        const expirationTime = now + ONE_DAY_IN_MS; // Expiration time for 1 day

        localStorage.setItem("token", token); // Store the token
        localStorage.setItem("tokenExpiration", expirationTime); // Store the expiration time
        localStorage.setItem("userRole", redirect); // Store the user role

        // Navigate based on the user's role immediately after login
        switch (redirect) {
          case "sales":
            navigate("/sales");
            break;
          case "operations":
            navigate("/operations");
            break;
          case "admin":
            navigate("/admin");
            break;
          default:
            setError("Unauthorized role");
            break;
        }
      } else {
        setError("Login failed, no token received.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid email or password. Please try again.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full min-h-[450px] mx-5 max-w-sm pt-0 p-8 space-y-8 bg-white rounded-lg shadow flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>
        <form onSubmit={login} className="space-y-6">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="w-full mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1"
            />
          </div>
          <Button
            type="submit"
            className="w-full text-base bg-indigo-600 hover:bg-indigo-700"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;

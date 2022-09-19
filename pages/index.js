import { axiosNodeServer } from "../config/axios";

export default function Home() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.email?.trim() || !data.password?.trim()) {
      console.log("Please enter email and password");
      return;
    }

    try {
      const response = await axiosNodeServer.post("/api/auth/login", {
        email: data.email.trim(),
        password: data.password.trim(),
      });
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const getUser = async () => {
    try {
      const response = await axiosNodeServer.get("/api/auth/me");
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="submit" value="Login" />
      </form>

      <div>
        <button onClick={getUser}>Get User</button>
      </div>
    </div>
  );
}

"use client";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  interface LoginFormInputs {
    username: string;
    password: string;
  }

  const { handleSubmit, register } = useForm<LoginFormInputs>();

  const submit = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    if (username === "user" && password === "password") {
      router.push("/dashboard");
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  const onSuccess = async (response: any) => {
    try {
      const userObject = jwtDecode(response.credential);
      console.log("Google User:", userObject);
      router.push("/dashboard");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
        {/* Left Side: Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-orange-500">
            ĐĂNG NHẬP
          </h2>
          <p className="text-center text-gray-600 mb-6">
            CHÀO MỪNG BẠN ĐẾN VỚI CỬA HÀNG <br /> ...
          </p>

          <form onSubmit={handleSubmit(submit)} className="space-y-4">
            <Input
              type="text"
              placeholder="Tên đăng nhập"
              {...register("username", { required: true })}
              required
              className="w-full p-3 border rounded-md"
            />
            <Input
              type="password"
              placeholder="Mật khẩu"
              {...register("password", { required: true })}
              required
              className="w-full p-3 border rounded-md"
            />

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md"
            >
              ĐĂNG NHẬP
            </Button>
          </form>

          <div className="flex justify-between text-sm text-gray-600 mt-4">
            <Link href="/forgot" className="hover:underline">
              Quên mật khẩu?
            </Link>
            <Link href="/register" className="hover:underline">
              Đăng ký ngay
            </Link>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={onSuccess}
              onError={() => console.error("Google Login Failed")}
            />
          </GoogleOAuthProvider>

          <div className="text-center mt-4">
            <Link href="/" className="text-gray-600 hover:underline">
              Trở về trang chủ
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}

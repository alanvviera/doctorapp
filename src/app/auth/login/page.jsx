"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import {useRouter} from 'next/navigation'
import {useState} from 'react'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  const [error, setError] = useState(null)
  
  const onSubmit = handleSubmit(async (data) => {
    //console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    //console.log(res)
    if (res.error) {
      setError("error loco" + res.error)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  });

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/4 rounded-lg shadow-sm border p-10  bg-gray-150" >
        <form onSubmit={onSubmit} className="m-10 bg-gray-150" >

          {error && (
            <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
          )}

          <h1 className="text-black-200 text-center font-bold text-4xl mb-4">Iniciar sesión</h1>

          <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
            Email:
          </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            className="p-3 rounded block mb-2 bg-white text-gray-500 w-full"
            placeholder="user@email.com"
          />

          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}

          <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
            Contraseña:
          </label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            className="p-3 rounded block mb-2 bg-white text-gray-500 w-full"
            placeholder="******"
          />

          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}

          <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
            Login
          </button>
        </form>
        </div>
    </div>
  );
}
export default LoginPage;

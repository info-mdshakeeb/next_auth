'use client'

import Form from "@/components/template/Form";
import lcStorage from "@/utils/lcStorage";

import { useEffect, useState } from "react";

const Login = () => {
  const { set, get, remove } = lcStorage()
  const [loading, setLoading] = useState(true)

  const authInfo = get("autInfo") ? get("autInfo") : null;
  const [rememberMeValue, setRememberMeValue] = useState(authInfo ? true : false);
  const [LoginInfo, setLoginInfo] = useState(authInfo ? authInfo : { email: "", password: "" });
  if (rememberMeValue) { set("autInfo", LoginInfo) } else { remove("autInfo") }

  const submitData = async (formData, form) => {
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email, password);
  }
  // checkbox
  useEffect(() => { setTimeout(() => { setLoading(false) }, 10); }, [])
  return (
    <Form action={submitData} className="space-y-4 md:space-y-6 ">
      <div>
        <label htmlFor="email"
          name="email"
          className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
        <input
          value={LoginInfo.email || ""}
          onChange={(e) => setLoginInfo({ ...LoginInfo, email: e.target.value })}
          type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
      </div>
      <div>
        <label name="password" htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input type="password" name="password" id="password" placeholder="••••••••"
          value={LoginInfo.password || ""}
          onChange={(e) => setLoginInfo({ ...LoginInfo, password: e.target.value })}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
      </div>
      <div className="flex items-center justify-between">
        <div
          onClick={() => setRememberMeValue(!rememberMeValue)}
          className="flex flex-wrap items-center gap-2 cursor-pointer text-secondary ">
          {loading ? "remember me" : <> <input type="checkbox"
            defaultChecked={rememberMeValue}
            className="bg-gray-300 checkbox checkbox-xs" />
            remember me </>}
        </div>
        <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
      </div>
      <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
      <p className="text-sm font-light text-gray-500 ">
        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline ">Sign up</a>
      </p>
    </Form>
  );
};

export default Login;
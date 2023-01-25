import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
// Icons
import { BiUser } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";

const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(11, "شماره وارد شده صحیح نیست!")
    .max(11, "شماره وارد شده صحیح نیست!")
    .required("لطفا شماره موبایل را وارد کنید"),
  fullName: Yup.string()
    .min(5, "نام وارد شده خیلی کوتاه است!")
    .max(100, "نام وارد شده طولانی است!")
    .required("لطفا نام کامل خود را وارد کنید"),
  userName: Yup.string()
    .min(5, "نام وارد شده خیلی کوتاه است!")
    .max(50, "نام وارد شده طولانی است!")
    .required("لطفا نام کامل خود را وارد کنید"),
  password: Yup.string()
    .min(8, "رمز وارد شده حداقل باید 8 رقم باشد!")
    .max(50, "رمز وارد شده طولانی است!")
    .required("لطفا رمز خود را وارد کنید"),
});

const Register = () => {
  return (
    <>
      <Formik
        initialValues={{ phoneNumber: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
          toast.success("شما با موفقیت وارد شدید");
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col items-center">
            <div className="w-full flex items-center justify-between">
              <label
                htmlFor="fullName"
                className="text-neutral-800 bg-white h-12 text-lg flex items-center justify-center px-2 rounded-r-md"
              >
                <BiUser />
              </label>
              <Field
                type="text"
                name="fullName"
                className="w-full rounded-l-md h-12 my-4 p-2 border-none outline-none placeholder:text-xs"
                placeholder="نام و نام‌خانوادگی را وارد کنید"
              />
            </div>
            <ErrorMessage
              name="fullName"
              component="p"
              className="text-red-600 text-xs"
            />

            <div className="w-full flex items-center justify-between">
              <label
                htmlFor="userName"
                className="text-neutral-800 bg-white h-12 text-lg flex items-center justify-center px-2 rounded-r-md"
              >
                <BiUser />
              </label>
              <Field
                type="text"
                name="userName"
                className="w-full rounded-l-md h-12 my-4 p-2 border-none outline-none placeholder:text-xs"
                placeholder="نام کاربری را وارد کنید"
              />
            </div>
            <ErrorMessage
              name="userName"
              component="p"
              className="text-red-600 text-xs"
            />

            <div className="w-full flex items-center justify-between">
              <label
                htmlFor="phoneNumber"
                className="text-neutral-800 bg-white h-12 text-lg flex items-center justify-center px-2 rounded-r-md"
              >
                <FaMobileAlt />
              </label>
              <Field
                type="tel"
                name="phoneNumber"
                className="w-full rounded-l-md h-12 my-4 p-2 border-none outline-none placeholder:text-xs"
                placeholder="*******۰۹۱۲"
              />
            </div>
            <ErrorMessage
              name="phoneNumber"
              component="p"
              className="text-red-600 text-xs"
            />

            <div className="w-full flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-neutral-800 bg-white h-12 text-lg flex items-center justify-center px-2 rounded-r-md"
              >
                <BsShieldLock />
              </label>
              <Field
                type="password"
                name="password"
                className="w-full rounded-l-md h-12 my-4 p-2 border-none outline-none placeholder:text-xs"
                placeholder="رمز عبور را وارد کنید"
              />
            </div>
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-600 text-xs"
            />

            <div className="w-full flex items-center justify-between">
              <label
                htmlFor="repeatPassword"
                className="text-neutral-800 bg-white h-12 text-lg flex items-center justify-center px-2 rounded-r-md"
              >
                <BsShieldLock />
              </label>
              <Field
                type="password"
                name="repeatPassword"
                className="w-full rounded-l-md h-12 my-4 p-2 border-none outline-none placeholder:text-xs"
                placeholder="رمز عبور را  مجددا وارد کنید"
              />
            </div>
            <ErrorMessage
              name="repeatPassword"
              component="p"
              className="text-red-600 text-xs"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-green-600 text-white py-2 my-4"
            >
              ثبت‌نام
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
// Icons
import { FaMobileAlt } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";

const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(11, "شماره وارد شده صحیح نیست!")
    .max(11, "شماره وارد شده صحیح نیست!")
    .required("لطفا شماره موبایل را وارد کنید"),
});

const Login = () => {
  const [sendCode, setSendCode] = useState(false);

  if (sendCode) {
    return (
      <>
        <Formik
          initialValues={{ code: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 400);
            toast.success("شما با موفقیت وارد شدید");
          }}
        >
          {({ values, isSubmitting }) => (
            <Form className="w-full flex flex-col items-center">
              <div className="w-full flex items-center justify-between">
                <label
                  htmlFor="code"
                  className="text-neutral-800 bg-white h-12 text-lg flex items-center justify-center px-2 rounded-r-md"
                >
                  <BsShieldLock />
                </label>
                <Field
                  type="number"
                  name="code"
                  className="w-full rounded-l-md h-12 my-4 p-2 border-none outline-none placeholder:text-xs"
                  placeholder="کد تایید را وارد کنید"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-green-600 text-white py-2 my-4"
              >
                ورود
              </button>
            </Form>
          )}
        </Formik>
      </>
    );
  }

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
          setSendCode(true);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex flex-col items-center">
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
                placeholder="شماره موبایل خود را وارد کنید"
              />
            </div>
            <ErrorMessage
              name="phoneNumber"
              component="p"
              className="text-red-600 text-xs"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-green-600 text-white py-2 my-4"
            >
              ارسال کد
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;

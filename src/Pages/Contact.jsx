import React from "react";
import { useLocation } from "react-router-dom";
import phoneIcon from "../assets/phone-icon.svg";
import messageIcon from "../assets/message-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import Faqs from "../Components/Ui/Faqs";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/contactUsSendEmail`;

const Contact = () => {
  const location = useLocation();

  const hideContactInfo = location.pathname === "/request-demo";
  const isRequestDemo = location.pathname === "/request-demo";

  const contactDetails = [
    {
      icon: phoneIcon,
      title: "Phone",
      info: "+1(438) 826-6497",
    },
    {
      icon: messageIcon,
      title: "Email",
      info: "info@tealclimate.com",
    },
    {
      icon: locationIcon,
      title: "Address",
      info: "16-550 Brealey Drive Peterborough, Ontario K9K 2R7, Canada",
    },
  ];

  const formFields = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name (Optional)" },
    { name: "businesEmail", type: "email", label: "Business Email" },
    { name: "companyName", label: "Company Name" },
    {
      name: "Subject",
      label: "Subject",
      isSelect: true,
      options: [
        { value: "", text: "Select a subject" },
        { value: "support", text: "Support" },
        { value: "feedback", text: "Feedback" },
        { value: "demo", text: "Demo" },
        { value: "other", text: "Other" },
      ],
    },
    { name: "message", label: "Message", isTextarea: true },
  ];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string(), // Optional field
    businesEmail: Yup.string()
      .email("Invalid email format")
      .required("Business Email is required"),
    companyName: Yup.string().required("Company Name is required"),
    Subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    let loadingToast;
    try {
      // Show a loading toast
      loadingToast = toast.loading("Submitting your request...");

      // Make the API call
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit the form");
      }

      toast.update(loadingToast, {
        render: "Request submitted. Thank you!",
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });

      resetForm(); // Reset form after successful submission
    } catch (error) {
      toast.update(loadingToast, {
        render: error.message || "Something went wrong. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 1500,
      });
    }
  };

  return (
    <>
      <section className="mx-auto mt-10 w-[90%] max-w-[500px] text-center md:max-w-[800px]">
        <div className="font-bold">
          <h1 className="head-1">
            {isRequestDemo ? "Request a Demo" : "Contact Us"}
          </h1>
          <p className="my-6 head-3">
            {isRequestDemo
              ? "See firsthand how our platform helps you measure, manage, and reduce carbon emissions effectively."
              : "Get in touch with us to learn more about how we can help you meet your carbon accounting needs"}
          </p>
        </div>
      </section>

      <section className="mx-auto my-16 flex w-[90%] max-w-[1200px] gap-16 max-lg:flex-col">
        {!hideContactInfo && (
          <div className="flex min-h-[650px] flex-1 flex-col justify-center gap-10 rounded-xl border-t-[17px] border-[#197EC6] dark:border-tc-dark-blue px-[3vmax] shadow-xl dark:bg-zinc-700">
            <div className="font-semibold">
              <h1 className="head-3">Contact Information</h1>
              <p className="mt-2 max-sm:text-sm">
                Connect with us for any support or inquiries.
              </p>
            </div>
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-10">
                <img
                  src={detail.icon}
                  className="w-7 filter dark:invert dark:brightness-0 dark:contrast-100"
                  alt={detail.title}
                />
                <div className="max-sm:text-sm">
                  <h1>{detail.title}</h1>
                  <h1 className="max-w-xs">{detail.info}</h1>
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          className={`flex min-h-[650px] flex-1 flex-col justify-center gap-10 rounded-xl px-[3vmax] shadow-xl border-2 ${
            isRequestDemo && "max-w-2xl mx-auto"
          }`}
        >
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              businesEmail: "",
              companyName: "",
              Subject: isRequestDemo ? "demo" : "",
              message: "",
            }}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-3 text-sm py-5">
                <h1 className="text-xl font-bold">Get in touch</h1>
                {formFields.map((field) => (
                  <div key={field.name} className="flex flex-col gap-1">
                    <label htmlFor={field.name} className="font-semibold">
                      {field.label}
                    </label>
                    {field.isTextarea ? (
                      <Field
                        as="textarea"
                        id={field.name}
                        name={field.name}
                        rows={4}
                        className={`resize-none rounded-md border p-2 shadow-lg dark:bg-[#1e1e1e] ${
                          errors[field.name] && touched[field.name]
                            ? "border-red-500"
                            : "border-zinc-400"
                        }`}
                      />
                    ) : field.isSelect ? (
                      <Field
                        as="select"
                        id={field.name}
                        name={field.name}
                        className={`rounded-md border p-2 shadow-lg bg-white overflow-hidden dark:bg-[#1e1e1e] ${
                          errors[field.name] && touched[field.name]
                            ? "border-red-500"
                            : "border-zinc-100"
                        }`}
                      >
                        {field.options.map((option, idx) => (
                          <option key={idx} value={option.value}>
                            {option.text}
                          </option>
                        ))}
                      </Field>
                    ) : (
                      <Field
                        type={field.type || "text"}
                        id={field.name}
                        name={field.name}
                        className={`rounded-md border p-2 shadow-lg dark:bg-[#1e1e1e] ${
                          errors[field.name] && touched[field.name]
                            ? "border-red-500"
                            : "border-zinc-400"
                        }`}
                      />
                    )}
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-500 text-sm font-semibold italic mt-1"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="btn-primary bg-tc-blue dark:bg-tc-dark-blue text-white hover:bg-black mt-4"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      <Faqs />

      <ToastContainer
        theme="colored"
        hideProgressBar={true}
        transition={Slide}
        autoClose={1500}
        pauseOnFocusLoss={false}
        style={{
          "--toastify-font-family": "Poppins",
          "--toastify-color-success": "#00CC9C",
          "--toastify-color-warning": "#e74c3c",
          "--toastify-color-loading": "#e74c3c",
        }}
      />
    </>
  );
};

export default Contact;

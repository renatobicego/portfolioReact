
import { Field, Form, Formik } from "formik";
import Swal from "sweetalert2";
import { object, string } from "yup";
import sendEmail from "../../utils/sendMail";

interface MyFormValues {
  name: string;
  email: string;
  message: string;
}
const contactSchema = object({
  name: string().required().min(3),
  email: string().email().required(),
  message: string().required().min(3),
});
const Contact = () => {
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    message: "",
  };
  return (
    <section className="sectionContainer my-32 gap-6 ">
      <h4 className="title text-right">
        Let's Work <br className="hidden md:block" /> Together
      </h4>
      <Formik
        initialValues={initialValues}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values, actions) => {
          try {
            await sendEmail(values)
            Swal.fire({
              text: "Contact request sent!",
              icon: "success",
              background: "#222222",
              customClass: {
                popup: "text-white",
              },
              showConfirmButton: false,
              timer: 2000
            });

            actions.resetForm();
          } catch (error) {
            Swal.fire({
              text: "Request error. Please contact me via email: renato.bicego@gmail.com",
              icon: "error",
              background: "#222222",
              customClass: {
                popup: "text-white",
                confirmButton: "bg-white text-[#222222]"
              },
            });
          }
          actions.setSubmitting(false);
        }}
        validationSchema={contactSchema}
      >
        {({ errors, isSubmitting }) => (
          <Form className="flex flex-col gap-3 md:w-2/3 lg:w-[35%] items-end">
            <div className="flex w-full gap-3">
              <Field
                id="name"
                name="name"
                placeholder="Name"
                className={`input w-[48%] ${errors.name && "border-red-600 border"}`}
              />
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className={`input w-[48%] ${errors.email && "border-red-600 border"} `}
              />
            </div>
            <Field
              className={`input w-full ${
                errors.message && "border-red-600 border"
              }`}
              id="message"
              name="message"
              placeholder="Message"
              as="textarea"
            />
            <button
              aria-disabled={isSubmitting}
              type="submit"
              className="py-4 px-8 text-white bg-[#222222] rounded-[30px] flex items-center gap-2"
            >
              <svg
                className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${
                  isSubmitting ? "" : "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-55"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#E9E9E9"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="#1F1F1F"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div id="Contact" className="absolute -top-20"></div>
    </section>
  );
};

export default Contact;

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup'
import { registerAction } from "../../redux/slices/users/usersSlices";
import {useNavigate} from "react-router-dom"

const Register = () => { 
  const dispatch = useDispatch()

  const formSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required").min(8,'Password must be at least 8 characters'),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required")
})

const user = useSelector(state => state?.user)
   const {clientError, serverError, userLoading, userAuth } = user
   console.log(user);
   //navigate
   const navigate = useNavigate()

const formik = useFormik({
  initialValues: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  },

  onSubmit: async (values) => {
    try {
      // Dispatch login action
      const registerSuccess = await dispatch(registerAction(values));

      if (registerSuccess) {
        // Construct profile page path (adjust as needed)
        const profilePagePath = `/login`; 

        // Redirect to profile page
        navigate(profilePagePath);
      }
    } catch (error) {
      // Handle login errors
      console.error(error);
      // Display error messages to the user
    }  },
  validationSchema: formSchema,
});
  return (
    <div className='flex h-screen'>
         <div className="w-1/2 bg-gray-900 h-3/5 relative top-20 shadow-gray-950 rounded left-20">
        {/* Gray color (2/3 of the screen) */}
        <h1 className="text-5xl font-bold ml-16 text-white mt-28 leading-snug">Keep Track of your Income and Expenses flow</h1>
      </div>
      <div className="w-1/2">
        {/* Amber color (1/3 of the screen) */}
        <div className="p-8 my-20 rounded border-2 h-auto w-96 mx-auto">
          {/* Your login form goes here */}
          <h2 className="text-center text-xl text-gray-500">New User</h2>
          <h1 className="text-3xl font-bold mb-4 text-center">Register</h1>
          <form onSubmit={formik.handleSubmit}>
            <input
              className="shadow appearance-none mx-10 my-3 w-64 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="first name"
              value={formik.values.firstname}
              onChange={formik.handleChange("firstname")}
              onBlur={formik.handleBlur("firstname")}
            />
            {formik.touched.firstname && formik.errors.firstname? (
                    <div className="text-red-500 font-bold ml-4">
                        *{formik.errors.firstname}
                    </div>
                ) : null}
            <br />
            <input
              className="shadow appearance-none border rounded mx-10 w-64 my-2  py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last name"
              value={formik.values.lastname}
              onChange={formik.handleChange("lastname")}
              onBlur={formik.handleBlur("lastname")}
            />
            {formik.touched.lastname && formik.errors.lastname? (
                    <div className="text-red-500 font-bold ml-4">
                        *{formik.errors.lastname}
                    </div>
                ) : null}
            <br />
            <input
              className="shadow appearance-none border rounded mx-10 w-64 my-2  py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="email@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            {formik.touched.email && formik.errors.email? (
                    <div className="text-red-500 font-bold ml-4">
                        *{formik.errors.email}
                    </div>
                ) : null}
            <br />
            <input
              className="shadow appearance-none border rounded mx-10 w-64 my-2  py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
            />
            {formik.touched.password && formik.errors.password? (
                    <div className="text-red-500 font-bold ml-4">
                        *{formik.errors.password}
                    </div>
                ) : null}
            <button
              className="bg-blue-500 ml-32 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
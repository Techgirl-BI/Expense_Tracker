import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import * as Yup from 'yup'
import { loginAction } from "../../redux/slices/users/usersSlices";
import DisabledButton from "../../component/DisabledButton";
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().min(8,'Password must be at least 8 characters').required('Password is required')})
function Login() {
  const dispatch = useDispatch()
   //get data from store
   const user = useSelector(state => state?.user)
   const {clientError, serverError, userLoading, userAuth } = user
   console.log(user);
   //navigate
   const navigate = useNavigate()
   //use formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        // Dispatch login action
        const loginSuccess = await dispatch(loginAction(values));
  
        if (loginSuccess) {
          // Construct profile page path (adjust as needed)
          const profilePagePath = `/profile/`; 
  
          // Redirect to profile page
          navigate(profilePagePath);
        }
      } catch (error) {
        // Handle login errors
        console.error(error);
        // Display error messages to the user
      }
    },
    validationSchema: formSchema,
  });
  //refirect
  
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-900">
        {/* Gray color (2/3 of the screen) */}
        <h1 className="text-5xl font-bold ml-16 text-white mt-48 leading-snug">
          Keep Track of <br /> what you are spending
        </h1>
      </div>
      <div className="w-1/2 bg-amber-500 border">
        {/* Amber color (1/3 of the screen) */}
        <div className="p-8 my-20 rounded h-80 mx-auto  w-full">
          {/* Your login form goes here */}
          <h1 className="text-3xl font-bold text-center">
            Login to your account
          </h1>
          {clientError || serverError ? <div className="border bg-red-300 pl-20 py-1 border-red-300  mt-20 rounded">{clientError}</div> : null}
          <form onSubmit={formik.handleSubmit} >
            <input
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              className="mt-2 border rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="admin@gmail.com"
            />{" "}
            <br />
                {formik.touched.email && formik.errors.email? (
                    <div className="text-red-700 font-bold ml-4">
                        *{formik.errors.email}
                    </div>
                ) : null}
            <input
              className="mt-4 border rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
  
            />{" "}
                {formik.touched.password && formik.errors.password?(
                    <div className="text-red-700 font-bold ml-4">
                        *{formik.errors.password}
                    </div>
                ): null}
          
            <br />
            <div>
              {userLoading ? <DisabledButton/> : <button
              className="bg-blue-500 ml-80 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const validationSchema = Yup.object({
  subject: Yup.string().required('Subject is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required'),
  image1: Yup.mixed().test(
    'fileType',
    'Only JPG/PNG files allowed',
    (value) => !value || ['image/jpeg', 'image/png'].includes(value.type)
  ),
  image2: Yup.mixed().test(
    'fileType',
    'Only JPG/PNG files allowed',
    (value) => !value || ['image/jpeg', 'image/png'].includes(value.type)
  ),
});

const ComplaintForm = () => {
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <Formik
        initialValues={{
          subject: '',
          description: '',
          location: '',
          image1: null,
          image2: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-5">
            {/* Text Fields */}
            {['subject', 'description', 'location'].map((field) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                <Field
                  name={field}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name={field} component="div" className="text-sm text-red-500 mt-1" />
              </motion.div>
            ))}

            {/* Image Uploads */}
            {[1, 2].map((num) => (
              <motion.div
                key={`image${num}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image {num} <span className="text-xs text-gray-400">(JPG/PNG)</span>
                </label>
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  className="mt-1 block w-full text-sm text-gray-600"
                  onChange={(event) => {
                    setFieldValue(`image${num}`, event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name={`image${num}`} component="div" className="text-sm text-red-500 mt-1" />
              </motion.div>
            ))}

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Submit
            </motion.button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ComplaintForm;

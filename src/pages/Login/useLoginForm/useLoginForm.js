// useLoginForm.js
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useLoginForm = (submitFunction) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().email('Địa chỉ email không hợp lệ').required('Vui lòng nhập email'),
            password: Yup.string().required('Vui lòng nhập mật khẩu'),
        }),
        onSubmit: async (values) => {
            try {
                await submitFunction(values);
            } catch (error) {
                throw new Error('Lỗi đăng nhập');
            }
        },
    });

    return { formik };
};

export default useLoginForm;

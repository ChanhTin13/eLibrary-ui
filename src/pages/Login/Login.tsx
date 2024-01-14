import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import authService from '~/services/authService';
import styles from './Login.module.scss';
import useLoginForm from './useLoginForm';

const cx = classNames.bind(styles);

interface LoginFormValues {
    username: string;
    password: string;
}

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { formik } = useLoginForm(async (values: LoginFormValues) => {
        setLoading(true);
        try {
            await authService.login(values.username, values.password);
            toast.success('Đăng nhập thành công', { position: 'top-right' });
            navigate('/');
        } catch (error) {
            toast.error('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập!', {
                position: 'top-right',
            });
        } finally {
            setLoading(false);
        }
    });

    return (
        <div className={cx('login-container')}>
            <form className={cx('login-form')} onSubmit={formik.handleSubmit}>
                <label className={cx('form-label')}>
                    Email:
                    <input
                        className={cx('form-input')}
                        type="text"
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div className={cx('error-message')}>{formik.errors.username}</div>
                    ) : null}
                </label>
                <br />
                <label className={cx('form-label')}>
                    Password:
                    <input
                        className={cx('form-input')}
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className={cx('error-message')}>{formik.errors.password}</div>
                    ) : null}
                </label>
                <br />
                <button className={cx('submit-button')} type="submit" disabled={loading}>
                    {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
                </button>
            </form>
        </div>
    );
};

export default Login;

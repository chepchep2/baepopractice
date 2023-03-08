import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {register} from "../../../api/Auth";
import styles from "./register.module.scss"

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
    });

    const onChange = (e) => {
        const {name, value} = e.currentTarget;
        setForm({...form, [name]: value});
    };

    const onSubmit = async (e) => {
        // 새로고침 방지
        e.preventDefault();
        console.log({form});

        // 이메일이 맞는 형식인지 검사하는 정규식
        const emailReg =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        // 이메일 형식이 맞지않으면 경고창 띄우고 함수 종료
        if (!emailReg.test(form.email)) {
            alert("이메일 형식이 올바르지 않음ㅋ");
            return;
        }

        // 실제로 회원가입 API를 호출
        const response = await register({
            email: form.email,
            name: form.name,
            password: form.password,
        });

        // 회원가입 성공
        if (response.status === 200) {
            const data = response.data;

            /*
            data => {
                accessToken: "~~~",
                refreshToken: "~~~",
            }
            */

        // LocalStorage 에 accessToken 과 refreshToken 저장
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        // 메인 페이지로 이동
        navigate("/");
        } else {
            // 회원가입 실패시
            alert("회원가입에 실패함")
        }
    };

    return (
        <div className={styles.wrapper}>
            <section>
                <h1>회원가입</h1>
                <form id="loginForm" className={styles.loginForm} onSubmit={onSubmit}>
                        <label className={styles.inputWrapper}>
                            <p>이름</p>
                            <input
                                placeholder="이름 입력"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                            />
                        </label>
                        <label className={styles.inputWrapper}>
                            <p>이메일</p>
                            <input
                                placeholder="이메일 입력"
                                name="email"
                                autoComplete="off"
                                value={form.email}
                                onChange={onChange}
                            />
                        </label>
                        <label className={styles.inputWrapper}>
                            <p>비밀번호</p>
                            <input
                                type="password"
                                placeholder="비밀번호 입력"
                                name="password"
                                autoComplete="off"
                                value={form.password}
                                onChange={onChange}
                            />
                        </label>
                        <button
                            className={styles.submitButton}
                            type="submit"
                            form="loginForm"
                        >
                            가입
                        </button>
                    </form>
            </section>
        </div>
    )
}

export default Register;
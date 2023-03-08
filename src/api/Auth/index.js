import apiClient from "../apiClient";

export const login = (body) => {
    return apiClient.post("/auth/login", body);
};

export const register = (body) => {
    return apiClient.post("/auth/register", body);
};

export const kakaoLogin = () => {
    return apiClient.get("/auth/kakao");
};

export const kakaoRegister = (body) => {
    return apiClient.post("/auth/kakao/user", body);
};


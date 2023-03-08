import React, { useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import qs from "query-string";

const Social = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const result = qs.parse(location.search);

        if (result.status === "200") {
            const {accessToken, refreshToken} = result;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            navigate("/");
        } else {
            navigate(`/social/register?token=${result.kakaoAccessToken}`);
        }
    }, [location]);

    return (
        <div></div>
    )
}

export default Social;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthNaverCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const { naver } = window;

    const naverLogin = new naver.LoginWithNaverId({
      clientId: "1Du_Wwmp1XgWmNpFrAkm", // 발급받은 Client ID
    });

    naverLogin.init();
    naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log("로그인 성공:", naverLogin.user);
        // 로그인 성공 후 처리
        navigate("/home");
      } else {
        console.log("로그인 실패");
        navigate("/");
      }
    });
  }, [navigate]);

  return <div>로그인 처리 중...</div>;
}

export default AuthNaverCallback;

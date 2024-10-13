import { useEffect } from "react";

function AuthNaverLogin() {
  useEffect(() => {
    const { naver } = window;

    const naverLogin = new naver.LoginWithNaverId({
      clientId: "1Du_Wwmp1XgWmNpFrAkm", // 발급받은 Client ID
      callbackUrl: "http://localhost:5173/naver-callback", // 콜백 URL
      isPopup: false, // 팝업 방식으로 할지 여부
      loginButton: { color: "green", type: 3, height: 50 }, // 로그인 버튼 커스터마이징
    });

    // 네이버 로그인 초기화
    naverLogin.init();

    // 네이버 로그인 상태 처리
    naverLogin.getLoginStatus((status) => {
      if (status) {
        const { email, nickname } = naverLogin.user;
        console.log("email:", email);
        console.log("nickname:", nickname);
      } else {
        console.log("로그인 실패");
      }
    });
  }, []);

  return <div id="naverIdLogin"></div>;
}

export default AuthNaverLogin;

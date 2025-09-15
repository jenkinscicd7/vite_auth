import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const hash = searchParams.get("hash");
  const expires = searchParams.get("expires");
  const signature = searchParams.get("signature");

  useEffect(() => {  
    fetch(`http://127.0.0.1:8000/api/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        if (data.status) {
          navigate("/login");
        }
      });
  }, [id, hash, expires, signature, navigate]);

  return <p>Verifying your email...</p>;
}

export default VerifyEmail;

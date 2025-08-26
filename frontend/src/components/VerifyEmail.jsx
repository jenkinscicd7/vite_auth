import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VerifyEmail() {
  const { id, hash } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/email/verify/${id}/${hash}`, {
      method: "GET",
      credentials: "include", 
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        navigate("/login"); 
      });
  }, [id, hash]);

  return <p>Verifying your email...</p>;
}

export default VerifyEmail;

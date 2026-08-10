import { useState } from "react";
import Account from "./components/Account";
import Profile from "./components/Profile";
import Review from "./components/Review";
import Typography from "@mui/material/Typography";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    education: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((previous) => {
      return { ...previous, [name]: value };
    });
  };

  const goNext = () => {
    setStep(step + 1);
  };

  const goPrevious = () => {
    setStep(step - 1);
  };

  const handleConfirm = () => {
    console.log("Final data:", formData);
    setStep(4);
  };

  return (
    <div className="app-wrapper">
      <div className="form-card">
        {step === 1 && (
          <Account formData={formData} handleChange={handleChange} goNext={goNext} />
        )}
        {step === 2 && (
          <Profile
            formData={formData}
            handleChange={handleChange}
            goPrevious={goPrevious}
            goNext={goNext}
          />
        )}
        {step === 3 && (
          <Review formData={formData} goPrevious={goPrevious} handleConfirm={handleConfirm} />
        )}
        {step === 4 && (
          <Typography variant="h3" className="done-text">
            You are done!
          </Typography>
        )}
      </div>
    </div>
  );
}
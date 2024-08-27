import React, { useState } from "react";

const InputBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleBlur = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };
  return (
    <div className="relative">
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Updates in your inbox..."
        onChange={handleChange}
        onBlur={handleBlur}
        className="lg:px-8 px-6 lg:py-4 py-3 bg-white outline-none text-[14px] rounded-full placeholder:text-greyBlue placeholder:font-normal w-[230px]"
      />
      {error && (
        <p className="absolute bottom-[-30px] z-10 left-0 text-red-500 text-[14px] w-[300px]">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputBox;

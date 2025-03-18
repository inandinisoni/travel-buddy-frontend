import React from "react";

function ActionButton({ icon, text, onClick, variant = "default" }) {
  const baseClasses =
    "flex gap-2 justify-center items-center p-3 text-sm font-medium rounded-lg cursor-pointer";

  const variantClasses = {
    default: "text-black bg-white border border-solid",
    primary: "text-white bg-blue-600 border-[none]",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={buttonClasses} onClick={onClick} type="button">
      <i className={`ti ${icon}`} />
      <span>{text}</span>
    </button>
  );
}

export default ActionButton;

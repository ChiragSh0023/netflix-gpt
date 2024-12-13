import React from "react";
import pencil from "../assets/Images/pencil.png";
import transfer from "../assets/Images/transfer.png";
import user from "../assets/Images/user.png";
import help from "../assets/Images/help.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div className="p-5 flex flex-col gap-6">
      <div className="flex items-center gap-3 hover:underline">
        <img src={pencil} alt="pencil-icon" className="h-[18px]" />
        <div>Manage Profiles</div>
      </div>

      <div className="flex items-center gap-3 hover:underline">
        <img src={transfer} alt="pencil-icon" className="h-[18px]" />
        <div>Transfer Profile</div>
      </div>

      <div className="flex items-center gap-3 hover:underline">
        <img src={user} alt="pencil-icon" className="h-[18px]" />
        <div>Account</div>
      </div>

      <div className="flex items-center gap-3 hover:underline">
        <img src={help} alt="pencil-icon" className="h-[18px]" />
        <div>Help Center</div>
      </div>

      <div className="border-t border-solid border-gray-200"></div>

      <div className="text-center hover:underline" onClick={handleSignOut}>
        Sign Out of Netflix
      </div>
    </div>
  );
};

export default DropdownMenu;

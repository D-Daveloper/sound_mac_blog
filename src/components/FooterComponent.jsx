import { Copyright} from "lucide-react";
import React from "react";

const FooterComponent = () => {
  return (
  <footer className="grad">
    <div className="p-6 text-white flex justify-between flex-wrap gap-5">
      <h3 className="flex font-semibold gap-2">SoundMac<Copyright /> {new Date().getFullYear()}</h3>
      <div className="flex gap-2 capitalize">
        <p>terms & conditions</p>
        <p>policy</p>
      </div>
      <div className="flex gap-3">
        <a href=""><i class="fa-brands fa-instagram"></i></a>     
        <a href=""><i class="fa-brands fa-x-twitter"></i></a>     
        <a href=""><i class="fa-brands fa-instagram"></i></a>     
      </div>
    </div>
  </footer>);
};

export default FooterComponent;

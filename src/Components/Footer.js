import { INSTA_IMG_URL, FB_IMG_URL, YOUTUBE_IMG_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div>
      <div className="flex bg-black justify-center">
        <div className="m-4 p-4 flex flex-col gap-5 font-metropolis text-[#808080] text-sm">
          <div className="flex gap-4">
            <div>
              <img src={INSTA_IMG_URL} className="w-5 cursor-pointer" />
            </div>
            <div>
              <img src={FB_IMG_URL} className="w-5 cursor-pointer" />
            </div>
            <div>
              <img src={YOUTUBE_IMG_URL} className="w-5 cursor-pointer" />
            </div>
          </div>
          <div className="flex gap-12">
            <div>
              <ul className="flex flex-col gap-3">
                <li className="hover:underline cursor-pointer">
                  Audio Description
                </li>
                <li className="hover:underline cursor-pointer">
                  Investor Relations
                </li>
                <li className="hover:underline cursor-pointer">
                  Legal Notices
                </li>
                <li className="hover:underline cursor-pointer">Ad Choices</li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-3">
                <li className="hover:underline cursor-pointer">Help</li>
                <li className="hover:underline cursor-pointer">Jobs</li>
                <li className="hover:underline cursor-pointer">
                  Cookie Preferences
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-3">
                <li className="hover:underline cursor-pointer">Gift Cards</li>
                <li className="hover:underline cursor-pointer">Terms of Use</li>
                <li className="hover:underline cursor-pointer">
                  Corporate Information
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-3">
                <li className="hover:underline cursor-pointer">Media Center</li>
                <li className="hover:underline cursor-pointer">Privacy</li>
                <li className="hover:underline cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="">© 1997-2024 Netflix, Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

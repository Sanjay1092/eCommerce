import twitter from "../../assets/svg/twitter.svg";
import facebook from "../../assets/svg/fb.svg";
import instagram from "../../assets/svg/instagram.svg";
import visa from "../../assets/svg/visa.svg";
import master from "../../assets/svg/master.svg";
import applePay from "../../assets/svg/applepay.svg";
import gPay from "../../assets/svg/gpay.svg";
import {
  Text_Company,
  Text_Faq,
  Text_Help,
  Text_Resources,
} from "../../constants";
import { cn } from "../../lib/utils";
import Subscribe from "./Subscribe";

function Footer() {
  return (
    <>
      {/* <Subscribe /> */}
      <div className="w-full bg-[#f0f0f0] absolute bottom-0 ">
        <div className="pt-0 px-14 flex justify-between sm:flex-col">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-black font-primary text-2xl">SHOP.CO</h2>
            <p className="font-secondary font-light text-[16px] text-[#606060]">
              We have clothes that suits your style and <br />
              which you’re proud to wear. From
              <br /> women to men.
            </p>
            <div className="flex gap-x-3">
              <img src={twitter} alt="twitter" loading="lazy" />
              <img src={facebook} alt="facebook" loading="lazy" />
              <img src={instagram} alt="instagram" loading="lazy" />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 lg:w-full sm:grid-cols-2 sm:w-1/2">
            <div>
              {Text_Company.map((item, i) => {
                return (
                  <p
                    key={i}
                    className={cn(
                      item === "COMPANY" ? headingStyle : "text-[#606060] pb-1"
                    )}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div>
              {Text_Help.map((item, i) => {
                return (
                  <p
                    key={i}
                    className={cn(
                      item === "HELP" ? headingStyle : "text-[#606060] pb-1"
                    )}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div>
              {Text_Faq.map((item, i) => {
                return (
                  <p
                    key={i}
                    className={cn(
                      item === "FAQ" ? headingStyle : "text-[#606060] pb-1"
                    )}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div>
              {Text_Resources.map((item, i) => {
                return (
                  <p
                    key={i}
                    className={cn(
                      item === "RESOURCES"
                        ? headingStyle
                        : "text-[#606060] pb-1"
                    )}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border border-[#606060] mt-4 mx-14"></div>
        <div className="flex sm:flex-col md:flex-row sm:items-center  md:justify-between mx-14 mt-5 pb-10">
          <div>
            <p className="text-xs text-[#606060]">
              Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
            </p>
          </div>
          <div className="flex">
            <img src={visa} alt="cards" loading="lazy" />
            <img src={master} alt="cards" loading="lazy" />
            <img src={applePay} alt="cards" loading="lazy" />
            <img src={gPay} alt="cards" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
}

const headingStyle = "text-black pb-2 font-medium";
export default Footer;

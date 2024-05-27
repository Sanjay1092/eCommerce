import twitter from "../../assets/svg/twitter.svg";
import facebook from "../../assets/svg/fb.svg";
import instagram from "../../assets/svg/instagram.svg";
import visa from "../../assets/svg/visa.svg";
import master from "../../assets/svg/master.svg";
import applePay from "../../assets/svg/applepay.svg";
import gPay from "../../assets/svg/gpay.svg";
import paypal from "../../assets/svg/paypal.svg";
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
      <Subscribe />
      <div className="bg-[#f0f0f0] pt-[75px]">
        <div className="flex md:flex-row md:justify-between md:gap-x-14 xs:flex-col mx-12 py-6 ">
          {/* section 1 */}
          <div className="flex flex-col gap-y-4">
            <h2 className="font-black font-primary text-2xl">SHOP.CO</h2>
            <p className="text-left md:w-[240px] xs:w-[320px] font-secondary font-light text-[16px] text-[#606060]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.{" "}
            </p>
            <div className="flex gap-x-3">
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
          {/* section 2 */}
          <div className="grid md:grid-cols-4 md:gap-x-14 xs:grid-cols-2 xs:gap-y-6 xs:mt-4">
            <div>
              {Text_Company.map((item, i) => {
                return (
                  <p
                    key={i}
                    className={cn(
                      item === "COMPANY" ? headingStyle : "text-[#606060] pb-2"
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
                      item === "HELP" ? headingStyle : "text-[#606060] pb-2"
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
                      item === "FAQ" ? headingStyle : "text-[#606060] pb-2"
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
                        : "text-[#606060] pb-2"
                    )}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border border-[#DBDBDB] mx-12"></div>
        <div className="flex md:flex-row md:justify-between xs:flex-col xs:items-center  mx-12 mt-4">
          <p className="text-[#709484] text-xs">{`Shop.co © 2000-${new Date().getFullYear()}, All Rights Reserved`}</p>
          <div className="flex gap-x-2">
            <img src={visa} alt="visa" />
            <img src={master} alt="master" />
            <img src={paypal} alt="paypal" />
            <img src={applePay} alt="apple" />
            <img src={gPay} alt="gpay" />
          </div>
        </div>
      </div>
    </>
  );
}

const headingStyle = "text-black pb-2 font-medium";
export default Footer;

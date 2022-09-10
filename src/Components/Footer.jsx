import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark px-10 pt-10">
      <div className="flex flex-col lg:flex-row  gap-4 lg:gap-0">
        <div className="flex items-center w-full lg:w-2/4 justify-center ">
          <Link to="/">
            <span>
              <svg
                width="50"
                height="50"
                viewBox="0 0 87 68"
                className="fill-light"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.80469 9.99219C2.63802 10.0182 3.36719 10.0312 3.99219 10.0312C4.61719 10.0052 5.125 9.99219 5.51562 9.99219H6.64844C6.9349 9.96615 7.28646 9.95312 7.70312 9.95312C8.06771 9.95312 8.51042 9.95312 9.03125 9.95312C9.55208 9.95312 10.151 9.96615 10.8281 9.99219C11.0365 10.7214 11.2708 11.4375 11.5312 12.1406C11.8177 12.8177 12.0651 13.4297 12.2734 13.9766C12.5339 14.6276 12.7943 15.2396 13.0547 15.8125C13.3151 16.3854 13.6276 17.0755 13.9922 17.8828C14.3047 18.5599 14.6823 19.3932 15.125 20.3828C15.5677 21.3464 16.0885 22.4531 16.6875 23.7031C16.974 22.8958 17.2344 22.1536 17.4688 21.4766C17.7292 20.7995 17.9505 20.2135 18.1328 19.7188C18.3411 19.1458 18.5104 18.625 18.6406 18.1562C18.7708 17.6875 18.9141 17.1146 19.0703 16.4375C19.2005 15.8646 19.3438 15.1745 19.5 14.3672C19.6823 13.5599 19.8646 12.6224 20.0469 11.5547C20.8021 11.5547 21.4792 11.5547 22.0781 11.5547C22.6771 11.5547 23.1979 11.5417 23.6406 11.5156C24.1354 11.5156 24.5781 11.5026 24.9688 11.4766C25.3854 11.4766 25.9453 11.4505 26.6484 11.3984C27.2474 11.3464 28.0417 11.3073 29.0312 11.2812C30.0469 11.2292 31.2969 11.1641 32.7812 11.0859C32.2344 11.4766 31.7917 11.8672 31.4531 12.2578C31.1406 12.6224 30.8932 12.9479 30.7109 13.2344C30.5026 13.5729 30.3724 13.8984 30.3203 14.2109C30.2682 14.4714 30.2161 15.0703 30.1641 16.0078C30.138 16.9453 30.099 18.0651 30.0469 19.3672C30.0208 20.6432 29.9948 22.0104 29.9688 23.4688C29.9688 24.9271 29.9818 26.3073 30.0078 27.6094C30.0339 28.9115 30.0729 30.0443 30.125 31.0078C30.2031 31.9453 30.3073 32.5443 30.4375 32.8047C30.6198 33.1172 30.8672 33.4818 31.1797 33.8984C31.4661 34.263 31.8307 34.6797 32.2734 35.1484C32.7422 35.6172 33.3542 36.138 34.1094 36.7109C32.9115 36.763 31.9089 36.8021 31.1016 36.8281C30.3203 36.8542 29.6693 36.8802 29.1484 36.9062C28.5495 36.9323 28.0677 36.9453 27.7031 36.9453C27.3125 36.9453 26.7786 36.9583 26.1016 36.9844C25.5026 37.0104 24.7083 37.0495 23.7188 37.1016C22.7292 37.1276 21.4531 37.1797 19.8906 37.2578C20.2552 36.8411 20.5938 36.4245 20.9062 36.0078C21.2188 35.5911 21.4792 35.2135 21.6875 34.875C21.9479 34.4844 22.1693 34.1068 22.3516 33.7422C22.5339 33.2474 22.6771 32.349 22.7812 31.0469C22.8854 29.9271 22.9635 28.3255 23.0156 26.2422C23.0677 24.1328 23.0677 21.3073 23.0156 17.7656C22.5208 18.5729 22.0781 19.3802 21.6875 20.1875C21.3229 20.9688 20.9974 21.6849 20.7109 22.3359C20.3984 23.0911 20.112 23.8203 19.8516 24.5234C19.5911 25.2526 19.3177 26.0599 19.0312 26.9453C18.7708 27.7005 18.4583 28.599 18.0938 29.6406C17.7552 30.6823 17.3646 31.8281 16.9219 33.0781L15.4375 33.1562C15.2292 32.1146 15.0208 31.1771 14.8125 30.3438C14.6042 29.4844 14.3958 28.7552 14.1875 28.1562C13.9531 27.4531 13.7188 26.8281 13.4844 26.2812C13.224 25.7344 12.9375 25.1224 12.625 24.4453C12.3385 23.8724 11.987 23.1953 11.5703 22.4141C11.1797 21.6328 10.724 20.7604 10.2031 19.7969C9.94271 22.4531 9.78646 24.6146 9.73438 26.2812C9.68229 27.9219 9.68229 29.1979 9.73438 30.1094C9.78646 31.2031 9.86458 31.9974 9.96875 32.4922C10.125 32.9349 10.3724 33.4297 10.7109 33.9766C10.9974 34.4453 11.388 35.0052 11.8828 35.6562C12.4036 36.2812 13.0677 36.9844 13.875 37.7656C13.3021 37.7656 12.7031 37.7656 12.0781 37.7656C11.4531 37.7656 10.8802 37.7786 10.3594 37.8047C9.73438 37.8307 9.1224 37.8438 8.52344 37.8438C7.89844 37.8698 7.16927 37.9089 6.33594 37.9609C5.60677 38.013 4.73438 38.0651 3.71875 38.1172C2.70312 38.1693 1.53125 38.2604 0.203125 38.3906C0.776042 38.026 1.24479 37.6745 1.60938 37.3359C1.97396 36.9714 2.26042 36.6458 2.46875 36.3594C2.72917 36.0208 2.92448 35.6823 3.05469 35.3438C3.13281 35.1354 3.19792 34.6797 3.25 33.9766C3.32812 33.2734 3.39323 32.4141 3.44531 31.3984C3.52344 30.3828 3.57552 29.25 3.60156 28C3.65365 26.75 3.69271 25.487 3.71875 24.2109C3.77083 22.9089 3.8099 21.6458 3.83594 20.4219C3.86198 19.1719 3.875 18.0521 3.875 17.0625C3.90104 16.0469 3.91406 15.2005 3.91406 14.5234C3.91406 13.8464 3.91406 13.4167 3.91406 13.2344C3.83594 12.8438 3.71875 12.4531 3.5625 12.0625C3.43229 11.724 3.22396 11.3724 2.9375 11.0078C2.65104 10.6432 2.27344 10.3047 1.80469 9.99219Z" />
                <path d="M43.6484 28.5469C45.0547 28.599 46.474 28.8594 47.9062 29.3281C49.3646 29.7708 50.7057 30.5 51.9297 31.5156C53.1536 32.5052 54.1953 33.7943 55.0547 35.3828C55.9141 36.9453 56.4479 38.8594 56.6562 41.125C56.8385 42.974 56.6042 44.8099 55.9531 46.6328C55.3281 48.4297 54.4557 50.0833 53.3359 51.5938C52.2161 53.1042 50.9271 54.3932 49.4688 55.4609C48.0104 56.5026 46.5521 57.1927 45.0938 57.5312C44.2083 57.7396 43.2318 57.7656 42.1641 57.6094C41.1224 57.4271 40.0547 57.1016 38.9609 56.6328C37.8932 56.138 36.8385 55.513 35.7969 54.7578C34.7812 54.0026 33.8568 53.1432 33.0234 52.1797C32.1901 51.1901 31.487 50.1224 30.9141 48.9766C30.3672 47.8307 30.0286 46.6328 29.8984 45.3828C29.7682 44.3411 29.7552 43.1953 29.8594 41.9453C29.9896 40.6693 30.237 39.4062 30.6016 38.1562C30.9922 36.8802 31.526 35.6562 32.2031 34.4844C32.9062 33.2865 33.7917 32.2448 34.8594 31.3594C35.9271 30.4479 37.1771 29.7448 38.6094 29.25C40.0677 28.7292 41.7474 28.4948 43.6484 28.5469ZM36.6562 44.3672C36.2917 47.1536 36.5521 49.3932 37.4375 51.0859C38.349 52.7786 39.7161 53.8073 41.5391 54.1719C42.4245 54.3542 43.2708 54.1719 44.0781 53.625C44.9115 53.0521 45.6667 52.2318 46.3438 51.1641C47.0208 50.0964 47.6068 48.8464 48.1016 47.4141C48.5964 45.9818 48.9609 44.4844 49.1953 42.9219C49.4297 41.3594 49.4427 39.9531 49.2344 38.7031C49.0521 37.4271 48.7266 36.3464 48.2578 35.4609C47.7891 34.5495 47.2161 33.8464 46.5391 33.3516C45.888 32.8568 45.2109 32.5833 44.5078 32.5312C43.2839 32.4531 42.2161 32.7786 41.3047 33.5078C40.3932 34.2109 39.625 35.1354 39 36.2812C38.375 37.4271 37.8672 38.7161 37.4766 40.1484C37.112 41.5807 36.8385 42.987 36.6562 44.3672Z" />
              </svg>
            </span>
          </Link>
          <p className="text-sm lg:text-md font-semibold text-light">
            Let's get started
          </p>
        </div>
        <div className="flex gap-10 items-center w-full lg:w-2/4 justify-center">
          <Link to="/">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="cursor-pointer fill-light"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25 0C11.1875 0 0 11.1875 0 25C0 36.0625 7.15625 45.4062 17.0938 48.7188C18.3438 48.9375 18.8125 48.1875 18.8125 47.5312C18.8125 46.9375 18.7812 44.9688 18.7812 42.875C12.5 44.0312 10.875 41.3438 10.375 39.9375C10.0938 39.2188 8.875 37 7.8125 36.4062C6.9375 35.9375 5.6875 34.7812 7.78125 34.75C9.75 34.7188 11.1562 36.5625 11.625 37.3125C13.875 41.0938 17.4687 40.0312 18.9062 39.375C19.125 37.75 19.7812 36.6562 20.5 36.0312C14.9375 35.4062 9.125 33.25 9.125 23.6875C9.125 20.9688 10.0938 18.7188 11.6875 16.9688C11.4375 16.3438 10.5625 13.7812 11.9375 10.3438C11.9375 10.3438 14.0312 9.6875 18.8125 12.9062C20.8125 12.3438 22.9375 12.0625 25.0625 12.0625C27.1875 12.0625 29.3125 12.3438 31.3125 12.9062C36.0938 9.65625 38.1875 10.3438 38.1875 10.3438C39.5625 13.7812 38.6875 16.3438 38.4375 16.9688C40.0312 18.7188 41 20.9375 41 23.6875C41 33.2812 35.1562 35.4062 29.5937 36.0312C30.5 36.8125 31.2812 38.3125 31.2812 40.6562C31.2812 44 31.25 46.6875 31.25 47.5312C31.25 48.1875 31.7187 48.9688 32.9688 48.7188C37.9316 47.0432 42.2441 43.8535 45.2993 39.5987C48.3545 35.3439 49.9985 30.2381 50 25C50 11.1875 38.8125 0 25 0Z"
                 
                />
              </svg>
            </span>
          </Link>
          <Link to="/">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
                className="cursor-pointer fill-light"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.5725 17.4225H27.8575V22.0475C29.195 19.3875 32.625 16.9975 37.7775 16.9975C47.655 16.9975 50 22.2925 50 32.0075V50H40V34.22C40 28.6875 38.6625 25.5675 35.2575 25.5675C30.535 25.5675 28.5725 28.93 28.5725 34.2175V50H18.5725V17.4225ZM1.425 49.575H11.425V16.9975H1.425V49.575ZM12.8575 6.375C12.8579 7.21319 12.6916 8.04309 12.3685 8.81647C12.0453 9.58985 11.5716 10.2913 10.975 10.88C9.766 12.0816 8.12953 12.7541 6.425 12.75C4.72347 12.7489 3.09078 12.078 1.88 10.8825C1.28553 10.2918 0.813465 9.58956 0.490859 8.81608C0.168254 8.0426 0.00144783 7.21306 0 6.375C0 4.6825 0.675 3.0625 1.8825 1.8675C3.09221 0.670396 4.7256 -0.000748027 6.4275 6.25661e-07C8.1325 6.25661e-07 9.7675 0.672501 10.975 1.8675C12.18 3.0625 12.8575 4.6825 12.8575 6.375Z"
                
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
      <span className="flex justify-end pt-10">
        <svg
          width="10"
          height="10"
          viewBox="0 0 44 44"
          className="fill-light"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.875 0C9.79492 0 0 9.79492 0 21.875C0 33.9551 9.79492 43.75 21.875 43.75C33.9551 43.75 43.75 33.9551 43.75 21.875C43.75 9.79492 33.9551 0 21.875 0ZM22.1387 32.7148C16.7676 32.7148 13.6719 29.1406 13.6719 23.1982V20.6445C13.6719 14.6582 16.7676 11.0352 22.1338 11.0352C26.7383 11.0352 30.0781 13.999 30.0781 18.2324C30.0781 18.3594 29.9756 18.4619 29.8486 18.4619H27.0801C26.875 18.4619 26.709 18.3057 26.6895 18.1006C26.4941 15.6836 24.7363 14.0283 22.1484 14.0283C18.96 14.0283 17.1631 16.3965 17.1631 20.6445V23.2129C17.1631 27.3975 18.9648 29.7363 22.1484 29.7363C24.7266 29.7363 26.4795 28.1885 26.6895 25.9375C26.709 25.7373 26.875 25.5811 27.0801 25.5811H29.8535C29.9805 25.5811 30.083 25.6836 30.083 25.8105C30.083 29.8437 26.7285 32.7148 22.1387 32.7148Z"
           
          />
        </svg>
        <p className="text-light font-semibold text-sm">Messiovo 2022</p>
      </span>
    </div>
  );
};

export default Footer;

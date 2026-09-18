import { useState } from "react";
import "./App.css";
import coverPhoto from "./assets/cover_photo.jpg";
import { FRIENDS, POSTS } from "./data";
import { FaFacebookF } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { HiOutlinePencil } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { PiListBold } from "react-icons/pi";  
import { FaTh } from "react-icons/fa";
import { PiSlidersHorizontalFill } from "react-icons/pi";
import { FaCog } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { MdGif } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function ReactionIcon({ src, alt = "", size = 16 }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="reactionImg"
    />
  );
}

const REACTIONS = {
  love: "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  wow: "data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9972 7.9996c0 4.418-3.5815 7.9996-7.9996 7.9996-4.418 0-7.9996-3.5816-7.9996-7.9996S3.5796 0 7.9976 0c4.4181 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M15.9972 7.9996c0 4.418-3.5815 7.9996-7.9996 7.9996-4.418 0-7.9996-3.5816-7.9996-7.9996S3.5796 0 7.9976 0c4.4181 0 7.9996 3.5815 7.9996 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.6144 10.8866c.159-1.8461 1.127-2.887 2.382-2.887 1.2551 0 2.2231 1.0418 2.3822 2.887.1591 1.8461-.7342 3.1127-2.3821 3.1127-1.648 0-2.5412-1.2666-2.3821-3.1127Z' fill='%234B280E'/%3E%3Cellipse cx='11.1978' cy='5.6997' rx='1.3999' ry='1.6999' fill='%231C1C1D'/%3E%3Cellipse cx='4.7979' cy='5.6997' rx='1.3999' ry='1.6999' fill='%231C1C1D'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.3528 3.166a1.4744 1.4744 0 0 0-1.8591-.3279.4.4 0 1 1-.3976-.6941c.9527-.5457 2.1592-.333 2.8678.5056a.4.4 0 0 1-.6111.5163ZM5.4998 2.8381a1.4744 1.4744 0 0 0-1.859.3278.4.4 0 0 1-.6111-.5162c.7085-.8387 1.915-1.0514 2.8677-.5057a.4.4 0 0 1-.3976.6941Z' fill='%23E0761A'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23FF5758' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FF5758' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5262 10.9226) scale(10.1818)'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23FFF287' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3979' y1='2.3999' x2='13.5973' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFF287'/%3E%3Cstop offset='1' stop-color='%23F68628'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.002 0h15.9992v15.9992H-.002z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
};

function HomeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z" />
    </svg>
  );
}

function WatchIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M10.996 12.132A1 1 0 0 0 9.5 13v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z" />
      <path d="M12.075 1h-.15C9.632 1 7.81 1 6.38 1.192c-1.472.198-2.674.616-3.623 1.565-.949.95-1.367 2.15-1.565 3.623C1 7.81 1 9.632 1 11.925v.15c0 2.293 0 4.116.192 5.545.198 1.472.616 2.674 1.565 3.623.95.949 2.15 1.367 3.623 1.565C7.81 23 9.632 23 11.925 23h.15c2.293 0 4.116 0 5.545-.192 1.472-.198 2.674-.616 3.623-1.565.949-.95 1.367-2.15 1.565-3.623.192-1.43.192-3.252.192-5.545v-.15c0-2.293 0-4.116-.192-5.545-.198-1.472-.616-2.674-1.565-3.623-.95-.949-2.15-1.367-3.623-1.565C16.19 1 14.368 1 12.075 1zM4.172 4.172c.515-.516 1.224-.83 2.475-.998l.183-.023L8.113 7H3.132c.013-.121.027-.239.042-.353.168-1.25.482-1.96.998-2.475zM10.22 7 8.895 3.023C9.778 3 10.801 3 12 3c.642 0 1.234 0 1.78.004L15.114 7H10.22zm6.253 2h4.507c.02.86.02 1.848.02 3 0 2.385-.002 4.074-.174 5.353-.168 1.25-.482 1.96-.998 2.475-.515.516-1.224.83-2.475.998-1.28.172-2.968.174-5.353.174s-4.074-.002-5.353-.174c-1.25-.168-1.96-.482-2.475-.998-.516-.515-.83-1.224-.998-2.475C3.002 16.073 3 14.385 3 12c0-1.152 0-2.14.02-3h13.454zm.747-2-1.316-3.949c.537.026 1.016.065 1.448.123 1.25.168 1.96.482 2.475.998.516.515.83 1.224.998 2.475.015.114.03.232.042.353H17.22z" />
    </svg>
  );
}

function FriendsIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M12.496 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-9 2.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM5.5 15a5 5 0 0 0-5 5 3 3 0 0 0 3 3h8.006a3 3 0 0 0 3-3 5 5 0 0 0-5-5H5.5zm-3 5a3 3 0 0 1 3-3h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1zm12-9.5a5.04 5.04 0 0 0-.37.014 1 1 0 0 0 .146 1.994c.074-.005.149-.008.224-.008h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-3.398a1 1 0 1 0 0 2h3.398a3 3 0 0 0 3-3 5 5 0 0 0-5-5H14.5z" />
    </svg>
  );
}

function MarketplaceIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z" />
    </svg>
  );
}

function GroupsIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M.5 12c0 6.351 5.149 11.5 11.5 11.5S23.5 18.351 23.5 12 18.351.5 12 .5.5 5.649.5 12zm2 0c0-.682.072-1.348.209-1.99a2 2 0 0 1 0 3.98A9.539 9.539 0 0 1 2.5 12zm.84-3.912A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 8.66 5.588 4.001 4.001 0 0 0 0 7.824 9.514 9.514 0 0 1-1.755 2.613A5.002 5.002 0 0 0 14 14.5h-4a5.002 5.002 0 0 0-4.905 4.025 9.515 9.515 0 0 1-1.755-2.613 4.001 4.001 0 0 0 0-7.824zM12 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm11.291 1.01a9.538 9.538 0 0 1 0 3.98 2 2 0 0 1 0-3.98zM16.99 20.087A9.455 9.455 0 0 1 12 21.5c-1.83 0-3.54-.517-4.99-1.414a1.004 1.004 0 0 1-.01-.148V19.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v.438a1 1 0 0 1-.01.148z" />
    </svg>
  );
}


function PencilIcon(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path d="M16.841 2.028a2.25 2.25 0 0 0-3.182 0L2.513 13.175A1.75 1.75 0 0 0 2 14.412v2.336c0 .69.56 1.25 1.25 1.25h2.336a1.75 1.75 0 0 0 1.237-.513L17.97 6.34a2.25 2.25 0 0 0 0-3.182l-1.13-1.13zm-2.121 1.06a.75.75 0 0 1 1.06 0l1.129 1.13a.75.75 0 0 1 0 1.06l-1.035 1.035-2.19-2.19L14.72 3.09zm-2.096 2.097 2.19 2.189-9.051 9.05a.25.25 0 0 1-.177.074H3.5v-2.086a.25.25 0 0 1 .073-.177l9.05-9.05z" />
    </svg>
  );
}

function ComposeIcon(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="currentColor"
      {...props}
    >
      <path
        d="M8 6a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-7a1.5 1.5 0 0 0-3 0v7a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h7a1.5 1.5 0 0 0 0-3H8z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        d="M17.99.93a1.75 1.75 0 0 0-2.48.005l-9.148 9.224a1.25 1.25 0 0 0-.362.88v2.21c0 .415.336.75.75.75h2.212c.33 0 .646-.13.88-.362l9.223-9.148a1.75 1.75 0 0 0 .005-2.48L17.99.93zm-1.415 1.06a.25.25 0 0 1 .355 0l1.08 1.08a.25.25 0 0 1-.001.353L16.742 4.68l-1.423-1.423 1.256-1.267z"
        clipRule="evenodd"
      />
      <path d="M11.238 1H9.694C7.856 1 6.4 1 5.26 1.153c-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87C1 6.401 1 7.856 1 9.694v.612c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238C6.401 19 7.856 19 9.694 19h.612c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433V8.764a.75.75 0 0 0-1.5 0v1.487c0 1.907-.002 3.261-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14h-.5c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289v-.5c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h1.488a.75.75 0 0 0 0-1.5z" />
    </svg>
  );
}

function WazeIcon(props) {
  return (
    <svg viewBox=".2 0 19.4 20" width="1em" height="1em" {...props}>
      <path
        d="m2.2 20c1 0 1.7-.5 2.4-.9.6-.3 1.2-.7 1.9-1 3.2-1.7 6.4-3.5 9.6-5.3 1-.5 2.3-1 3-1.9.2-.3.5-.7.4-1.2-.3-1.1-1.7-1.5-2.6-2-2.2-1.2-4.5-2.5-6.7-3.7-.8-.5-2-1.4-3-.7-.4.2-.6.4-.7.7-.1.4 0 .9 0 1.3v3.2c0 .9-.1 1.6.5 2 .2.1.6.2.9.1 1-.4.7-2.2.7-3.6v-1.1c1.7.9 3.4 1.8 5.1 2.6.6.3 1.6.6 1.8 1.4.2.9-1.7 1.6-2.3 1.9l-6.9 3.9c-.5.3-1.8 1.3-2.6 1-.3-.1-.5-.4-.5-.6-.1-.4-.1-1-.1-1.5v-3.2-5.4c0-.8-.1-1.8.2-2.3.7-1 2.3.8 2.8-.8.1-.4-.1-.8-.3-1-.4-.6-2.2-1.5-2.9-1.7-.2-.1-.7-.2-1-.2-1.7.3-1.3 3-1.3 5v9.9c0 1.5-.2 3.5.4 4.4.3.5.6.5 1.2.7z"
        fill="currentColor"
      />
    </svg>
  );
}


function App() {
  const [viewMode] = useState("list");
  const coverPhotoUrl = coverPhoto;

  return (
    <div className="app">
      <header className="header">
        <div className="headerLeft">
          <button className="fbLogo">
            <FaFacebookF />
          </button>
          <div className="searchWrapper">
            <FaSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Ian Bryle M. Monsalud"
              className="searchBar"
            />
          </div>
        </div>

        <div className="headerCenter">
          <button className="navIcon active" title="Home">
            <HomeIcon />
          </button>
          <button className="navIcon" title="Reels">
            <WatchIcon />
          </button>
          <button className="navIcon" title="Friends">
            <FriendsIcon />
          </button>
          <button className="navIcon" title="Marketplace">
            <MarketplaceIcon />
          </button>
          <button className="navIcon" title="Groups">
            <GroupsIcon />
          </button>
        </div>

        <div className="headerRight">
          <button className="menuIcon" title="Facebook menu">
            <CgMenuGridR />
          </button>
          <button className="menuIcon" title="Messenger">
            <FaFacebookMessenger />
          </button>
          <button className="menuIcon" title="Notification">
            <FaBell />
          </button>
          <img
            src="https://scontent.fcrk2-3.fna.fbcdn.net/v/t39.30808-1/527460210_1865523320721258_2261414532606746068_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFw653coHQ6NyD3cdiAdz_J2UOfXzNyEuDZQ59fM3IS4BP8LnIDgaizL15ZGlm6qsE9fZJ-RkIzXfUO6dDHZel5&_nc_ohc=espFMb0u9JwQ7kNvwGgKoil&_nc_oc=AdoxrMhdOQHDQVPgL9xl9bMbcAl-03O0MIKvwpWGyE6gMiTHGNs7HMqMjPystXbWe_c&_nc_zt=24&_nc_ht=scontent.fcrk2-3.fna&_nc_gid=iZhqUJsjwOLvUJSClF4Ccg&_nc_ss=7b2a8&oh=00_AQIXGYxH0eT26aImenQGAune3_20f364uyWR-hWuqT2pHQ&oe=6AA9A3C3"
            alt="Profile"
            className="headerProfilePic"
            title="Account"
          />
        </div>
      </header>

      <main className="main">
        <div className="mainContainer">
          <div
            className="coverContainer"
            style={{ "--cover-img": `url(${coverPhotoUrl})` }}
          >
            <img src={coverPhotoUrl} alt="Cover" className="coverImg" />
            <button className="addCoverBtn">
              <FaCamera /> Edit cover photo
            </button>
          </div>
        </div>

        <div className="profileSection">
          <div className="profileSectionInner">
            <div className="profileDetails">
              <div className="profilePicWrapper">
                <img
                  src="https://scontent.fcrk2-3.fna.fbcdn.net/v/t39.30808-1/527460210_1865523320721258_2261414532606746068_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFw653coHQ6NyD3cdiAdz_J2UOfXzNyEuDZQ59fM3IS4BP8LnIDgaizL15ZGlm6qsE9fZJ-RkIzXfUO6dDHZel5&_nc_ohc=espFMb0u9JwQ7kNvwGgKoil&_nc_oc=AdoxrMhdOQHDQVPgL9xl9bMbcAl-03O0MIKvwpWGyE6gMiTHGNs7HMqMjPystXbWe_c&_nc_zt=24&_nc_ht=scontent.fcrk2-3.fna&_nc_gid=iZhqUJsjwOLvUJSClF4Ccg&_nc_ss=7b2a8&oh=00_AQIXGYxH0eT26aImenQGAune3_20f364uyWR-hWuqT2pHQ&oe=6AA9A3C3"
                  alt="Profile"
                  className="profileImg"
                />
                <div className="cameraIcon">
                  <FaCamera />
                </div>
              </div>

              <div className="profileNameText">
                <h1>Ian Monsalud</h1>
                <p>134 friends</p>
              </div>

              <div className="profileActions">
                <button className="btnPrimary">
                  <LuPlus /> Add to story
                </button>
                <button className="btnSecondary">
                  <RiPencilFill />
                  Edit profile
                </button>
                <button className="btnSecondary">
                  <FaChevronDown />
                </button>
              </div>
            </div>

            <div className="profileTabs">
              <button className="tab active">All</button>
              <button className="tab">About</button>
              <button className="tab">Friends</button>
              <button className="tab">Photos</button>
              <button className="tab">Reels</button>
              <button className="tab">
                More <FaChevronDown />
              </button>
              <div className="tabMoreOptions">
                <button className="btnSecondary">
                  <FaEllipsisH />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mainContainer">
          <div className="contentArea">
            <aside className="sidebar">
              <div className="card">
                <div className="cardSection">
                  <div className="cardHeader">
                    <h3>Personal details</h3>
                    <button className="editBtn">
                      <HiOutlinePencil />
                    </button>
                  </div>
                  <p className="grayText">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath fill='%23b0b3b8' d='M15.5 4A8 8 0 1 1 12 19.194a8 8 0 1 1 0-14.39A7.967 7.967 0 0 1 15.5 4Zm-7 2a6 6 0 1 0 1.503 11.81A7.976 7.976 0 0 1 7.5 12c0-2.289.962-4.352 2.503-5.81A6.01 6.01 0 0 0 8.5 6Zm7 0c-.52 0-1.023.065-1.504.19A7.976 7.976 0 0 1 16.5 12a7.975 7.975 0 0 1-2.504 5.81A6 6 0 1 0 15.5 6ZM12 7.128A5.99 5.99 0 0 0 9.5 12a5.99 5.99 0 0 0 2.5 4.871A5.99 5.99 0 0 0 14.5 12 5.99 5.99 0 0 0 12 7.128Z'/%3E %3C/svg%3E"
                      alt=""
                    />
                    Male
                  </p>
                </div>

                <div className="cardSection">
                  <div className="cardHeader">
                    <h3>Work</h3>
                    <button className="editBtn">
                      <PencilIcon />
                    </button>
                  </div>
                  <div className="workItem">
                    <img
                      src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-1/353456146_577156731263519_1175883167425422074_n.jpg?stp=cp0_dst-jpg_tt6&cstp=mx880x880&ctp=s40x40&_nc_cat=1&ccb=1-7&_nc_sid=f907e8&_nc_eui2=AeGttyLXoSHn3xHoNUMQ-9IopPH_hCPLQBSk8f-EI8tAFBaujNOTd6jVK2ki2O1ZLwMLrr-twON2zxyLJlr5RjVV&_nc_ohc=hj0NJCWHHscQ7kNvwFRV8K0&_nc_oc=AdokQpYcGei9bbxwqxnF8xe5XkZA9wjKjpL-rzUn7Tytj0B4gNLkC676Vwq0g5EnGh8&_nc_zt=24&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=mNtrVJqb6j27w4rUZXOMeg&_nc_ss=7b2a8&oh=00_AQKEqznqiVJMbOQX6C1OuSttJZRr1GBKWsXySkVmORDFRA&oe=6AA9A425"
                      alt="Work"
                      className="workLogo"
                    />
                    <div>
                      <p>
                        <strong>The Krusty Krab</strong>
                      </p>
                      <p className="grayText">
                        Sep 20, 2019 · 6 years, 11 months
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3>Highlights</h3>
                <button className="addHighlightsBtn">Add highlights</button>
              </div>

              <div className="card">
                <div className="cardHeader">
                  <h3>Friends</h3>
                  <a href="#" className="blueLink">
                    See all friends
                  </a>
                </div>
                <p className="grayText">133 friends</p>
                <div className="friendsGrid">
                  {FRIENDS.map((f) => (
                    <div className="friendCard" key={f.id}>
                      <img src={f.img} alt={f.name} className="friendImg" />
                      <p className="friendName">{f.name}</p>
                      <p className="grayText">{f.mutual}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="cardHeader">
                  <h3>Photos</h3>
                  <a href="#" className="blueLink">
                    See all photos
                  </a>
                </div>
              </div>
              <div className="sidebarFooter">
                <div className="footerLinks">
                  <a href="#">Privacy</a>
                  <a href="#">Terms</a>
                  <a href="#">Advertising</a>
                  <a href="#">
                    Ad Choices
                    <WazeIcon className="footerIcon" />
                  </a>
                  <a href="#">Cookies</a>
                  <a href="#">More</a>
                </div>
              </div>
            </aside>

            <section className="feed">
              <div className="card">
                <div className="composerTop">
                  <img
                    src="https://scontent.fcrk2-3.fna.fbcdn.net/v/t39.30808-1/527460210_1865523320721258_2261414532606746068_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFw653coHQ6NyD3cdiAdz_J2UOfXzNyEuDZQ59fM3IS4BP8LnIDgaizL15ZGlm6qsE9fZJ-RkIzXfUO6dDHZel5&_nc_ohc=espFMb0u9JwQ7kNvwGgKoil&_nc_oc=AdoxrMhdOQHDQVPgL9xl9bMbcAl-03O0MIKvwpWGyE6gMiTHGNs7HMqMjPystXbWe_c&_nc_zt=24&_nc_ht=scontent.fcrk2-3.fna&_nc_gid=iZhqUJsjwOLvUJSClF4Ccg&_nc_ss=7b2a8&oh=00_AQIXGYxH0eT26aImenQGAune3_20f364uyWR-hWuqT2pHQ&oe=6AA9A3C3"
                    alt="Profile"
                    className="smallProfilePic"
                  />
                  <input
                    type="text"
                    placeholder="What's on your mind?"
                    className="composerInput"
                  />
                </div>
                <div className="composerBottom">
                  <button className="composerBtn">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/yE/r/f0XMdTi7eQy.webp?_nc_eui2=AeGfI-DA2cwD05qPNhZy_-qzWOK2rF8KwnxY4rasXwrCfGG1OvFZHDA5MHjm6htdjegPoF7jWYnJFJ6L8SHny9lf"
                      alt="Live Video"
                    />
                    <span>Live Video</span>
                  </button>
                  <button className="composerBtn">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/yX/r/8_VnccIZfRa.webp?_nc_eui2=AeFM-nMaE5DEWsuA3ix7B20KtIBijxuqePS0gGKPG6p49L2nKxe4D7Mck9P4cAklrcMdwxL7W_OSB9HFy1Mafgmf"
                      alt="Photo/Video"
                    />
                    <span>Photo/Video</span>
                  </button>
                  <button className="composerBtn">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/yd/r/R9lJq0bdBk6.webp?_nc_eui2=AeHkTTCGSisrSw9IZNNUJc57RCP0UW6d5X1EI_RRbp3lffc8pMTWCoRZJNDUpmLeyEzONtLpDKEXTbObvUBVGYXg"
                      alt="Life Update"
                    />
                    <span>Life Update</span>
                  </button>
                </div>
              </div>

              <div className="card postsCard">
                <div className="postsHeader">
                  <h3>Posts</h3>
                  <div className="postsHeaderActions">
                    <button className="btnSecondary">
                      <PiSlidersHorizontalFill /> Filters
                    </button>
                    <button className="btnSecondary">
                      <FaCog /> Manage posts
                    </button>
                  </div>
                </div>
                <div className="viewToggle">
                  <button className="active">
                    <PiListBold /> List view
                  </button>
                  <button className="disabled" disabled>
                    <FaTh /> Grid view
                  </button>
                </div>
              </div>

              <div className={viewMode === "grid" ? "postsGrid" : "postsList"}>
                {POSTS.map((post) => (
                  <div className="card postCard" key={post.id}>
                    <div className="postHeader">
                      <img
                        src="https://scontent.fcrk2-3.fna.fbcdn.net/v/t39.30808-1/527460210_1865523320721258_2261414532606746068_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFw653coHQ6NyD3cdiAdz_J2UOfXzNyEuDZQ59fM3IS4BP8LnIDgaizL15ZGlm6qsE9fZJ-RkIzXfUO6dDHZel5&_nc_ohc=QhoxghgEbPcQ7kNvwFxOr2i&_nc_oc=Adoi5ilEut66bBwHopnZTx0SlxsmlKOTBn4I0NHnz8IXxVpnUby0H9fOa4B0IuCeaTY&_nc_zt=24&_nc_ht=scontent.fcrk2-3.fna&_nc_gid=R8EwCjE76PJ1PEc-GOzQYQ&_nc_ss=7b2a8&oh=00_AQIMOA4UgTHd4YwUufXwXsGV2pLLRMCWN34VLmROr06rBA&oe=6AB15483"
                        alt="Profile"
                        className="smallProfilePic"
                      />
                      <div>
                        <p>
                          <strong>Ian Monsalud</strong>
                        </p>
                        <p className="grayText">
                          {post.time} ·{" "}
                          {post.privacy === "friends" ? (
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/yE/r/KFDq73iNssa.webp?_nc_eui2=AeEgXDnNTqa76PYoagNV6viM2qe8T87IMVvap7xPzsgxW8NZTtD7EhilrTpoqRmFm0iBHEZn1oLJvioVNDfgTmNG"
                              alt="Friends"
                              className="privacyIcon"
                            />
                          ) : (
                            <FaLock />
                          )}
                        </p>
                      </div>
                      <button className="moreBtn">
                        <FaEllipsisH />
                      </button>
                    </div>

                    <div className="postContent">
                      <p>{post.text}</p>
                    </div>

                    <div className="postImageBox">
                      <img src={post.image} alt="Post" />
                    </div>

                    {(post.reactions ||
                      post.commentCount > 0 ||
                      post.shareCount > 0) && (
                      <div className="postSummaryRow">
                        {post.reactions ? (
                          <div className="reactionsLeft">
                            <span className="reactionIcons">
                              {post.reactions.icons.map((key, i) => (
                                <ReactionIcon key={i} src={REACTIONS[key]} />
                              ))}
                            </span>
                            <span className="reactionNames">
                              {post.reactions.names}
                            </span>
                          </div>
                        ) : (
                          <span />
                        )}

                        {(post.commentCount > 0 || post.shareCount > 0) && (
                          <span className="statsRight">
                            {post.commentCount > 0 &&
                              `${post.commentCount} comment${post.commentCount > 1 ? "s" : ""}`}
                            {post.commentCount > 0 &&
                              post.shareCount > 0 &&
                              "  ·  "}
                            {post.shareCount > 0 &&
                              `${post.shareCount} share${post.shareCount > 1 ? "s" : ""}`}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="postActionsRow">
                      <button className="postActionBtn">
                        <FaRegThumbsUp /> Like
                      </button>
                      <button className="postActionBtn">
                        <FaRegComment /> Comment
                      </button>
                      {post.id !== 1 && (
                        <button className="postActionBtn">
                          <FaShare /> Share
                        </button>
                      )}
                    </div>

                    {post.commentsList && post.commentsList.length > 0 && (
                      <div className="commentsList">
                        {post.commentsList.map((c) => (
                          <div className="commentItem" key={c.id}>
                            <img
                              src={FRIENDS.find((f) => f.name === c.name)?.img}
                              alt={c.name}
                              className="commentAvatar"
                            />
                            <div className="commentBody">
                              <div className="commentBubble">
                                <strong>{c.name}</strong>
                                <p>{c.text}</p>
                              </div>
                              <div className="commentMeta">
                                <span>{c.time}</span>
                                <button className="commentReplyBtn">
                                  Reply
                                </button>
                                {c.likes > 0 && (
                                  <span className="commentLikeBadge">
                                    <img
                                      height={16}
                                      width={16}
                                      src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                                      alt=""
                                    />
                                    {c.likes}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="commentInputRow">
                      <img
                        src="https://scontent.fcrk2-3.fna.fbcdn.net/v/t39.30808-1/527460210_1865523320721258_2261414532606746068_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFw653coHQ6NyD3cdiAdz_J2UOfXzNyEuDZQ59fM3IS4BP8LnIDgaizL15ZGlm6qsE9fZJ-RkIzXfUO6dDHZel5&_nc_ohc=espFMb0u9JwQ7kNvwGgKoil&_nc_oc=AdoxrMhdOQHDQVPgL9xl9bMbcAl-03O0MIKvwpWGyE6gMiTHGNs7HMqMjPystXbWe_c&_nc_zt=24&_nc_ht=scontent.fcrk2-3.fna&_nc_gid=iZhqUJsjwOLvUJSClF4Ccg&_nc_ss=7b2a8&oh=00_AQIXGYxH0eT26aImenQGAune3_20f364uyWR-hWuqT2pHQ&oe=6AA9A3C3"
                        alt="Profile"
                        className="postHeaderPic"
                      />
                      <div className="commentInputWrapper">
                        <input
                          type="text"
                          placeholder="Comment as Ian Monsalud"
                          className="commentInput"
                        />
                        <div className="commentInputIcons">
                          <FaRegSmile />
                          <FaCamera />
                          <MdGif />
                          <FaStickyNote />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <button className="fab">
        <ComposeIcon />
      </button>
    </div>
  );
}

export default App;

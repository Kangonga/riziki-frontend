import {
    FaTh,
    FaBars,
    FaHome,
}from "react-icons/fa";
import {BsPeopleFill, BsClipboardCheck} from 'react-icons/bs'
import {MdWork, MdLogout} from 'react-icons/md'


// import * as FaIcons from "react-icons/fa";
// import * as FcIcons from "react-icons/fc";
// import * as MdIcons from "react-icons/md";
// import * as MdWork from "react-icons/md";
// import * as AiIcons from "react-icons/ai";
// import * as FaUsers from "react-icons/fa";
// import * as AiFillCheckSquare from "react-icons/ai"
// import * as CgIcons from "react-icons/cg";
// import {BiBus} from "react-icons/tfi";




//     {
//         title: "Home",
//         path: "/",
//         icon: <FaIcons.FaHome />,
//       },
//       // {
//       //   title: "Dashboard",
//       //   path: "/mainpage/dashboard",
//       //   icon: <MdIcons.MdDashboard />,
//       // },
   
//       // {
//       //   title: "Users",
//       //   path: "/mainpage/bookings",
//       //   icon: <FaIcons.FaUsers />,
//       // },
//       // {
//       //   title: "Employers",
//       //   path: "/mainpage/buses",
//       //   icon:  <FaIcons.FaUsers />,
//       // },
//       // {
//       //   title: "JobSeekers",
//       //   path: "/mainpage/drivers",
//       //   icon:  <FaIcons.FaUsers />,
//       // },
//       // {
//       //   title: "Applications",
//       //   path: "/mainpage/customers",
//       //   icon: <AiIcons.AiFillCheckSquare />,
//       // },
//       // {
//       //   title: "Jobs",
//       //   path: "/routes",
//       //   icon: <MdIcons.MdWork />,
//       // },
//        {
//         title: "Employers",
//         path: "mainpage/employers",
//         icon: <MdIcons.MdWork />,
//       },
//       {
//         title: "Jobs",
//         path: "/mainpage/jobs",
//         icon: <MdIcons.MdWork />,
//       },

//       {
//         title: "JobSeekers",
//         path: "/mainpage/jobseekers",
//         icon: <MdIcons.MdWork />,
//       },
//       {
//         title: "Application",
//         path: "/mainpage/applications",
//         icon: <MdIcons.MdWork />,
//       },
//       {
//         title: "Application",
//         path: "/mainpage/jobseeker",
//         icon: <MdIcons.MdWork />,
//       },
      
//       // {
//       //   title: "Profile",
//       //   path: "/profile",
//       //   icon: <CgIcons.CgProfile />,
//       // },
//       {
//         title: "Logout",
//         path: "/logout",
//         icon: <MdIcons. MdLogout />,
//       },
      
// ]
export const SidebarData=[
        {
            path:"/mainpage",
            title:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/",
            title:"Home",
            icon:<FaHome/>
        },
        {
            path:"/mainpage/employers",
            title:"Employers",
            icon:<BsPeopleFill/>
        },
        {
            path:"/mainpage/jobseekers",
            title:"JobSeekers",
            icon:<BsPeopleFill/>
        },
        {
            path:"/mainpage/jobs",
            title:"Jobs",
            icon:<MdWork/>
        },
        {
            path:"/mainpage/applications",
            title:"Applications",
            icon:<BsClipboardCheck/>
        },
        {
            path:"/mainpage/jobseeker",
            title:"Jobs",
            icon:<BsClipboardCheck/>
        },
        {
            path:"/logout",
            title:"Logout",
            icon:<MdLogout/>
        },   
    ]









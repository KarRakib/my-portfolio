import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
   
<Link href={href} className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">
{title}
</Link>

//     <div className="r">

//     <div className="relative inline-flex  group">
//         <div
//             className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
//         </div>
//         <Link href={href} title="Get quote now"
//             className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
//             role="button">{title}
//         </Link>
//     </div>
// </div>
  
  );
};

export default NavLink;

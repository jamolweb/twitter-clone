import { IoMdSearch } from "react-icons/io";
import { RiNotification4Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { PiBookmarkSimple } from "react-icons/pi";
import { ImUsers } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import Link from "next/link";
import { RxDotsHorizontal } from "react-icons/rx";

const NAVIGATE_ITEMS = [
    {
        title: "Twitter",
        icon: FaTwitter,
    },
    {
        title: "Home",
        icon: GoHomeFill,
    },
    {
        title: "Explore",
        icon: IoMdSearch,
    },
    {
        title: "Notifications",
        icon: RiNotification4Line,
    },
    {
        title: "Messenges",
        icon: MdOutlineEmail,
    },
    {
        title: "Bookmarks",
        icon: PiBookmarkSimple,
    },
    {
        title: "Profile",
        icon: BiSolidUser,
    },
];


const leftSidebar = () => {
    return (
        <section className="fixed w-[275px] flex flex-col h-screen px-6">
            <div className="w-full flex flex-col h-full space-y-3 mt-4">
                {NAVIGATE_ITEMS.map((item) => (
                    <Link
                        href={`/${item.title.toLowerCase()}`}
                        className="hover:bg-white/10 text-3xl py-2 px-6 transition duration-200 rounded-3xl p-4 flex items-center justify-start w-fit space-x-2 p-4"
                        key={item.title}
                    >
                        <item.icon />
                        {item.title !== "Twitter" && (
                            <div className="text-white">{item.title}</div>
                        )}
                    </Link>
                ))}
                <button className="w-full rounded-full m-4  bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transitipon ">
                    Tweet
                </button>
            </div>
            <button className="w-full flex items-center space-x-2p rounded-full my-4 bg-transparent p-4 text-2xl text-center hover:bg-white/10 transitipon w-full justify-between">
                <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-slate-400 w-9 h-9"></div>
                    <div className="text-xs text-left">
                        <div className="text-sm">Jamoladdin</div>
                        <div className="text-grey">@Jamolwebdev</div>
                    </div>
                </div>
                <div>
                    <RxDotsHorizontal />
                </div>
            </button>
        </section>
    )
}

export default leftSidebar
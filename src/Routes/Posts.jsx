import SideNav from "../Component/SideNav";
import TopNav from "../Component/TopNav";
import Trix from "trix"
import TrixStyle from "trix/dist/trix.css";
import Button from "../Component/ButtonIcon";
import {RiMailSendFill} from "react-icons/ri";

const Posts = () => {
    return (
        <>
        <div className="flex p-2 space-x-2 h-screen max-h-fit w-full">
            <SideNav/>
            <div className="w-full h-full space-y-4">
                <TopNav titlePage="Posts"/>
                <div className="p-2 grid grid-cols-3 gap-2">
                    <div className="w-full min-h-[256px] col-span-2">
                        <form action="submit" className="flex-col space-y-2 px-5 overflow-auto h-[80vh]">
                            <div className="grid w-full gap-2">
                               <label htmlFor="titlePost">Title</label>
                                <input type="text" className="border-2 p-1 border-black/40 rounded focus:border-purple-500"/> 
                            </div>
                            <form>
                                <input id="x" type="hidden" name="content" />
                                    <trix-editor input="x" className="w-full"></trix-editor>
                            </form>
                        </form>
                    </div>
                    <div className="flex-col space-y-2 w-full">
                        <Button text="Post Article" icon={<RiMailSendFill/>}/>
                        <label htmlFor="Tag">Tags</label>
                        <select name="Tag" id="Tag" className="w-full p-2 rounded bg-purple-500 text-white">
                            <option value="Article">Article</option>
                            <option value="Post">Post</option>
                            <option value="Blog">Blog</option>
                            <option value="News">News</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Posts;
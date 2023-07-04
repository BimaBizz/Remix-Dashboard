import SideNav from "../Component/SideNav";
import TopNav from "../Component/TopNav";
import { useState, useEffect } from "react";

const ListPost = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId')
          .then(res => res.json())
          .then(hasil => {
            if (Array.isArray(hasil.posts)) {
              setData(hasil.posts);
            } else {
              console.error('Data is not an array:', hasil);
            }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

      const handleEdit = (id) => {
        const itemIndex = data.findIndex(item => item.id === id);
        
        if (itemIndex !== -1) {
          const updatedData = [...data];
          updatedData[itemIndex].title = "Judul Baru";
          setData(updatedData);
        }
      };
    
      const handleDelete = (id) => {
        const itemIndex = data.findIndex(item => item.id === id);
        
        if (itemIndex !== -1) {
          const updatedData = [...data];
          updatedData.splice(itemIndex, 1);
          setData(updatedData);
        }
      };

    return (
        <>
        <div className="flex p-2 space-x-2 h-screen max-h-fit w-full">
            <SideNav/>
            <div className="w-full h-full space-y-4">
                <TopNav/>
                <div className="p-2">
                    <input type="text" className="border mb-2 border-black/40 p-2 rounded" placeholder="Search..." />
                    <div className=" overflow-auto h-[75vh]">
                        <table className="min-w-full divide-y divide-gray-200 ">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reactions</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.reactions}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center justify-center">
                                        <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                        onClick={() => handleEdit(item.id)}
                                        >
                                        Edit
                                        </button>
                                        <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handleDelete(item.id)}
                                        >
                                        Delete
                                        </button>
                                    </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ListPost;
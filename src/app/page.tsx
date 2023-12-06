import LeftSidebar from "@/components/leftSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <main className="ml-[290px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px]  border-gray-600">
          <h1 className="text-xl font-bold p-6">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 w-full relative">
            <div className="w-[600px] h-10 bg-plate-400 rounded-full"></div>
            <div className="flex flex-col">
              <div className="border-b-[0.5px] border-">
                <input type="text" placeholder="what's happening?" />
              </div>
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </main>
        {/* <section>right sidebar</section> */}
      </div>
    </div>
  );
};

export default Home;

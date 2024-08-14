import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="md:flex">

            <div className=" md:w-1/5 min-h-screen text-black bg-[#F7F7FF]">
                <h2 className="menu-title text-xl font-semibold bg-[#F7F7FF] text-black"><span className="text-[#4163E9]">ON</span>Course</h2>

                <ul className="menu w-full p-0 [&_li>*]:rounded-none [&_li>*]:py-4 [&_li>*]:font-semibold">



                    <li>
                        <NavLink to={"overview"}>
                            {/* <FaUserAlt></FaUserAlt> */}
                            Overview
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"mycourse"}>
                            My Course
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"completed"}>
                            Completed
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"financialaid"}>
                            Financial Aid
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"transactions"}>
                            Transactions
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"reports"}>
                            Reports
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"statistics"}>
                            Statistics
                        </NavLink>
                    </li>



                    <li>
                        <NavLink to={"/"}>
                            Support
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            Settings
                        </NavLink>
                    </li>


                </ul>


            </div>


            {/* components */}
            <div className="md:flex-1">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Dashboard;
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Overview from "../pages/Dashboard/Overview/Overview";
import MyCourse from "../pages/Dashboard/MyCourse/MyCourse";
import Completed from "../pages/Dashboard/Completed/Completed";
import FinancialAid from "../pages/Dashboard/FinancialAid/FinancialAid";
import Transactions from "../pages/Dashboard/Transactions/Transactions";
import Reports from "../pages/Dashboard/Reports/Reports";
import Statistics from "../pages/Dashboard/Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "overview",
                element: <Overview></Overview>
            },
            {
                path: "mycourse",
                element: <MyCourse></MyCourse>,
            },
            {
                path: "completed",
                element: <Completed></Completed>,
            },
            {
                path: "financialaid",
                element: <FinancialAid></FinancialAid>,
            },
            {
                path: "transactions",
                element: <Transactions></Transactions>,
            },
            {
                path: "reports",
                element: <Reports></Reports>,
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>,
            },
        ]
    },
]);

export default router;
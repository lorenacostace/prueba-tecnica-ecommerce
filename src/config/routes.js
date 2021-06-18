import Dashboard from '../pages/dashboard/DashboardContainer'
import DetailView from '../pages/detailView/DetailViewContainer'

const routes = [
    { path: "/", name: "Dashboard", Component: Dashboard },
    { path: "/product/:id", name: "Detail View", Component: DetailView },
];

export default routes;

import Dashboard from '../pages/Dashboard'
import DetailView from '../pages/DetailView'

const routes = [
    { path: "/", name: "Dashboard", Component: Dashboard },
    { path: "/product/:id", name: "Detail View", Component: DetailView },
];

export default routes;

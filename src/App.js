import {lazy, Suspense} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from "./components/admin/dashbourd";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import observable from "./components/patterns/observable";

import SuspenseLoading from './components/modal/suspenseLoading';
import withAuth from "./components/patterns/withAuth";

const UsersSection = lazy(() => import('./components/users'));
const ArticlesSection = lazy(() => import('./components/articles'));
const GallerySection = lazy(() => import('./components/galleries'));

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

function App({ auth }) {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard><Suspense fallback={<SuspenseLoading />}></Suspense></Dashboard>} />
      <Route path="/admin/users" element={<Dashboard><Suspense fallback={<SuspenseLoading />}><UsersSection /></Suspense></Dashboard>} />
      <Route path="/admin/articles" element={<Dashboard><Suspense fallback={<SuspenseLoading />}><ArticlesSection /> </Suspense></Dashboard>} />
      <Route path="/admin/galleries" element={<Dashboard><Suspense fallback={<SuspenseLoading />}><GallerySection /> </Suspense></Dashboard>} />
      <Route path="*" element={<Navigate to="/admin/dashboard" />} />
  </Routes>
  )
}

export default withAuth(App)

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "src/components";
import { Layout } from "src/container";
import { Home, NotFound } from "src/pages";
import { PrivateRouter } from "src/routes";

const AuthorApp = React.lazy(() => import("src/remotes/author-app"));
const CurriculumApp = React.lazy(() => import("src/remotes/curriculum-app"));

const SuspensePage = ({ element }: { element: React.ReactNode }) => (
  <Suspense fallback={<Loading />}>{element}</Suspense>
);

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<SuspensePage element={<Home />} />} />
            <Route path="author/*" element={<SuspensePage element={<AuthorApp />} />} />
            <Route path="curriculum/*" element={<SuspensePage element={<CurriculumApp />} />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;

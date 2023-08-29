import { FC, ReactElement, Suspense } from "react";
import Table from "./table";

const RequestQuotaTab: FC = (): ReactElement => {
  return (
    <Suspense fallback="Loading...">
      <section className="py-10">
        <Table />
      </section>
    </Suspense>
  );
};

export default RequestQuotaTab;

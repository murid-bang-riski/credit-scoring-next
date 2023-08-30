import { FC, ReactElement, Suspense } from "react";
import Table from "./table";

const RequestHistoryTab: FC = (): ReactElement => {
  return (
    <Suspense fallback="Loading...">
      <section className="py-10">
        <Table />
      </section>
    </Suspense>
  );
};

export default RequestHistoryTab;

import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";

import VoucherListPage from "../features/voucher/pages/VoucherListPage";
import VoucherDetailPage from "../features/voucher/pages/VoucherDetailPage";



const voucherRoute = [
    {
        path: "vouchers",
        element: <Suspense fallback={<PageLoading />}><VoucherListPage /></Suspense>
    },
    {
        path: "voucher-details/:id",
        element: <Suspense fallback={<PageLoading />}><VoucherDetailPage /></Suspense>
    }

];

export default voucherRoute

import React from "react";
import { Outlet } from "react-router-dom";
import PageBanner from "../components/PageBanner";

export default function SubLayout({ banner }) {
    return (
        <>
        <PageBanner {...banner} />
        <Outlet />
        </>
    );
}

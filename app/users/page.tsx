"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import MainPage from "./MainPage";

export default function UsersPage() {
  return (
    <DashboardLayout>
      <MainPage />
    </DashboardLayout>
  );
}

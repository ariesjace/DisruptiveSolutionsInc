"use client"

import * as React from "react"
import { useState } from "react"
import { AppSidebar } from "../components/app-sidebar"
import { AllProducts } from "../components/products/AllProducts"
import AddNewProduct from "../components/products/AddnewProduct"
import InquiriesPanel from "../components/inquiries/QuoteInquiries"
import CareersManager from "../components/pages/CareersManager"
import BlogManager from "../components/pages/BlogManager" 
// 1. I-IMPORT ANG APPLICATION INQUIRIES
import ApplicationInquiries from "../components/inquiries/JobApplication"
import CustomerInquiries from "../components/inquiries/CustomerInquiries" 
import Quotation from "../components/inquiries/Quotation" 
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  const [activeView, setActiveView] = useState("All Product")

  const renderContent = () => {
    switch (activeView) {
      case "All Product":
        return <AllProducts />
      
      // MGA INQUIRIES SECTION
      case "Orders": // Dating "Inquiries"
        return <InquiriesPanel />

      case "Job Application": // Ito yung bago nating ginawa
        return <ApplicationInquiries />

      case "Add new product":
        return <AddNewProduct />

      case "Quotation":
        return <Quotation />
      // PAGES SECTION
      case "Careers": 
        return <CareersManager />

      case "Customer Inquiries": 
        return <CustomerInquiries />

      case "All Blogs": 
        return <BlogManager />
      
      default:
        return <AllProducts />
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar onNavigate={(view) => setActiveView(view)} />
      
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="capitalize font-black italic tracking-tighter text-[#d11a2a]">
                  {activeView}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="min-h-[100vh] flex-1 rounded-[2rem] bg-white p-6 md:min-h-min shadow-sm border border-gray-100">
            {renderContent()}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
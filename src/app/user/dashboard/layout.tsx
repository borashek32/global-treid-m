import SideNav from "@/features/dashboard/sidenav/Sidenav";
import '@/shared/assets/styles/global.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='dashboardContainer'>
      <div className="flex flex-row">
        <div className="w-2 flex-none md:w-64">
          <SideNav />
        </div>
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
}
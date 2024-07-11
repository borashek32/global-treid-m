import SideNav from "@/features/dashboard/sidenav/Sidenav";
import '@/shared/assets/styles/global.css';

export const experimental_ppr = true;
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='dashboardContainer'>
      <div className="flex fle-row h-screen md:overflow-hidden">
        <div className="w-2 flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
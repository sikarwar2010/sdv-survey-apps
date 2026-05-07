import CommonDashboardLayout from '@/components/commons/dashboard-layout';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CommonDashboardLayout>{children}</CommonDashboardLayout>
    </div>
  );
}

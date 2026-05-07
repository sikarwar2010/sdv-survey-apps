import { AppSidebar } from '@/components/app-sidebar';
import { ModeToggle } from '@/components/providers/modetoggle';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center gap-2 border-b border-border">
            <div className="flex items-center gap-2 px-4 w-full">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 data-vertical:h-4 data-vertical:self-auto" />
                <ModeToggle />
              </div>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-4 pb-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

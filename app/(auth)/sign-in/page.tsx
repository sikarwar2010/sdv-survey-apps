import { LoginForm } from "@/components/auth/login/login-form";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="" className="flex items-center gap-2 self-center font-medium">
          <Image src="/sdv.jpeg" alt="Logo" width={250} height={250} className="rounded-md" />
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}

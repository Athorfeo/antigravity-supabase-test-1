import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] space-y-6 text-center">
      <div className="bg-red-500/10 text-red-500 w-16 h-16 rounded-full flex items-center justify-center">
        <span className="text-3xl font-bold">X</span>
      </div>
      <h1 className="text-4xl font-bold">Ups! Algo salió mal.</h1>
      <p className="text-muted-foreground w-[400px]">
        No pudimos autenticarte. Revisa tus credenciales o asegúrate de que Confirmación de Email esté deshabilitada temporalmente en tu panel de Supabase.
      </p>
      <Link href="/login">
        <Button variant="outline" className="rounded-full">Volver a intentar</Button>
      </Link>
    </div>
  )
}

import type React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

type LoginPageProps = {
  tempName: string;
  setTempName: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setShowLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginPage({
  tempName,
  setTempName,
  setName,
  setShowLoginPage,
}: LoginPageProps) {
  const handleSubmit = () => {
    setName(tempName.trim());
    setShowLoginPage(false);
  };

  return (
    <div className="min-h-screen bg-[#0b141a] flex items-center justify-center p-4 ">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#25d366] rounded-full mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-light text-[#e9edef] mb-2">
            Bem-vindo ao WhatsApp
          </h1>
          <p className="text-[#8696a0] text-sm">
            Digite seu nome para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="h-12 bg-[#2a3942] border-[#2a3942] text-[#e9edef] placeholder:text-[#8696a0] focus:border-[#25d366] focus:ring-[#25d366] rounded-lg"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={!tempName.trim()}
            className="w-full h-12 bg-[#25d366] hover:bg-[#20bd5a] text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            "Entrar"
          </Button>
        </form>

        <div className="text-center mt-8">
          <p className="text-[#8696a0] text-xs">
            Ao continuar, você concorda com nossos{" "}
            <span className="text-[#53bdeb] cursor-pointer hover:underline">
              Termos de Serviço{" "}
            </span>
            e{" "}
            <span className="text-[#53bdeb] cursor-pointer hover:underline">
              Política de Privacidade
            </span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25d366] via-[#128c7e] to-[#075e54]" />
    </div>
  );
}

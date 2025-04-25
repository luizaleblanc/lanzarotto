"use client"

import { useState } from "react"
import { Eye, EyeOff, User, Lock } from "lucide-react"

export default function LoginPreview() {
  const [hidePassword, setHidePassword] = useState(true)

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-1 flex-col items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-[400px]">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-full bg-gray-200"></div>
          </div>

          <h1 className="text-2xl font-semibold text-center mb-1">Seja bem vindo(a)!</h1>
          <p className="text-sm text-gray-600 text-center mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm text-[#B8860B]">E-mail</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8860B]">
                  <User size={16} />
                </div>
                <input
                  type="email"
                  placeholder="mail@email.com"
                  className="w-full rounded bg-gray-50 border border-gray-200 py-2.5 pl-10 pr-3 text-sm outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-[#B8860B]">Senha</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8860B]">
                  <Lock size={16} />
                </div>
                <input
                  type={hidePassword ? "password" : "text"}
                  placeholder="••••••••"
                  className="w-full rounded bg-gray-50 border border-gray-200 py-2.5 pl-10 pr-10 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setHidePassword(!hidePassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {hidePassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
              </div>
            </div>

            <div className="text-sm">
              Esqueceu a senha?{" "}
              <a href="#" className="font-medium">
                Clique aqui!
              </a>
            </div>

            <button
              type="button"
              className="w-full bg-[#B8860B] text-white py-2.5 rounded font-medium hover:bg-[#a67719] transition-colors"
            >
              ENTRAR
            </button>
          </div>

          <div className="flex justify-between text-xs mt-auto pt-16">
            <a href="#" className="text-gray-700">
              TERMOS DE USO
            </a>
            <a href="#" className="text-gray-700">
              POLÍTICAS DE PRIVACIDADE
            </a>
            <a href="#" className="text-gray-700">
              CONTATO
            </a>
          </div>
        </div>
      </div>
      <div className="hidden bg-gray-200 flex-1 lg:block"></div>
    </div>
  )
}

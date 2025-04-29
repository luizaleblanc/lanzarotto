"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Monitor, Users, Mic2, FileText, BarChart3, KeyRound, ChevronDown, Eye, EyeOff, Camera } from "lucide-react"
import PageTransition from "../../components/page-transition"

export default function NewCollaboratorForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <PageTransition>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <header className="bg-black text-white py-3 px-6 flex justify-between items-center sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h1 className="text-base font-medium">Nome do projeto</h1>
              <p className="text-xs text-gray-400">DESCRIÇÃO COMPLETA</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden">{/* User avatar would go here */}</div>
              <div>
                <p className="text-xs text-gray-400">Seja bem vindo!</p>
                <p className="text-sm">Nome do Usuário</p>
              </div>
            </div>
            <ChevronDown size={16} />
          </div>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-[212px] bg-[#f2f2f2]">
            <nav>
              <ul>
                <li>
                  <button
                    className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors w-full text-left"
                    onClick={() => handleNavigation("/dashboard")}
                  >
                    <Monitor size={20} />
                    DASHBOARD
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors w-full text-left"
                    onClick={() => handleNavigation("/users")}
                  >
                    <Users size={20} />
                    USUÁRIOS
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors w-full text-left"
                    onClick={() => handleNavigation("/musicians")}
                  >
                    <Mic2 size={20} />
                    MÚSICOS
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors w-full text-left"
                    onClick={() => handleNavigation("/requests")}
                  >
                    <FileText size={20} />
                    SOLICITAÇÕES
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors w-full text-left"
                    onClick={() => handleNavigation("/financial")}
                  >
                    <BarChart3 size={20} />
                    FINANCEIRO
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center gap-3 py-4 px-6 bg-[#B8860B] text-white font-medium hover:bg-[#9e7609] transition-colors w-full text-left"
                    onClick={() => handleNavigation("/access")}
                  >
                    <KeyRound size={20} />
                    ACESSOS
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-white overflow-auto">
            {/* Breadcrumb */}
            <div className="mb-4">
              <h2 className="text-sm font-medium text-gray-500 uppercase">ACESSOS</h2>
            </div>

            {/* Page Title */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold">Novo colaborador</h1>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
              <div className="flex flex-col md:flex-row gap-12">
                {/* Form Fields */}
                <div className="flex-1">
                  {/* Dados do colaborador */}
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">Dados do colaborador</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Nome</label>
                        <input
                          type="text"
                          placeholder="Exemplo Preenchido"
                          className="w-full h-[40px] px-4 py-2 bg-gray-100 border border-gray-200 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">CPF</label>
                        <input
                          type="text"
                          placeholder="000000000-00"
                          className="w-full h-[40px] px-4 py-2 bg-gray-100 border border-gray-200 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Acesso */}
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">Acesso</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">E-mail</label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8860B]">
                            <Users size={16} />
                          </div>
                          <input
                            type="email"
                            placeholder="mail@email.com"
                            className="w-full h-[40px] pl-10 pr-3 py-2 bg-gray-100 border border-gray-200 rounded-md"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Senha</label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B8860B]">
                            <KeyRound size={16} />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="**********"
                            className="w-full h-[40px] pl-10 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Permissão */}
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Permissão</h2>
                    <div className="mb-4">
                      <label className="block text-sm text-gray-600 mb-1">Select access</label>
                      <div className="relative">
                        <select className="w-full h-[40px] px-4 py-2 bg-gray-100 border border-gray-200 rounded-md appearance-none">
                          <option>Admin</option>
                          <option>Editor</option>
                          <option>Viewer</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      </div>
                    </div>

                    {/* Módulos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-100 p-4 rounded-md">
                        <span>Dashboard</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-md">
                        <span>Módulos</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-md">
                        <span>Módulos</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-md">
                        <span>Módulos</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-md">
                        <span>Módulos</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-md">
                        <span>Módulos</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="w-full md:w-auto flex flex-col items-center">
                  <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-2 relative">
                    <div className="text-gray-400">
                      <Users size={48} />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-[#B8860B] rounded-full p-2">
                      <Camera size={16} className="text-white" />
                    </div>
                  </div>
                  <p className="text-sm font-medium">Adicione uma foto</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => router.push("/access")}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => router.push("/access")}
                className="px-6 py-2 bg-[#B8860B] text-white rounded-md hover:bg-[#9e7609] transition-colors"
              >
                Salvar
              </button>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  )
}

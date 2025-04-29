"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Monitor,
  Users,
  Mic2,
  FileText,
  BarChart3,
  KeyRound,
  ChevronDown,
  Search,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import PageTransition from "../components/page-transition"

// Dados de exemplo para a tabela de acessos
const accessData = [
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Ativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Inativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Ativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Inativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Ativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Ativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Inativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Ativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Inativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Ativo" },
  { id: "00000", name: "Anderson", email: "mail@gmail.com", access: "Admin", status: "Inativo" },
]

export default function AccessPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
    setMobileMenuOpen(false)
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
                    className="flex items-center gap-3 py-4 px-6 bg-[#B8860B] text-white font-medium hover:bg-[#a67719] transition-colors w-full text-left"
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
              <h1 className="text-2xl font-bold">Acessos</h1>
            </div>

            {/* Search and Filter */}
            <div className="flex justify-between mb-6 items-center">
              <div className="flex gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar"
                    className="w-[322px] h-[40px] py-0 px-4 pr-10 bg-[#f2f2f2] border border-[#e5e5e5] rounded text-sm"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <div className="relative">
                  <select className="w-[180px] h-[40px] appearance-none py-0 px-4 pr-10 bg-[#f2f2f2] border border-[#e5e5e5] rounded text-sm">
                    <option>Todos</option>
                    <option>Ativos</option>
                    <option>Inativos</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              <button
                className="w-[220px] h-[40px] bg-[#B8860B] text-white rounded-md uppercase font-medium text-sm tracking-wide hover:bg-[#9e7609] transition-colors"
                onClick={() => router.push("/access/new")}
              >
                NOVO COLABORADOR
              </button>
            </div>

            {/* Access Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                      <div className="flex items-center">
                        ID
                        <ChevronDown size={16} className="ml-1" />
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                      <div className="flex items-center">
                        Nome
                        <ChevronDown size={16} className="ml-1" />
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                      <div className="flex items-center">
                        Email
                        <ChevronDown size={16} className="ml-1" />
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                      <div className="flex items-center">
                        Acesso
                        <ChevronDown size={16} className="ml-1" />
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                      <div className="flex items-center">
                        Status
                        <ChevronDown size={16} className="ml-1" />
                      </div>
                    </th>
                    <th className="py-3 px-4 text-center text-sm font-medium text-gray-500"></th>
                  </tr>
                </thead>
                <tbody>
                  {accessData.map((user, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm">{user.id}</td>
                      <td className="py-3 px-4 text-sm">{user.name}</td>
                      <td className="py-3 px-4 text-sm">{user.email}</td>
                      <td className="py-3 px-4 text-sm">{user.access}</td>
                      <td className="py-3 px-4 text-sm">
                        <span
                          className={`px-4 py-1 rounded-full text-xs ${
                            user.status === "Ativo" ? "bg-[#C5E1A5] text-gray-800" : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button className="text-gray-500 hover:text-gray-700">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center mt-6">
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100">
                  <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B8860B] text-white">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-[#B8860B] hover:text-white transition-colors">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-[#B8860B] hover:text-white transition-colors">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </PageTransition>
  )
}

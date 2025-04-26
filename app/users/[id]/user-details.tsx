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
  Menu,
  X,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Dados de exemplo para o usuário
const userData = {
  id: "00000",
  name: "Marina Silva",
  email: "mail@gmail.com",
  phone: "(00) 00000-0000",
  uf: "BA",
  city: "Salvador",
}

// Dados de exemplo para as solicitações do usuário
const requestsData = [
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "--------",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Ativa",
  },
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "Nome do profissional",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Encerrada",
  },
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "--------",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Ativa",
  },
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "Nome do profissional",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Encerrada",
  },
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "--------",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Ativa",
  },
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "Nome do profissional",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Encerrada",
  },
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "--------",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Ativa",
  },
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "Nome do profissional",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Encerrada",
  },
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "--------",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Ativa",
  },
  {
    date: "00/00/00",
    type: "Sertanejo",
    professional: "Nome do profissional",
    uf: "BA",
    city: "Salvador",
    value: "R$ 00,00",
    status: "Encerrada",
  },
]

export default function UserDetails({ userId }: { userId: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const router = useRouter()

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-black text-white py-3 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h1 className="text-sm md:text-base font-medium">Nome do projeto</h1>
            <p className="text-[10px] md:text-xs text-gray-400">DESCRIÇÃO COMPLETA</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="md:flex items-center gap-3 hidden">
            <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden">
              {/* Espaço vazio para foto do usuário */}
            </div>
            <div>
              <p className="text-xs text-gray-400">Seja bem vindo!</p>
              <p className="text-sm">Nome do usuário</p>
            </div>
          </div>
          <ChevronDown size={16} className="hidden md:block" />
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-[57px] bottom-0 w-[200px] bg-gray-100 z-30 transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:z-0`}
        >
          <nav>
            <ul>
              <li>
                <a
                  href="/dashboard"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/dashboard")
                    setMobileMenuOpen(false)
                  }}
                >
                  <Monitor size={20} />
                  DASHBOARD
                </a>
              </li>
              <li>
                <a
                  href="/users"
                  className="flex items-center gap-3 py-4 px-6 bg-[#B8860B] text-white font-medium hover:bg-[#a67719] transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/users")
                    setMobileMenuOpen(false)
                  }}
                >
                  <Users size={20} />
                  USUÁRIOS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mic2 size={20} />
                  MÚSICOS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText size={20} />
                  SOLICITAÇÕES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BarChart3 size={20} />
                  FINANCEIRO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-[#B8860B] hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <KeyRound size={20} />
                  ACESSOS
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 bg-white overflow-auto">
          {/* Breadcrumb */}
          <div className="mb-4">
            <h2 className="text-sm font-medium text-gray-500 uppercase">USUÁRIOS</h2>
          </div>

          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Detalhes do usuário</h1>
          </div>

          {/* User Details Card */}
          <div className="bg-white rounded-lg shadow mb-8 relative">
            <div className="absolute right-6 top-6">
              <div className="flex items-center">
                <label className="switch">
                  <input type="checkbox" checked={isActive} onChange={() => setIsActive(!isActive)} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* User Avatar */}
              <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>

              {/* User Info */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 w-full">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Nome</h3>
                  <p>Marina Silva</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p>mail@email.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Telefone</h3>
                  <p>(00) 00000-0000</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Estado</h3>
                  <p>BA</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Cidade</h3>
                  <p>Salvador</p>
                </div>
              </div>
            </div>
          </div>

          {/* Requests Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Solicitações</h2>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
              <div className="relative">
                <select className="w-full appearance-none py-2 px-4 pr-10 bg-gray-100 border border-gray-200 rounded text-sm">
                  <option>Data</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="relative">
                <select className="w-full appearance-none py-2 px-4 pr-10 bg-gray-100 border border-gray-200 rounded text-sm">
                  <option>Tipo</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="relative">
                <select className="w-full appearance-none py-2 px-4 pr-10 bg-gray-100 border border-gray-200 rounded text-sm">
                  <option>Profissional</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="relative">
                <select className="w-full appearance-none py-2 px-4 pr-10 bg-gray-100 border border-gray-200 rounded text-sm">
                  <option>UF</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="relative">
                <select className="w-full appearance-none py-2 px-4 pr-10 bg-gray-100 border border-gray-200 rounded text-sm">
                  <option>Cidade</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="relative">
                <select className="w-full appearance-none py-2 px-4 pr-10 bg-gray-100 border border-gray-200 rounded text-sm">
                  <option>Valor</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <div className="relative md:col-start-6 md:col-end-7">
                <select className="w-full appearance-none py-2 px-4 pr-10 bg-gray-100 border border-gray-200 rounded text-sm">
                  <option>Status</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            {/* Requests Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <tbody>
                  {/* Row 1 */}
                  <tr className="border-t border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">--------</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-[#C5D69D] text-gray-800">Ativa</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">Nome do profissional</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-gray-200 text-gray-800">Encerrada</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">--------</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-[#C5D69D] text-gray-800">Ativa</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">Nome do profissional</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-gray-200 text-gray-800">Encerrada</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">--------</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-[#C5D69D] text-gray-800">Ativa</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">Nome do profissional</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-gray-200 text-gray-800">Encerrada</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 7 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">--------</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-[#C5D69D] text-gray-800">Ativa</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 8 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">Nome do profissional</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-gray-200 text-gray-800">Encerrada</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 9 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">--------</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-[#C5D69D] text-gray-800">Ativa</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 10 */}
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">00/00/00</td>
                    <td className="py-3 px-4 text-sm">Sertanejo</td>
                    <td className="py-3 px-4 text-sm">Nome do profissional</td>
                    <td className="py-3 px-4 text-sm">BA</td>
                    <td className="py-3 px-4 text-sm">Salvador</td>
                    <td className="py-3 px-4 text-sm">R$ 00,00</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="px-4 py-1 rounded-full text-xs bg-gray-200 text-gray-800">Encerrada</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
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
          </div>
        </main>
      </div>
    </div>
  )
}

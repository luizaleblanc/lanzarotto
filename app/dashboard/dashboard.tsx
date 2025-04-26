"use client"

import { useState } from "react"
import {
  Monitor,
  Users,
  Mic2,
  FileText,
  BarChart3,
  KeyRound,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  FileIcon,
  Menu,
  X,
} from "lucide-react"

// Dados fixos para o gráfico
const chartData = [
  { month: "Jan", year: "2019", users: 42500, financial: 58000 },
  { month: "Fev", year: "2019", users: 45000, financial: 62000 },
  { month: "Mar", year: "2019", users: 47500, financial: 59000 },
  { month: "Abr", year: "2019", users: 43000, financial: 61000 },
  { month: "Mai", year: "2019", users: 48000, financial: 63000 },
  { month: "Jun", year: "2019", users: 51000, financial: 67000 },
  { month: "Jul", year: "2019", users: 49000, financial: 64000 },
  { month: "Ago", year: "2019", users: 52000, financial: 68000 },
  { month: "Set", year: "2019", users: 54000, financial: 70000 },
  { month: "Out", year: "2019", users: 56000, financial: 72000 },
  { month: "Nov", year: "2019", users: 58000, financial: 74000 },
  { month: "Dez", year: "2019", users: 60000, financial: 76000 },
]

// Valor máximo para calcular a altura relativa das barras
const maxValue = Math.max(...chartData.map((item) => Math.max(item.users, item.financial)))

export default function Dashboard() {
  const [dateRange, setDateRange] = useState("1 de Mar de 2023 a 9 de Mar de 2023")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredBar, setHoveredBar] = useState<{
    index: number
    type: "users" | "financial" | null
    value: number
    x: number
    y: number
  } | null>(null)

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
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 bg-[#B8860B] text-white font-medium hover:bg-[#a67719] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Monitor size={20} />
                  DASHBOARD
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Users size={20} />
                  USUÁRIOS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mic2 size={20} />
                  MÚSICOS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText size={20} />
                  SOLICITAÇÕES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BarChart3 size={20} />
                  FINANCEIRO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 py-4 px-6 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
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
          {/* Date Range Selector */}
          <div className="flex justify-end mb-4 md:mb-6">
            <div className="relative">
              <button className="flex items-center gap-2 bg-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded text-xs md:text-sm">
                {dateRange}
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Users Card */}
            <div className="bg-white rounded-lg shadow p-4 md:p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">83.706</h2>
                <p className="text-sm text-gray-500">Usuários</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-emerald-500 flex items-center text-xs md:text-sm">
                  <TrendingUp size={16} />
                  50,2%
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B8860B] rounded-full flex items-center justify-center mt-2">
                  <Users size={16} className="text-white md:size-20" />
                </div>
              </div>
            </div>

            {/* Musicians Card */}
            <div className="bg-white rounded-lg shadow p-4 md:p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">022</h2>
                <p className="text-sm text-gray-500">Músicos</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-red-500 flex items-center text-xs md:text-sm">
                  <TrendingDown size={16} />
                  50,2%
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center mt-2">
                  <Mic2 size={16} className="text-white md:size-20" />
                </div>
              </div>
            </div>

            {/* Financial Card */}
            <div className="bg-white rounded-lg shadow p-4 md:p-6 flex justify-between items-center">
              <div>
                <h2 className="text-lg md:text-2xl font-bold">R$ 300000,00</h2>
                <p className="text-sm text-gray-500">Total em caixa</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-red-500 flex items-center text-xs md:text-sm">
                  <TrendingDown size={16} />
                  50,2%
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-500 rounded-full flex items-center justify-center mt-2">
                  <BarChart3 size={16} className="text-white md:size-20" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts and Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Chart */}
            <div className="bg-white rounded-lg shadow p-4 md:p-6 lg:col-span-2">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-medium text-gray-600">Usuários x Financeiro</h3>
              </div>

              <div className="relative pt-6 pb-10">
                {/* Valor no eixo Y */}
                <div className="absolute -top-1 left-2 text-xs text-gray-500 bg-white px-2 py-0.5 rounded-full border border-gray-200 z-10">
                  00000
                </div>

                {/* Container do gráfico com linhas horizontais */}
                <div className="relative h-64 w-full">
                  {/* Linhas horizontais de grade */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full border-t border-gray-200"></div>
                    ))}
                  </div>

                  {/* Barras do gráfico */}
                  <div className="absolute inset-0 flex justify-between items-end">
                    {chartData.map((data, index) => {
                      const userHeight = (data.users / maxValue) * 100
                      const financialHeight = (data.financial / maxValue) * 100

                      return (
                        <div key={index} className="flex flex-col items-center">
                          <div className="flex space-x-1 h-full items-end">
                            {/* Barra de Usuários */}
                            <div
                              className="w-3 md:w-4 bg-[#B8860B] cursor-pointer transition-all hover:opacity-80"
                              style={{ height: `${userHeight}%` }}
                              onMouseEnter={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect()
                                setHoveredBar({
                                  index,
                                  type: "users",
                                  value: data.users,
                                  x: rect.left + window.scrollX,
                                  y: rect.top + window.scrollY,
                                })
                              }}
                              onMouseLeave={() => setHoveredBar(null)}
                            ></div>

                            {/* Barra de Financeiro */}
                            <div
                              className="w-3 md:w-4 bg-black cursor-pointer transition-all hover:opacity-80"
                              style={{ height: `${financialHeight}%` }}
                              onMouseEnter={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect()
                                setHoveredBar({
                                  index,
                                  type: "financial",
                                  value: data.financial,
                                  x: rect.left + window.scrollX,
                                  y: rect.top + window.scrollY,
                                })
                              }}
                              onMouseLeave={() => setHoveredBar(null)}
                            ></div>
                          </div>
                          <div className="text-[10px] md:text-xs text-gray-500 mt-2 text-center">
                            <div>{data.month}</div>
                            <div className="text-[8px] md:text-[10px]">{data.year}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Tooltip */}
                  {hoveredBar && (
                    <div
                      className="absolute bg-white shadow-lg rounded-md px-3 py-2 text-xs z-50 border border-gray-200 pointer-events-none"
                      style={{
                        left: `${hoveredBar.x - 50}px`,
                        top: `${hoveredBar.y - 60}px`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="font-medium">
                        {chartData[hoveredBar.index].month}/{chartData[hoveredBar.index].year}
                      </div>
                      <div className="flex items-center mt-1">
                        <div
                          className="w-2 h-2 mr-1"
                          style={{
                            backgroundColor: hoveredBar.type === "users" ? "#B8860B" : "black",
                          }}
                        ></div>
                        <span>
                          {hoveredBar.type === "users" ? "Novos usuários: " : "Financeiro: "}
                          {hoveredBar.type === "financial"
                            ? `R$ ${hoveredBar.value.toLocaleString()}`
                            : hoveredBar.value.toLocaleString()}
                        </span>
                      </div>
                      <div className="absolute w-2 h-2 bg-white border-b border-r border-gray-200 transform rotate-45 left-1/2 -bottom-1 -ml-1"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Legenda */}
              <div className="flex items-center justify-start mt-4 space-x-8 px-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#B8860B] mr-2"></div>
                  <span className="text-xs md:text-sm text-gray-500">Novos usuários</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-black mr-2"></div>
                  <span className="text-xs md:text-sm text-gray-500">Financeiro</span>
                </div>
              </div>
            </div>

            {/* Latest Requests */}
            <div className="bg-white rounded-lg shadow p-4 md:p-6">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-medium">Últimas solicitações</h3>
                <button className="text-[10px] md:text-xs text-gray-500 hover:underline">Mostrar todos</button>
              </div>

              <div className="space-y-3 md:space-y-4">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="p-3 md:p-4 border rounded-lg">
                    <div className="flex items-start gap-2 md:gap-3">
                      <FileIcon className="text-gray-500 mt-1" size={18} />
                      <div>
                        <p className="font-medium text-sm md:text-base">#01201200</p>
                        <p className="text-xs md:text-sm">Nome do músico</p>
                        <p className="text-[10px] md:text-xs text-gray-500">00/00/00</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

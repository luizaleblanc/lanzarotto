/**
 * Este arquivo contém polyfills necessários para o Angular e é carregado antes da aplicação.
 * Você pode adicionar seus próprios polyfills extras para este arquivo.
 *
 * Este arquivo é dividido em 2 seções:
 *   1. Polyfills de navegador. São aplicados antes de carregar o ZoneJS e são ordenados por navegadores.
 *   2. Importações de aplicação. Arquivos importados após ZoneJS que devem ser carregados antes da sua aplicação principal.
 *
 * Os polyfills atuais são configurados para o desenvolvimento e são otimizados para o desenvolvimento rápido.
 * Para ambientes de produção, considere apenas incluir os polyfills necessários para os navegadores alvo.
 */

import 'zone.js';  // Inclui zone.js para suporte ao Angular. 
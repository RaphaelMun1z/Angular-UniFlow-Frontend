import { Operation, Tab } from "../interfaces/User.model";

export const ADMIN_NAVIGATION_TABS: Tab[] = [
    { id: 'dashboard', label: 'Dashboard', route: 'teste' },
    { id: 'logs', label: 'Logs de Atividade', route: 'teste' },
    { id: 'reports', label: 'Relatórios', route: 'teste' },
];

export const ADMIN_OPERATIONS: Operation[] = [
    // Adicionei 'tabId' para associar a operação a uma aba
    { id: 1, tabId: 'dashboard', title: 'Criar Novo Usuário', description: 'Adicionar um novo professor ou aluno', icon: 'person_add', iconBgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
    { id: 2, tabId: 'reports', title: 'Gerar Relatório Geral', description: 'Exportar dados de uso da plataforma', icon: 'assessment', iconBgColor: 'bg-green-100', iconColor: 'text-green-600' }
];


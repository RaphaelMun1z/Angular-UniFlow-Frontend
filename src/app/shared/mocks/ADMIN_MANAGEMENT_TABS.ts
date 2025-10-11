import { Operation, Tab } from "../interfaces/User.model";

export const ADMIN_NAVIGATION_TABS: Tab[] = [
    { id: 'dashboard', label: 'Dashboard', route: '/admin/dashboard' },
    { id: 'logs', label: 'Logs de Atividade', route: '/admin/logs' },
    { id: 'reports', label: 'Relatórios', route: '/admin/reports' },
];

export const ADMIN_OPERATIONS: Operation[] = [
    // Adicionei 'tabId' para associar a operação a uma aba
    { id: 1, tabId: 'dashboard', title: 'Criar Novo Usuário', description: 'Adicionar um novo professor ou aluno', icon: 'person_add', iconBgColor: 'bg-blue-100', iconColor: 'text-blue-600', route: '/admin/users/new' },
    { id: 2, tabId: 'reports', title: 'Gerar Relatório Geral', description: 'Exportar dados de uso da plataforma', icon: 'assessment', iconBgColor: 'bg-green-100', iconColor: 'text-green-600', route: '/admin/reports' }
];


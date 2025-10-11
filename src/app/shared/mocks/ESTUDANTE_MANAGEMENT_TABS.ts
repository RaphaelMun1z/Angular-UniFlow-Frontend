import { Operation, Tab } from "../interfaces/User.model";

export const ESTUDANTE_NAVIGATION_TABS: Tab[] = [
    { id: 'geral', label: 'Geral', route: '/student/dashboard' }, // Aba geral
    { id: 'pendentes', label: 'Pendentes', route: '/tasks/pendentes' },
    { id: 'atrasadas', label: 'Atrasadas', route: '/tasks/atrasadas' },
    { id: 'entregues', label: 'Entregues', route: '/tasks/entregues' },
    { id: 'avaliadas', label: 'Avaliadas', route: '/tasks/avaliadas' },
];

export const ESTUDANTE_OPERATIONS: Operation[] = [
    { id: 1, tabId: 'geral', title: 'Enviar Trabalho Pendente', description: 'Anexar e submeter sua atividade', icon: 'upload_file', iconBgColor: 'bg-teal-100', iconColor: 'text-teal-600', route: '/student/tasks/upload' },
    { id: 2, tabId: 'geral', title: 'Consultar Frequência', description: 'Visualizar seu histórico de presença', icon: 'event_available', iconBgColor: 'bg-purple-100', iconColor: 'text-purple-600', route: '/student/attendance' }
];


import { Operation, Tab } from "../interfaces/User.model";

export const ESTUDANTE_NAVIGATION_TABS: Tab[] = [
    { id: 'geral', label: 'Geral' }, // Aba geral
    { id: 'pendentes', label: 'Pendentes' },
    { id: 'atrasadas', label: 'Atrasadas' },
    { id: 'entregues', label: 'Entregues' },
    { id: 'avaliadas', label: 'Avaliadas' },
];

export const ESTUDANTE_OPERATIONS: Operation[] = [
    { id: 1, tabId: 'geral', title: 'Enviar Trabalho Pendente', description: 'Anexar e submeter sua atividade', icon: 'upload_file', iconBgColor: 'bg-teal-100', iconColor: 'text-teal-600'},
    { id: 2, tabId: 'geral', title: 'Consultar Frequência', description: 'Visualizar seu histórico de presença', icon: 'event_available', iconBgColor: 'bg-purple-100', iconColor: 'text-purple-600'}
];


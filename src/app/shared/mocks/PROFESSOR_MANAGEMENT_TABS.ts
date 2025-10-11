import { Operation, Tab } from "../interfaces/User.model";

export const PROFESSOR_NAVIGATION_TABS: Tab[] = [
    { id: 'turmas', label: 'Grupos', route: '/professor/turmas' },
    { id: 'atividades', label: 'Atividades', route: '/professor/atividades' }
];

// Agora, cada operação pertence a uma 'tabId'
export const PROFESSOR_OPERATIONS: Operation[] = [
    // Operações da Aba 'turmas'
    { id: 1, tabId: 'turmas', title: 'Listar Meus Grupos', description: 'Veja e gerencie todos os seus grupos.', icon: 'groups', iconBgColor: 'bg-blue-100', iconColor: 'text-blue-600', route: '/professor/turmas/list' },
    { id: 2, tabId: 'turmas', title: 'Criar Novo Grupo', description: 'Inicie um novo grupo de estudos ou turma.', icon: 'group_add', iconBgColor: 'bg-green-100', iconColor: 'text-green-600', route: '/professor/turmas/new' },
    { id: 3, tabId: 'turmas', title: 'Editar Grupo', description: 'Modifique informações de um grupo existente.', icon: 'edit', iconBgColor: 'bg-gray-100', iconColor: 'text-gray-600', route: '/professor/turmas/edit' },
    { id: 4, tabId: 'turmas', title: 'Deletar Grupo', description: 'Remova um grupo que não está mais ativo.', icon: 'delete', iconBgColor: 'bg-red-100', iconColor: 'text-red-600', route: '/professor/turmas/delete' },
    
    // Operações da Aba 'atividades'
    { id: 5, tabId: 'atividades', title: 'Listar Todas Atividades', description: 'Visualize todas as tarefas e provas lançadas.', icon: 'list_alt', iconBgColor: 'bg-purple-100', iconColor: 'text-purple-600', route: '/professor/activities/list' },
    { id: 6, tabId: 'atividades', title: 'Cadastrar Nova Atividade', description: 'Elabore e publique uma nova tarefa ou prova.', icon: 'add_task', iconBgColor: 'bg-yellow-100', iconColor: 'text-yellow-600', route: '/professor/activities/new' },
    { id: 7, tabId: 'atividades', title: 'Editar Atividade', description: 'Corrija ou atualize uma atividade existente.', icon: 'edit_document', iconBgColor: 'bg-gray-100', iconColor: 'text-gray-600', route: '/professor/activities/edit' },
    { id: 8, tabId: 'atividades', title: 'Deletar Atividade', description: 'Remova uma atividade do sistema.', icon: 'delete_forever', iconBgColor: 'bg-red-100', iconColor: 'text-red-600', route: '/professor/activities/delete' }
];
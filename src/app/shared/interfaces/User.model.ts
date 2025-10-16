// user.model.ts
export interface UserInfo {
    email: string;
    role: UserRole;
}

export interface Tab {
    id: string;
    label: string;
    route: string;
}

export interface Operation {
    id: number;
    title: string;
    description: string;
    icon: string;
    iconBgColor: string;
    iconColor: string;
    tabId: string;
}

export type ActivityStatus = 'current' | 'pending' | 'completed' | 'failed';

export interface ActivityOwner {
    name: string;
    role: string;
    avatar: string;
}

export interface ActivityUpdate {
    text: string;
    time: string;
    authorAvatar: string;
}

export interface Activity {
    id: string;
    icon: string;
    iconIsUrl: boolean;
    company: string;
    statusTag: {
        text: string;
        color: string;
    };
    title: string;
    tags: string[];
    owner: ActivityOwner | undefined;
    status: ActivityStatus;
    highlighted?: boolean;
    progress: number;
    recentUpdates: ActivityUpdate[];
    dueDate: string;
}

export interface CurrentUser {
    nome: string;
    email: string;
    avatarUrl: string;
    role: 'ESTUDANTE' | 'PROFESSOR' | 'ADMIN';
}

export type UserRole = 'admin' | 'professor' | 'estudante';

export interface User {
    id: string;
    name: string;
    avatar: string;
    role: UserRole;
}

export interface NavLink {
    label: string;
    icon: string;
}

export interface CourseProgress {
    title: string;
    watched: number;
    total: number;
    icon: string;
    color: string;
}

export interface MediaContent {
    title: string;
    category: string;
    mentor: string;
    mentorName: string;
    mentorAvatar: string;
    thumbnailUrl: string;
}

export interface Lesson {
    mentor: string;
    mentorAvatar: string;
    type: string;
    description: string;
    date: string;
}

export interface SubscriptionPlan {
    name: string;
    subscribers: number;
}


export interface Comment {
    id: string;
    author: User;
    content: string;
    timestamp: string;
}

export interface Post {
    id: string;
    author: User;
    content: string;
    timestamp: string;
    commentsCount: number;
    likesCount: number;
    likedByUser: boolean;
    comments: Comment[];
}

export interface ActivityResume {
    id: string;
    title: string;
    dueDate: string;
}

export interface GroupDetails {
    id: string;
    title: string;
    professor: User;
    memberCount: number;
    membersSample: User[];
}

export type GroupTab = 'visaoGeral' | 'atividades' | 'membros' | 'materiais' | 'discussoes';

export interface StudentGroup {
    name: string;
    type: 'Turma' | 'Grupo de Estudo'; // Usando tipos literais para mais segurança
    members: string;
    creator: string;
    status: 'Ativo' | 'Inativo';
}

export interface ProfessorGroup {
    id: string;
    title: string;
    description: string;
    type: 'Turma' | 'Grupo de Estudo';
    status: 'Ativo' | 'Arquivado';
    bannerUrl: string;
    memberCount: number;
    pendingRequests: number;
}

export interface NotificacaoViewModel {
    id: string;
    mensagem: string;
    contexto: string;
    timestamp: string;
    lida: boolean;
    link: string;
}

export const mockApiResponse = {
    content: [
        { id: '1', mensagem: 'Sua atividade <strong>Relatório de Física</strong> foi avaliada.', contexto: 'Turma: Física Quântica', timestamp: 'há 5 minutos', lida: false, link: '/atividades-entrega/uuid-1' },
        { id: '2', mensagem: 'Nova atividade: <strong>Trabalho de Cálculo III</strong>', contexto: 'Turma: Matemática Avançada', timestamp: 'há 2 horas', lida: false, link: '/atividades-avaliativas/uuid-2' },
        { id: '3', mensagem: '<strong>Professor Teste</strong> adicionou você ao grupo <strong>Projeto de Banco de Dados</strong>.', contexto: 'Grupo de Estudo', timestamp: 'Ontem', lida: true, link: '/grupos/uuid-3' },
        { id: '4', mensagem: 'O prazo para <strong>API de Pagamentos</strong> está se esgotando.', contexto: 'Grupo: Projeto de Banco de Dados', timestamp: 'há 2 dias', lida: true, link: '/atividades-colaborativas/uuid-4' },
    ],
    currentPage: 0,
    totalPages: 4,
    totalElements: 20
};

export interface UsuarioViewModel {
    id: string;
    nome: string;
    email: string;
    avatarUrl: string;
    papel: string;
    papelClass: string;
    status: string;
    statusClass: string;
    dataCadastro: string;
}

export const TODOS_OS_USUARIOS: UsuarioViewModel[] = [
    { id: '1', nome: 'Ana Silva', email: 'ana.silva@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=1', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-01-10' },
    { id: '2', nome: 'Bruno Costa', email: 'bruno.costa@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=2', papel: 'Professor', papelClass: 'text-blue-800 bg-blue-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-01-12' },
    { id: '3', nome: 'Carla Dias', email: 'carla.dias@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=3', papel: 'Admin', papelClass: 'text-red-800 bg-red-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-01-15' },
    { id: '4', nome: 'Daniel Martins', email: 'daniel.martins@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=4', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Inativo', statusClass: 'text-yellow-800 bg-yellow-100', dataCadastro: '2025-02-01' },
    { id: '5', nome: 'Eduarda Ferreira', email: 'eduarda.ferreira@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=5', papel: 'Professor', papelClass: 'text-blue-800 bg-blue-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-02-05' },
    { id: '6', nome: 'Fábio Gomes', email: 'fabio.gomes@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=6', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-02-10' },
    { id: '7', nome: 'Gabriela Lima', email: 'gabriela.lima@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=7', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-03-11' },
    { id: '8', nome: 'Heitor Souza', email: 'heitor.souza@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=8', papel: 'Professor', papelClass: 'text-blue-800 bg-blue-100', status: 'Inativo', statusClass: 'text-yellow-800 bg-yellow-100', dataCadastro: '2025-03-14' },
    { id: '9', nome: 'Isabela Rocha', email: 'isabela.rocha@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=9', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-03-20' },
    { id: '10', nome: 'Juliano Nogueira', email: 'juliano.nogueira@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=10', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-04-01' },
    { id: '11', nome: 'Larissa Mendes', email: 'larissa.mendes@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=11', papel: 'Estudante', papelClass: 'text-gray-800 bg-gray-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-04-05' },
    { id: '12', nome: 'Marcos Andrade', email: 'marcos.andrade@email.com', avatarUrl: 'https://i.pravatar.cc/150?u=12', papel: 'Professor', papelClass: 'text-blue-800 bg-blue-100', status: 'Ativo', statusClass: 'text-green-800 bg-green-100', dataCadastro: '2025-04-10' },
];

export interface NovoUsuario {
    semestreIngresso: string;
    senha: string;
    anoIngresso: string;
    areaAtuacao: string;
    id: number;
    nome: string;
    email: string;
    avatarUrl: string;
    papel: 'Admin' | 'Professor' | 'Estudante';
    status: 'Ativo' | 'Inativo';
    dataCadastro: string;
    papelClass: string;
    statusClass: string;
    tipo: string;
}

export interface Group {
    logo: string;
    logoBgColor: string;
    title: string;
    description: string;
    tags: string[];
    status: string;
}

export interface Group2 {
    id: string;
    name: string;
    type: string;
    members: string;
    creationDate: string;
    status: string;
}

export interface StatusOption {
    key: string;
    label: string;
}

export interface RoleConfig {
    title: string;
    subtitle: string;
    description: string;
    statusOptions: StatusOption[];
}

export interface DecodedToken{
    roles: string[];
}

export interface GrupoApiResponse {
    id: string;
    titulo: string;
    tipo: string;
    criadorNome: string;
    criadorEmail: string;
    criadorAvatarUrl: string;
    numMembros: number;
    disciplinaNome: string;
    dataCriacao: Date;
    status: string;
    statusClass: string;
}

export interface PagedResponse<T> {
    content: T[];
    currentPage: number;
    totalPages: number;
    totalElements: number;
}
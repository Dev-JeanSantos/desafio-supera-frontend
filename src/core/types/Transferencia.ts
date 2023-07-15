export type TransferenciaResponse = {
    content: Transferencia[];
    totalPages: number
}

export type Transferencia = {
    dataTransferencia: string;
    valor: number;
    tipo: string;
    nomeOperadorTransacao: string;
    contaId: number;
}
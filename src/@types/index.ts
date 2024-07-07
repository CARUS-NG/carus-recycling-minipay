export interface GeneralApiResponse<D> {
    data: D;
    error: unknown[]
    message: string
    status: number
}
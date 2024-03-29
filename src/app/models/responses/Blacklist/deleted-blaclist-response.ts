export interface DeletedBlaclistResponse {
    id: number;
    reason: string;
    date: Date;
    applicantId: string;
    deletedDate: Date;
}

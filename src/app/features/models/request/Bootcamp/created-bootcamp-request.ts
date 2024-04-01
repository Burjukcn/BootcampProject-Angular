export interface CreatedBootcampRequest {
    name: string;
    instructorId: string;
    startDate: Date;
    endDate: Date;
    bootcampStateId: number;
    bootcampImageId: number;
}

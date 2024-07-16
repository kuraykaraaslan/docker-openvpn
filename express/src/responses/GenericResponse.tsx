class GenericResponse {
    public timestamp: string;
    public status: number;
    public message: any;

    constructor(status: number, message: any) {
        this.timestamp = new Date().toISOString();
        this.status = status;
        this.message = message;
    }
}

export default GenericResponse;



export type CreateUserParams = {
    name: string;
    email_id: string;
    mobile_number: number;
};

export type UpdateUserParams = {
    name: string;
    email_id: string;
    mobile_number: number;
};

export type CreateUserAccountParams = {
    account_name: string;
    account_status: string;
}
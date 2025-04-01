
import { Contact } from "../types/api";
import axiosInstance from "./api";

export const getContacts = async (): Promise<Contact[]> => {
    try {
        const response = await axiosInstance.get("/contacts/get_all");
        return response.data;
    } catch (error) {
        console.error(error)
        throw new Error("Error fetching contacts");
    }
};

export const addContact = async (newContact: Contact): Promise<Contact> => {
    try {
        const response = await axiosInstance.post("/contacts/create", newContact);
        return response.data.contact;
    } catch (error) {
        throw new Error("Error adding contact");
    }
};


export const updateContact = async (id: number, updatedContact: Contact): Promise<Contact> => {
    try {
        const response = await axiosInstance.put(`/contacts/update/${id}`, updatedContact);
        return response.data;
    } catch (error) {
        throw new Error("Error updating contact");
    }
};


export const deleteContact = async (id: number): Promise<void> => {
    try {
        await axiosInstance.delete(`/contacts/delete/${id}`);
    } catch (error) {
        throw new Error("Error deleting contact");
    }
};

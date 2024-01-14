import httpRequest from '../utils/httpRequest';

interface GetParams {
    pageSize: number;
    pageIndex: number;
    search: string;
}

export const get = async ({ pageSize, pageIndex, search }: GetParams) => {
    try {
        const res = await httpRequest.get('api/book/GetById', {
            params: {
                pageSize,
                pageIndex,
                search,
            },
        });
        return {
            status: res.status,
            data: res.data,
            success: true,
            message: 'Successfully.',
        };
    } catch (error) {
        throw error;
    }
};

export const getById = async (id: string) => {
    try {
        const res = await httpRequest.get('api/book/GetById', {
            params: {
                id,
            },
        });
        return {
            status: res.status,
            data: res.data,
            success: true,
            message: 'Successfully.',
        };
    } catch (error) {
        throw error;
    }
};

export const addBook = async (bookData: any) => {
    try {
        const res = await httpRequest.post('api/book/Add', bookData);
        if (res.status === 200) {
            return {
                status: res.status,
                success: true,
                message: 'Book added successfully.',
            };
        } else {
            console.log('Failed to add book. Status: ', res.status);
            return {
                status: res.status,
                success: false,
                message: 'Failed to add book',
            };
        }
    } catch (error) {
        console.error('Error adding book: ', error);
        throw error;
    }
};

export const updateBook = async (id: string, updatedData: any) => {
    try {
        const res = await httpRequest.put(`api/book/Update/${id}`, updatedData);
        if (res.status === 200) {
            console.log('Book updated successfully.');
            return {
                status: res.status,
                success: true,
                message: 'Book updated successfully.',
            };
        } else {
            console.log('Failed to update book. Status:', res.status);
            return {
                status: res.status,
                success: false,
                message: 'Failed to updated book',
            };
        }
    } catch (error) {
        console.error('Error updating book:', error);
        throw error;
    }
};

export const deleteBook = async (id: string) => {
    try {
        const res = await httpRequest.delete(`api/book/Delete/${id}`);
        if (res.status === 200) {
            return {
                status: res.status,
                success: true,
                message: 'Book deleted successfully.',
            };
        } else {
            return {
                status: res.status,
                success: false,
                message: 'Failed to delete book.',
            };
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};

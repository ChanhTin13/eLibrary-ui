import * as httpRequest from '~/utils/httpRequest';

export const get = async (pageSize, pageIndex, search) => {
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
export const getById = async (id) => {
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
//  thêm
export const addBook = async (bookData) => {
    try {
        const res = await httpRequest.post('api/book/Add', bookData);
        // Kiểm tra trạng thái HTTP
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
        throw error; // Re-throw the error to handle it at a higher level if needed
    }
};

// Hàm sửa thông tin sách
export const updateBook = async (updatedData) => {
    try {
        const res = await httpRequest.put(`api/book/Update/${id}`, updatedData);
        // Kiểm tra trạng thái HTTP
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

// Hàm xóa sách
export const deleteBook = async (id) => {
    try {
        const res = await httpRequest.delete(`api/book/Delete/${id}`);
        // Kiểm tra trạng thái HTTP
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

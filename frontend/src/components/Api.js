import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks";

export const getAllTasks = async () => {
    const response = await axios.get(`${API_URL}/getall`);
    return response.data;
};

export const createTask = async (task) => {
    const response = await axios.post(`${API_URL}/create`, task);
    return response.data;
};

export const updateTask = async (id, task) => {
    const response = await axios.put(`${API_URL}/updateTask/${id}`, task);
    return response.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/deleteTask/${id}`);
};


// import axios from "axios";

// const API_BASE_URL = "http://localhost:8080/api/tasks"; // Adjust if needed

// export const getTasks = async () => {
//     try {
//         const response = await axios.get(API_BASE_URL);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching tasks", error);
//         return [];
//     }
// };

// export const createTask = async (task) => {
//     try {
//         await axios.post(API_BASE_URL, task, {
//             headers: { "Content-Type": "application/json" }
//         });
//     } catch (error) {
//         console.error("Error creating task", error);
//     }
// };

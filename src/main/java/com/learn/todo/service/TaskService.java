package com.learn.todo.service;

import com.learn.todo.model.Tasks;
import com.learn.todo.repository.TaskDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    TaskDAO taskDAO;

    public List<Tasks> getAll(){
        return taskDAO.findAll();
    }

    public Tasks createTask(Tasks tasks) {
        return taskDAO.save(tasks);
    }

    public String deleteTask(Integer id) {
        taskDAO.deleteById(id);
        return "success";
    }

    public Tasks updateTask(Integer id, Tasks tasks) {
        Tasks editTask = getTaskById(id);
        editTask.setTitle(tasks.getTitle());
        editTask.setDescription(tasks.getDescription());
        return taskDAO.save(editTask);
    }

    private Tasks getTaskById(Integer id) {
        return taskDAO.findById(id).orElseThrow(()-> new RuntimeException("Task not found"));
    }
}

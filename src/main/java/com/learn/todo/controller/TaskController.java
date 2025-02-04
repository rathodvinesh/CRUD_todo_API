package com.learn.todo.controller;

import com.learn.todo.model.Tasks;
import com.learn.todo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend to connect
public class TaskController {

    @Autowired
    TaskService taskService;

    @GetMapping("/getall")
    public List<Tasks> getAll(){
        return taskService.getAll();
    }

    @PostMapping("/create")
    public Tasks createTask(@RequestBody Tasks tasks){
        return taskService.createTask(tasks);
    }

    @DeleteMapping("/deleteTask/{id}")
    public String deleteTask(@PathVariable Integer id){
        return taskService.deleteTask(id);
    }

    @PutMapping("/updateTask/{id}")
    public Tasks updateTask(@PathVariable Integer id,@RequestBody Tasks tasks){
        return taskService.updateTask(id,tasks);
    }
}

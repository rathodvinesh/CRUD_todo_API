package com.learn.todo.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String title;
    private String description;
}

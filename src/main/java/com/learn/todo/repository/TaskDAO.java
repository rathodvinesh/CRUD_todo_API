package com.learn.todo.repository;

import com.learn.todo.model.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskDAO extends JpaRepository<Tasks,Integer> {
}

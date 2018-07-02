package com.leolai.course.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.leolai.course.models.Course;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
	List<Course> findAll();
	@Query("SELECT COUNT(u.id) FROM Course e JOIN e.users u WHERE e.id = ?1")
	List<Object[]> countPeople(Long id);
}
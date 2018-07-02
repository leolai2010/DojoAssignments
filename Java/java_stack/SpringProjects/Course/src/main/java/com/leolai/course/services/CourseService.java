package com.leolai.course.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.leolai.course.models.Course;
import com.leolai.course.models.User;
import com.leolai.course.repositories.CourseRepository;
import com.leolai.course.repositories.UserRepository;

@Service
public class CourseService {
	private final UserRepository userRepository;
	private final CourseRepository courseRepository;
	
    public CourseService(UserRepository userRepository, CourseRepository courseRepository) {
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }
    public List<User> allUser() {
    	return (List<User>) userRepository.findAll();
    }
    public List<Course> allCourse() {
    	return (List<Course>) courseRepository.findAll();
    }
    public Course createCourse(Course course) {
    	return courseRepository.save(course);
    }
    public Course findCourse(Long id) {
    	Optional<Course> optionalCourse = courseRepository.findById(id);
    	if(optionalCourse.isPresent()) {
    		return optionalCourse.get();
    	} else {
    		return null;
    	}
    }
    public Course updateCourse(Course course) {
    	return courseRepository.save(course);
    }
    public Course updateCourse(Long id, String coursename, String instructor, Integer classlimit) {
    	Course updateCourse = courseRepository.findById(id).get();
    	updateCourse.setCoursename(coursename);
    	updateCourse.setInstructor(instructor);
    	updateCourse.setClasslimit(classlimit);
    	return courseRepository.save(updateCourse);
    }
    public void deleteCourse(Long id) {
    	courseRepository.deleteById(id);
    }
    public List<Object[]> howMany(Long id){
		return courseRepository.countPeople(id);
	}
}

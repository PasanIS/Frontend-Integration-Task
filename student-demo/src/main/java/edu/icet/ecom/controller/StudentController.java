package edu.icet.ecom.controller;

import edu.icet.ecom.model.Student;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
public class StudentController {

    List<Student> studentList = new ArrayList<>();

    @PostMapping("/create-student")
    void createStudent(@RequestBody Student student){
        System.out.println(student);
        studentList.add(student);
    }

    @GetMapping("/get-student")
    public List<Student> getStudent(){
        return studentList;
    }
}

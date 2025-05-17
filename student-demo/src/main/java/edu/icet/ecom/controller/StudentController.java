package edu.icet.ecom.controller;

import edu.icet.ecom.model.Student;
import org.springframework.web.bind.annotation.*;


@RestController
public class StudentController {

    @PostMapping("/create-student")
    void createStudent(@RequestBody Student student){
        System.out.println(student);
    }

    @GetMapping("/get-student")
    Student getStudent(){
        return null;
    }

    @PatchMapping("/update-student")
    Student updateStudent(){
        return null;
    }

    @DeleteMapping("/delete-student")
    Student deleteStudent(){
        return null;
    }

}

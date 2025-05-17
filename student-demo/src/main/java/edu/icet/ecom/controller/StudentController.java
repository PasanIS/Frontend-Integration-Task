package edu.icet.ecom.controller;

import edu.icet.ecom.model.Student;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class StudentController {

    @PostMapping("/create-student")
    void createStudent(@RequestBody Student student){
        System.out.println(student);
    }
}

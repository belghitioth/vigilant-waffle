package com.back.thedjhub.controllers;

//import com.example.demo.entities.Student;
//import com.example.demo.repositories.StudentRepository;
import com.back.thedjhub.entities.DJ;
import com.back.thedjhub.repositories.DJRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@RestController
@RequestMapping("djs")
public class DJController {

    @Autowired
    private DJRepository djRepository;

    @GetMapping
    public String getDJs() {
        List<DJ> djs = (List<DJ>) djRepository.findAll();
        return "Hello djs";
    }
}

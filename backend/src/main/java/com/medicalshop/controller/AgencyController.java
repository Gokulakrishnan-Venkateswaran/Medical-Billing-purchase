// src/main/java/com/medicalshop/controller/AgencyController.java
package com.medicalshop.controller;

import com.medicalshop.model.Agency;
import com.medicalshop.repository.AgencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agencies")
@CrossOrigin(origins = "http://localhost:3000")
public class AgencyController {

    @Autowired
    private AgencyRepository agencyRepository;

    @GetMapping
    public List<Agency> getAll() {
        return agencyRepository.findAll();
    }

    @PostMapping
    public Agency create(@RequestBody Agency agency) {
        return agencyRepository.save(agency);
    }
}

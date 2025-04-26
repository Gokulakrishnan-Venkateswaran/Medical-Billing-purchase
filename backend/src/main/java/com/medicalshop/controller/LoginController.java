// src/main/java/com/medicalshop/controller/LoginController.java
package com.medicalshop.controller;

import com.medicalshop.model.User;
import com.medicalshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public Map<String, Object> login(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        User existingUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());

        if (existingUser != null) {
            response.put("success", true);
            response.put("message", "Login successful");
        } else {
            response.put("success", false);
            response.put("message", "Invalid credentials");
        }
        return response;
    }
}

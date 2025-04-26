// src/main/java/com/medicalshop/controller/AuthKeyController.java
package com.medicalshop.controller;

import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthKeyController {

    private static String currentKey;

    @GetMapping("/generate")
    public Map<String, Object> generateKey() {
        Map<String, Object> response = new HashMap<>();
        currentKey = generateRandomKey(8);
        response.put("key", currentKey);
        return response;
    }

    @PostMapping("/verify")
    public Map<String, Object> verifyKey(@RequestBody Map<String, String> request) {
        String userKey = request.get("key");
        Map<String, Object> response = new HashMap<>();
        response.put("valid", userKey != null && userKey.equals(currentKey));
        return response;
    }

    private String generateRandomKey(int length) {
        String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        SecureRandom random = new SecureRandom();
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            sb.append(chars.charAt(random.nextInt(chars.length())));
        }
        return sb.toString();
    }
}

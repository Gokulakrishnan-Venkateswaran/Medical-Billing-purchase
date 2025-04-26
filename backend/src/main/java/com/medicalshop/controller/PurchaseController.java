// src/main/java/com/medicalshop/controller/PurchaseController.java
package com.medicalshop.controller;

import com.medicalshop.model.PurchaseItem;
import com.medicalshop.repository.PurchaseItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/purchase")
@CrossOrigin(origins = "http://localhost:3000")
public class PurchaseController {

    @Autowired
    private PurchaseItemRepository repository;

    @PostMapping
    public PurchaseItem save(@RequestBody PurchaseItem item) {
        return repository.save(item);
    }
}
